import React, { useState, useCallback, useEffect } from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Text, Icons, Headers, Modals, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Images, Cards } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import { FlatList, StyleSheet } from 'react-native';


export default function AllCategory(props) {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const handleSubCategories = (categoryName) =>{
        navigate(routes.subCategories, { categoryName });
    }
    const data = [
        { id: '1', title: 'cardiologie', image: appImages.sphygmomanometer },
        { id: '2', title: 'oncologie', image: appImages.radiation },
        { id: '3', title: 'Vasculaire', image: appImages.heart },
        { id: '4', title: 'hernie', image: appImages.pelvis },
        { id: '5', title: 'reanimation', image: appImages.defibrillator },
        { id: '6', title: 'reanimation', image: appImages.pharynx },
        { id: '7', title: 'cardiologie', image: appImages.sphygmomanometer },
        { id: '8', title: 'oncologie', image: appImages.radiation },
        { id: '9', title: 'Vasculaire', image: appImages.heart },
        { id: '10', title: 'hernie', image: appImages.pelvis },
        { id: '11', title: 'reanimation', image: appImages.defibrillator },
        { id: '12', title: 'reanimation', image: appImages.pharynx },
        { id: '13', title: 'cardiologie', image: appImages.sphygmomanometer },
        { id: '14', title: 'oncologie', image: appImages.radiation },
    ];
    const renderItem = ({ item }) => (
        <Cards.CardView  onPress={()=>handleSubCategories(item.title)} imageSource={item.image} title={capitalizeFirstLetter(item.title)} size={sizes.images.large}  titleStyle={{fontFamily:appFonts.poppinsSemiBold, fontSize: fontSizes.regularLarge}}/>
    );
    const { navigate, goBack } = props.navigation
    const { search, setSearch } = useHooks() || {};
    return (
        <>
            <Wrapper flex={0.94} backgroundColor={colors.appBgColor2}>
                {/* <ScrollViews.KeyboardAvoiding> */}
                <StatusBars.Dark backgroundColor={colors.appBgColor2} />
                <Wrapper
                    backgroundColor={colors.appBgColor2} >
                    <Wrapper flexDirectionRow
                        justifyContentSpaceBetween
                        marginHorizontalMedium
                        alignItemsCenter
                        style={{ marginTop: responsiveHeight(7) }}>
                        <Icons.Custom icon={appIcons.drawer} color={colors.black} size={sizes.icons.mediumLarge} />
                        <Images.Simple source={appImages.logo} style={{ height: sizes.images.largeXSmall, width: sizes.images.largeXLarge }} />
                        <Icons.Custom icon={appIcons.notification} color={colors.black} size={sizes.icons.mediumLarge} />
                    </Wrapper>
                    <Wrapper marginHorizontalTiny marginVerticalBase style={{ marginTop: totalSize(4) }}>
                        <TextInputs.SearchBar
                            value={search}
                            onChangeText={(text) => setSearch(text)}
                            iconColorRight={colors.iconColor5}
                            keyboardType={'email-address'}
                            inputContainerStyle={{
                                borderColor:
                                    colors.inputTextBorder2,
                                borderRadius: width(2),
                                backgroundColor: colors.inputfieldColor3,
                            }}
                            inputStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextRegular,
                                color: colors.appTextColor1
                            }}
                            placeholder={'Search'}
                            placeholderTextColor={colors.placeHolderColor2}
                            titleStyle={{
                                fontSize: fontSizes.small,
                                fontFamily: appFonts.poppinsSemiBold,
                                marginLeft: width(5),
                                color: colors.appTextColor2
                            }} />
                    </Wrapper>
                </Wrapper>
                <Wrapper style={{marginBottom:totalSize(25.8)}} backgroundColor={colors.appBgColor2}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        columnWrapperStyle={styles.row}
                        contentContainerStyle={styles.flatListContent}
                    />
                </Wrapper>
            </Wrapper>

        </>
    );
}

const styles = StyleSheet.create({
    row: {
        justifyContent: 'space-between',
        marginVertical: totalSize(1),
    },
    flatListContent: {
        paddingHorizontal: totalSize(1),
    },
})


