import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';
import { height, width } from 'react-native-dimension';

export default function AddProduct() {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [optionalSubCategory, setOptionalSubCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setPrice] = useState('');
  const [productCapacity, setCapacity] = useState('');
  const [productTablets, setTablets] = useState('');
  const [productImage, setImageUri] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setImageUri(image.path);
      })
      .catch(error => {
        console.log('ImagePicker Error: ', error);
      });
  };

  const uploadImage = async () => {
    if (!productImage) return null;
    setLoading(true);
    const fileName = productImage.substring(productImage.lastIndexOf('/') + 1);
    const storageRef = storage().ref(`products/${fileName}`);
    await storageRef.putFile(productImage);
    const downloadURL = await storageRef.getDownloadURL();
    setLoading(false);
    return downloadURL;
  };

  const handleSubmit = async () => {
    if (!category || !productName || !productPrice || !productCapacity || !productTablets) {
      Alert.alert('Please fill all the required fields');
      return;
    }
    if (isNaN(productPrice)) {
      Alert.alert('Please enter a valid price');
      return;
    }

    setLoading(true);

    try {
      const imageUrl = await uploadImage();
      const productData = {
        productName,
        productPrice,
        productCapacity,
        productTablets,
        productImage: imageUrl || null,
      };

      const categoryRef = firestore().collection('Categories').doc(category);
      await categoryRef.set({ name: category }, { merge: true });

      let subCategoryRef = categoryRef.collection('Subcategories').doc(subCategory);
      if (subCategory) {
        await subCategoryRef.set({ name: subCategory }, { merge: true });
      }

      if (optionalSubCategory) {
        const optionalSubCategoryRef = subCategoryRef.collection('Subcategories').doc(optionalSubCategory);
        await optionalSubCategoryRef.set({ name: optionalSubCategory }, { merge: true });
        await optionalSubCategoryRef.collection('Products').add(productData);
      } else {
        await subCategoryRef.collection('Products').add(productData);
      }

      Alert.alert('Product added successfully');
      resetForm();
    } catch (error) {
      console.error('Error adding product: ', error);
      Alert.alert('Error adding product');
    }

    setLoading(false);
  };

  const resetForm = () => {
    setCategory('');
    setSubCategory('');
    setOptionalSubCategory('');
    setProductName('');
    setPrice('');
    setCapacity('');
    setTablets('')
    setImageUri(null);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Category</Text>
        <TextInput
        placeholderTextColor={'black'}
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
          style={styles.input}
        />
        <Text style={styles.label}>Sub Category</Text>
        <TextInput
        placeholderTextColor={'black'}
          placeholder="Sub Category"
          value={subCategory}
          onChangeText={setSubCategory}
          style={styles.input}
        />
        <Text style={styles.label}>Optional Sub Category</Text>
        <TextInput
        placeholderTextColor={'black'}
          placeholder="Optional Sub Category (optional)"
          value={optionalSubCategory}
          onChangeText={setOptionalSubCategory}
          style={styles.input}
        />
        <Text style={styles.label}>Product Name</Text>
        <TextInput
        placeholderTextColor={'black'}
          placeholder="Product Name"
          value={productName}
          onChangeText={setProductName}
          style={styles.input}
        />
        <Text style={styles.label}>Price</Text>
        <TextInput
        placeholderTextColor={'black'}
          placeholder="Price"
          value={productPrice}
          onChangeText={setPrice}
          style={styles.input}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Capacity</Text>
        <TextInput
        placeholderTextColor={'black'}
          placeholder="Capacity"
          value={productCapacity}
          onChangeText={setCapacity}
          style={styles.input}
        />
        <Text style={styles.label}>Tablets</Text>
        <TextInput
          placeholder="Tablets"
          value={productTablets}
          onChangeText={setTablets}
          style={styles.input}
        />
        <Button title="Pick Image" onPress={pickImage} />
        {productImage && (
          <Image
            source={{ uri: productImage }}
            style={{ width: width(80), height: height(40), marginVertical: 20 }}
          />
        )}
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Button title="Add Product" onPress={handleSubmit} />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    padding: 20,
    height:1500
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    color:'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});
