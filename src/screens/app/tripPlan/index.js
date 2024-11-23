import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList, PlacesList, Rating, ReviewList, CheckBoxes } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // For unique IDs
import storage from '@react-native-firebase/storage';
import { DrawerActions } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

export default function Index(props) {

    const { navigate, goBack, dispatch } = props.navigation
    const {
        clickedItems,
        modalVisible,
        setModalVisible,
        handlePressItem,
        data,
        search,
        pressed,
        setPressed,
        isChecked,
        setIsChecked,
        toggleCheckbox,
        increment,
        decrement,
        counter,
        editBooking,
        images,
        setSearch,
        handleProductPressItem,
        dummyProductData,
        categories,
        isDrawerOpen,
        imageData,
        statusBarVisible,
        DrawerActions,
        clickedProductItems
    } = useHooks() || {};

    return (
        <>
            <Wrapper isMain backgroundColor={colors.appColor1}>
                <StatusBars.Dark backgroundColor={colors.appColor1} />
                <Spacer/>
                <Wrapper
                    marginHorizontalSmall
                    backgroundColor={colors.appColor1}>
                    <Headers.Primary
                        onBackPress={() => goBack()}
                        showBackArrow
                        rightIconSource={appIcons.chevron_left}
                        // allowText
                        // iconColor={colors.iconColor1}
                        title={'Add Trip Details'}
                        titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1 }} />
                </Wrapper>
                <ScrollViews.KeyboardAvoiding contentContainerStyle={{ flexGrow: 1 }}>
                    <Wrapper flex={1} backgroundColor={colors.appColor1} marginHorizontalBase>
                        <TextInputs.Colored
                            editable={false}
                            title={'Destination'}
                            // value={truncatedAddress}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.location}
                            customIconRight={appIcons.dropDown}
                            iconColorRight={colors.iconColor1}
                            iconSizeRight={sizes.icons.tiny}
                            iconStyleRight={{
                                marginRight: width(5)
                            }}
                            inputStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.appTextRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            // onPressIconRight={() => navigate(routes.addAddress)}
                            placeholder={'Phuket, Thilland'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,

                                color: colors.appTextColor3
                            }} />
                        <Spacer isSmall />
                        <TextInputs.Colored
                            editable={false}
                            title={'Map Pins'}
                            // value={truncatedAddress}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.pin}
                            customIconRight={appIcons.chevron_right}
                            iconColorRight={colors.iconColor1}
                            iconSizeRight={sizes.icons.tiny}
                            iconStyleRight={{
                                marginRight: width(5)
                            }}
                            inputStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            onPressIconRight={() => navigate(routes.addAddress)}
                            placeholder={'Select here...'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                        <Spacer isTiny />
                        <Wrapper flexDirectionRow>
                            <Spacer horizontal isTiny />
                            <CheckBoxes.Primary onPress={toggleCheckbox} textStyle={{ left: width(2), fontFamily: appFonts.interRegular, fontSize: fontSizes.small, color: colors.appTextColor6 }} text={'Select LocalPin Later'} checked={isChecked} checkIconsize={sizes.icons.tiny} customCheckIcon={appIcons.checked} customUnCheckIcon={appIcons.blankCheck} />
                        </Wrapper>
                        <Spacer isSmall />
                        <TextInputs.Colored
                            editable={false}
                            title={'Schedule'}
                            // value={truncatedAddress}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.location}
                            customIconRight={appIcons.dropDown}
                            iconColorRight={colors.iconColor1}
                            iconSizeRight={sizes.icons.tiny}
                            iconStyleRight={{
                                marginRight: width(5)
                            }}
                            inputStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.appTextRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            // onPressIconRight={() => navigate(routes.addAddress)}
                            placeholder={'Feb 17 - 20 | 4 Days'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,

                                color: colors.appTextColor3
                            }} />
                            <Spacer isSmall/>
                            <Spacer isTiny />
                            <Text style={{fontFamily:appFonts.appTextBold, fontSize:fontSizes.medium, color:colors.appTextColor6}}>Who’s Coming?</Text>
                            <TextInputs.Counter
                            title={'Adults'}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2),
                                height: sizes.inputHeight
                            }}
                            counter={counter.adults}
                            increment={() => increment('adults')}
                            decrement={() => decrement('adults')}
                            customIconLeft={appIcons.adults}
                            customIconRight
                            iconColorRight={colors.iconColor3}
                            iconSizeRight={sizes.icons.small}
                            inputStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                        <TextInputs.Counter
                            title={'Toddler'}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2),
                                height: sizes.inputHeight
                            }}
                            counter={counter.toddler}
                            increment={() => increment('toddler')}
                            decrement={() => decrement('toddler')}
                            customIconLeft={appIcons.young}
                            customIconRight
                            iconColorRight={colors.iconColor3}
                            iconSizeRight={sizes.icons.small}
                            inputStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                        <TextInputs.Counter
                            title={'Infant'}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2),
                                height: sizes.inputHeight
                            }}
                            counter={counter.infant}
                            increment={() => increment('infant')}
                            decrement={() => decrement('infant')}
                            customIconLeft={appIcons.baby}
                            customIconRight
                            iconColorRight={colors.iconColor3}
                            iconSizeRight={sizes.icons.small}
                            inputStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                            <Spacer isTiny/>
                            <Wrapper justifyContentFlexstart flex={1}>
                            <Spacer isSmall/>
                            <Buttons.Colored
                                onPress={editBooking ? ()=>navigate(routes.booking) : () => navigate(routes.schedule)}
                                buttonStyle={{ marginHorizontal: 0 }}
                                text={editBooking ? 'Save Changes' : 'Next'}
                                // iconContainer={{ left: width(34) }}
                                gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                textStyle={{
                                    color: colors.appTextColor5,
                                    fontFamily: appFonts.appTextMedium,
                                    fontSize: fontSizes.regular,
                                }} />
                            </Wrapper>
                     </Wrapper>
                </ScrollViews.KeyboardAvoiding>
            </Wrapper>

            <Modals.PopupPrimary toggle={() => setModalVisible(!modalVisible)} calender topMargin titleStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium, color: colors.appTextColor6 }} title={'Availability'} visible={modalVisible} />
        </>
    );
}

const styles = StyleSheet.create({
    selected: {
        borderRadius: 50,
        backgroundColor: colors.appBgColor2,
    },
    unSelected: {
        borderRadius: 50,
        backgroundColor: colors.transparent,
        borderWidth: responsiveWidth(0.1),
        borderColor: colors.borderColor1
    },
    selectedText: {
        color: colors.appTextColor3,
        fontFamily: appFonts.appTextMedium,
        fontSize: fontSizes.regular
    },
    unSelectedText: {
        color: colors.appTextColor6,
        fontFamily: appFonts.appTextRegular,
        fontSize: fontSizes.regular
    }
})


