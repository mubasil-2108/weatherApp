import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList, Switches, GradientText, CheckBoxes } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight, appStyles } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // For unique IDs
import storage from '@react-native-firebase/storage';
import { DrawerActions } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Index(props) {

    const { navigate, goBack, dispatch } = props.navigation

    const {
        pressed,
        setPressed,
        handleIDCard,
        idCard,
    } = useHooks() || {};

    return (
        <Wrapper isMain backgroundColor={colors.appColor1}>
            <StatusBars.Dark backgroundColor={colors.appColor1} />
            <Spacer isStatusBarHeigt />
            <Wrapper
                marginHorizontalTiny
                backgroundColor={colors.appColor1}>
                <Headers.Primary
                    onBackPress={() => goBack()}
                    showBackArrow
                    rightIconSource={appIcons.chevron_left}
                    title={'Send Customize Offer'}
                    titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                    iconContainer={{ flexDirection: 'row' }}
                    containerStyle={{ backgroundColor: colors.appColor1, height: height(7) }} />
            </Wrapper>
            <ScrollViews.KeyboardAvoiding>
                <Spacer />
                <Wrapper marginHorizontalBase>
                    <TextInputs.Colored
                        title={'Service Type'}
                        // value={email}
                        // onChangeText={(text) => setEmail(text)}
                        keyboardType={'email-address'}
                        containerStyle={{ marginHorizontal: 0 }}
                        inputCntainerStyle={{
                            backgroundColor: colors.inputfieldColor1,
                            borderColor: colors.inputTextBorder,
                            borderRadius: totalSize(2)
                        }}
                        inputStyle={{
                            fontSize: fontSizes.medium,
                            fontFamily: appFonts.appTextRegular,
                            color: colors.appTextColor1
                        }}
                        placeholder={'Type here...'}
                        placeholderTextColor={colors.placeHolderColor}
                        titleStyle={{
                            fontSize: fontSizes.regular,
                            fontFamily: appFonts.appTextBold,
                            color: colors.appTextColor3
                        }} />
                    <Spacer isSmall />
                    <TextInputs.Colored
                        title={'Price'}
                        // value={email}
                        // onChangeText={(text) => setEmail(text)}
                        keyboardType={'numeric'}
                        containerStyle={{ marginHorizontal: 0 }}
                        customIconLeft={appIcons.dollar}
                        inputCntainerStyle={{
                            backgroundColor: colors.inputfieldColor1,
                            borderColor: colors.inputTextBorder,
                            borderRadius: totalSize(2)
                        }}
                        iconColorLeft={colors.iconColor1}
                        inputStyle={{
                            fontSize: fontSizes.medium,
                            fontFamily: appFonts.appTextRegular,
                            color: colors.appTextColor1,
                        }}
                        placeholder={'$100'}
                        placeholderTextColor={colors.placeHolderColor}
                        titleStyle={{
                            fontSize: fontSizes.regular,
                            fontFamily: appFonts.appTextBold,
                            color: colors.appTextColor3
                        }} />
                    <Spacer isBasic />
                    <Text style={{ fontFamily: appFonts.satoshiBold, fontSize: fontSizes.regular }}>Photo</Text>
                    <Spacer />
                    <LinearGradient
                        colors={pressed ? [colors.transparent, colors.transparent] : [colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{
                            borderRadius: 50,
                            padding: 1,
                        }}
                    >
                        <TouchableOpacity
                            onPressIn={() => {
                                setPressed(true);
                                handleIDCard()
                            }}
                            onPressOut={() => setPressed(false)}
                        >
                            <Wrapper paddingVerticalLarge justifyContentCenter alignItemsCenter style={{ borderRadius: 50, height: sizes.images.logoHeightLarge }} backgroundColor={colors.appColor6}>
                                {idCard ? (
                                    <Images.MainLogo
                                        style={{ borderRadius: 50, height: sizes.images.logoHeightLarge, width: '100%' }}
                                        source={{ uri: idCard }}
                                    />
                                ) : (
                                    <>
                                        <Icons.Custom icon={appIcons.picker} size={sizes.icons.largeTiny} />
                                        <Spacer />
                                        <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor10, fontSize: fontSizes.medium }}>
                                            Upload file
                                        </Text>
                                    </>
                                )}
                            </Wrapper>
                        </TouchableOpacity>
                    </LinearGradient>
                    <Spacer isBasic />
                    <TextInputs.Colored
                        title={'Description'}
                        value={'Lorem ipsum dolor sit amet. Id dolorem cumque qui fugiat incidunt non minima Quis. '}
                        // onChangeText={(text) => setFullName(text)}
                        keyboardType={'default'}
                        containerStyle={{ marginHorizontal: 0, paddingHorizontal: 0 }}
                        inputContainerStyle={{
                            paddingHorizontal: 0,
                            backgroundColor: colors.inputfieldColor1,
                            borderColor: colors.inputTextBorder,
                            borderRadius: totalSize(2),
                            marginHorizontal: 0
                        }}
                        inputStyle={{
                            height: responsiveHeight(12),
                            textAlignVertical: 'top',
                            fontSize: fontSizes.medium,
                            fontFamily: appFonts.appTextRegular,
                            color: colors.appTextColor1,
                            textAlign: 'left'
                        }}
                        placeholder={'Type here...'}
                        multiline
                        placeholderTextColor={colors.placeHolderColor}
                        titleStyle={{
                            fontSize: fontSizes.regular,
                            fontFamily: appFonts.appTextBold,
                            color: colors.appTextColor3
                        }} />
                </Wrapper>
            </ScrollViews.KeyboardAvoiding>
            <Wrapper flex={1} marginHorizontalBase paddingVerticalSmall justifyContentFlexend >
                <Buttons.Colored
                    onPress={() => navigate(routes.chatScreen, {offerSend : 'locale', locale: 'locale'})}
                    buttonStyle={{ marginHorizontal: 0 }}
                    text={'Send Offer'}
                    iconContainer={{ left: width(34) }}
                    gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                    textStyle={{
                        color: colors.appTextColor5,
                        fontFamily: appFonts.appTextMedium,
                        fontSize: fontSizes.regular,
                    }} />

            </Wrapper>
        </Wrapper>
    )
}