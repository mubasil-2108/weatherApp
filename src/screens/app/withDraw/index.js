import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import ScrollPicker from "react-native-wheel-scrollview-picker";

import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList, PlacesList, Rating, ReviewList, CheckBoxes, TimePicker } from '../../../components';
import { useHooks } from './hooks'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight, appStyles } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';


export default function Index(props) {

    const { navigate, goBack, dispatch } = props.navigation
    const {
        handleWithDraw,
        modalVisible,
        setModalVisible,
        confirmPassword,
        currentPassword,
        newPassword,
        setConfirmPassword,
        setCurrentPassword,
        setNewPassword,
        toggleConfirmPasswordVisibility,
        toggleCurrentPasswordVisibility,
        toggleNewPasswordVisibility,
        showConfirmPassword,
        showCurrentPassword,
        showNewPassword
    } = useHooks() || {};

    return (
        <>
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
                        title={'Withdraw'}
                        titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1, height: height(7) }} />
                </Wrapper>
                <Spacer isMedium />
                <ScrollViews.KeyboardAvoiding contentContainerStyle={{ flexGrow: 1 }}>
                    <Wrapper marginHorizontalBase>
                        <Wrapper justifyContentFlexend backgroundColor={colors.appColor5} style={{ borderRadius: totalSize(3.5) }} paddingHorizontalBase paddingVerticalMedium >
                            <Wrapper justifyContentSpaceBetween flexDirectionRow style={{ bottom: height(1) }}>
                                <Wrapper justifyContentFlexend>
                                    <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor5 }}>Balance</Text>
                                </Wrapper>
                                <Wrapper>
                                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.h3_small, color: colors.appTextColor5 }}>$56,763.20</Text>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                        <Spacer isMedium />
                        <Spacer isSmall />
                        <TextInputs.Colored
                            title={'Amount'}
                            // value={email}
                            // onChangeText={(text) => setEmail(text)}
                            keyboardType={'numeric'}
                            containerStyle={{ marginHorizontal: 0 }}
                            inputCntainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.dollar}
                            inputStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.AmiriQuran_Regular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            // iconStyleLeft={{  }}
                            placeholder={'$100'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.AmiriQuran_Regular,
                                color: colors.appTextColor3
                            }} />
                        <Spacer isMedium />
                        <Text style={{ fontFamily: appFonts.AmiriQuran_Regular, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Card Details</Text>
                        <Spacer isTiny />

                        <TextInputs.Colored
                            title={'Full Name'}
                            // value={email}
                            // onChangeText={(text) => setEmail(text)}
                            keyboardType={'default'}
                            containerStyle={{ marginHorizontal: 0 }}
                            inputCntainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            inputStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.AmiriQuran_Regular,
                                color: colors.appTextColor1
                            }}
                            placeholder={'John Doe'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.AmiriQuran_Regular,
                                color: colors.appTextColor3
                            }} />
                        <Spacer isSmall />
                        <TextInputs.Colored
                            title={'Card Number'}
                            // value={email}
                            // onChangeText={(text) => setEmail(text)}
                            keyboardType={'numeric'}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputCntainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            inputStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.AmiriQuran_Regular,
                                color: colors.appTextColor1
                            }}
                            placeholder={'xxxx-xxxx-xxxx'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.AmiriQuran_Regular,
                                color: colors.appTextColor3
                            }} />
                    </Wrapper>
                </ScrollViews.KeyboardAvoiding>
                <Wrapper marginHorizontalBase paddingVerticalSmall justifyContentFlexend >
                    <Buttons.Colored
                        onPress={() => handleWithDraw()}
                        buttonStyle={{ marginHorizontal: 0 }}
                        text={'Withdraw'}
                        iconContainer={{ left: width(34) }}
                        gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                        textStyle={{
                            color: colors.appTextColor5,
                            fontFamily: appFonts.appTextMedium,
                            fontSize: fontSizes.regular,
                        }} />

                </Wrapper>
            </Wrapper>
            <Wrapper>
                <Modals.Swipable
                    hideHeader
                    visible={modalVisible}
                    onPress={()=>  setModalVisible(false)}
                    data={'Amount transferred successfully'}
                    headerTitle={'Success'}
                    // colorsOpacity={[colors.transparent, colors.transparent]}
                    containerStyle={{
                        shadowColor: '#000000',
                        shadowOffset: { width: 4, height: 4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 20,
                        elevation: 4,
                    }}
                />
            </Wrapper>
        </>
    );
}
