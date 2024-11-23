import React, { useState, useCallback, useEffect, useRef } from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Text, Icons, Headers, Modals, ScrollViews, StatusBars, TextInputs, ProductList, Images, Cards, CategoryList, SubCategoryList } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import { FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';


export default function SubCategories(props) {
    const route = useRoute();
    const { navigate, goBack } = props.navigation || {};
    const categoryName = route?.params?.categoryName || 'Default Category';
    const { search, setSearch, dummyData, dummyProductData, clickedProductItems, handleProductPressItem, handlePressItem, clickedItems } = useHooks() || {};

    const [outerScrollEnabled, setOuterScrollEnabled] = useState(false);
    const innerScrollViewRef = useRef(null);

    const handleInnerScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        // Enable outer scroll only if the inner scroll view is scrolled up
        setOuterScrollEnabled(offsetY <= 0);
    };
    const capitalizeFirstLetter1 = (categoryName) => {
        return categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
    };
    const capitalizeFirstLetter = (categoryName) => {
        return categoryName.toUpperCase();
    };

    return (
        <>
            <Wrapper isMain backgroundColor={colors.appBgColor2}>
                <StatusBars.Dark backgroundColor={colors.appBgColor2} />
                <Wrapper marginVerticalTiny>
                    <ScrollViews.KeyboardAvoiding
                       scrollEnabled={outerScrollEnabled}
                    >
                        <Wrapper
                            backgroundColor={colors.appBgColor2} >

                            <Wrapper alignItemsCenter justifyContentSpaceAround flexDirectionRow>
                                <Wrapper marginHorizontalSmall
                                    style={{ marginTop: height(5), }}>
                                    <Headers.Primary
                                        onBackPress={() => { goBack() }}
                                        showBackArrow
                                        allowText
                                        textColor={colors.appTextColor9}
                                        iconColor={colors.iconColor1}
                                        iconContainer={{ flexDirection: 'row' }}
                                        containerStyle={{ backgroundColor: colors.appColor1 }} />
                                    {/* <Text></Text> */}
                                </Wrapper>
                                <Wrapper paddingHorizontalMedium alignItemsFlexStart style={{ marginTop: height(5), }} justifyContentCenter flex={0.55}>
                                    <Text isLarge style={{ color: colors.appTextColor9, fontFamily: appFonts.appTextMedium }}>{capitalizeFirstLetter1(categoryName)}</Text>
                                </Wrapper>
                            </Wrapper>

                            <Wrapper marginVerticalTiny>
                                <Wrapper marginHorizontalTiny marginVerticalTiny >
                                    <TextInputs.SearchBar
                                        value={search}
                                        iconColorRight={colors.iconColor7}
                                        onChangeText={(text) => setSearch(text)}
                                        keyboardType={'email-address'}
                                        inputContainerStyle={{
                                            borderColor:
                                                colors.inputTextBorder3,
                                            borderRadius: width(2),
                                            backgroundColor: colors.inputfieldColor3,
                                            shadowColor: colors.black,
                                            // shadowOffset: { width: 4, height: 4 },
                                            shadowOpacity: 0.7,
                                            elevation: 5,
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
                                            color: colors.appTextColor2,
                                        }} />
                                </Wrapper>
                                <Wrapper marginVerticalSmall

                                    style={{ paddingLeft: responsiveWidth(7) }} >
                                    <CategoryList

                                        selectedStyle={styles.selected}
                                        unSelectedStyle={styles.unSelected}
                                        clickedItems={clickedItems}
                                        unSelectedText={styles.unSelectedText}
                                        selectedText={styles.selectedText}
                                        handlePressItem={handlePressItem}
                                        data={dummyData.map(item => ({ ...item, userName: capitalizeFirstLetter(item.userName) }))} />
                                </Wrapper>
                                <Wrapper
                                    
                                    marginVerticalSmall
                                    style={{ paddingLeft: responsiveWidth(7), }}>
                                    <SubCategoryList
                                        clickedItems={clickedProductItems}
                                        handlePressItem={handleProductPressItem}
                                        data={dummyProductData}
    
                                    />
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                    </ScrollViews.KeyboardAvoiding>
                </Wrapper>
                {/* <ScrollViews.KeyboardAvoiding>
                    
                </ScrollViews.KeyboardAvoiding> */}
                {/* <Wrapper style={{ marginBottom: totalSize(25.8) }} backgroundColor={colors.appBgColor2}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        columnWrapperStyle={styles.row}
                        contentContainerStyle={styles.flatListContent}
                    />
                </Wrapper> */}
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
    selected: {
        borderRadius: 50,
        backgroundColor: colors.appColor2,
    },
    unSelected: {
        borderRadius: 50,
        backgroundColor: colors.transparent,
        borderWidth: responsiveWidth(0.1),
        borderColor: colors.borderColor1
    },
    selectedText: {
        color: colors.appTextColor6,
        fontFamily: appFonts.appTextMedium,
        fontSize: fontSizes.regular
    },
    unSelectedText: {
        color: colors.appTextColor9,
        fontFamily: appFonts.appTextRegular,
        fontSize: fontSizes.regular
    }
})


