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
                        // allowText
                        // iconColor={colors.iconColor1}
                        title={'Change Password'}
                        titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1, height: height(7) }} />
                </Wrapper>
                <ScrollViews.KeyboardAvoiding contentContainerStyle={{ flexGrow: 1 }}>
                    <Spacer isMedium />
                    <Wrapper marginHorizontalBase backgroundColor={colors.appColor1}>
                        <TextInputs.Colored
                            title={'Current Password'}
                            value={currentPassword}

                            onChangeText={(text) => setCurrentPassword(text)}
                            keyboardType={'default'}
                            secureTextEntry={!showCurrentPassword}
                            onPressIconRight={toggleCurrentPasswordVisibility}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.lock}
                            customIconRight={appIcons.eye}
                            iconColorRight={colors.iconColor4}
                            iconSizeRight={sizes.icons.small}
                            iconStyleRight={{
                                marginRight: width(4)
                            }}
                            inputStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.appTextRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            // iconStyleLeft={{  }}
                            placeholder={'Minimum 8 characters'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                            <TextInputs.Colored
                            title={'New Password'}
                            value={newPassword}
                            onChangeText={(text) => setNewPassword(text)}
                            keyboardType={'default'}
                            secureTextEntry={!showNewPassword}
                            onPressIconRight={toggleNewPasswordVisibility}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.lock}
                            customIconRight={appIcons.eye}
                            iconColorRight={colors.iconColor4}
                            iconSizeRight={sizes.icons.small}
                            iconStyleRight={{
                                marginRight: width(4)
                            }}
                            inputStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.appTextRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            // iconStyleLeft={{  }}
                            placeholder={'Minimum 8 characters'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                            <TextInputs.Colored
                            title={'New Confirm Password'}
                            value={confirmPassword}
                            onChangeText={(text) => setConfirmPassword(text)}
                            keyboardType={'default'}
                            secureTextEntry={!showConfirmPassword}
                            onPressIconRight={toggleConfirmPasswordVisibility}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.lock}
                            customIconRight={appIcons.eye}
                            iconColorRight={colors.iconColor4}
                            iconSizeRight={sizes.icons.small}
                            iconStyleRight={{
                                marginRight: width(4)
                            }}
                            inputStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.appTextRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            // iconStyleLeft={{  }}
                            placeholder={'Minimum 8 characters'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                    </Wrapper>
                    <Wrapper flex={1} marginHorizontalBase justifyContentFlexend marginVerticalSmall>
                        <Buttons.Colored
                            onPress={() => navigate(routes.account)}
                            buttonStyle={{ marginHorizontal: 0 }}
                            text={'Save Changes'}
                            iconContainer={{ left: width(34) }}
                            gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                            textStyle={{
                                color: colors.appTextColor5,
                                fontFamily: appFonts.appTextBold,
                                fontSize: fontSizes.regular,
                            }} />
                    </Wrapper>
                </ScrollViews.KeyboardAvoiding>
            </Wrapper>
        </>
    );
}

const styles = StyleSheet.create({
    selectedText: {
        right: width(8),
        color: colors.appTextColor18,
        fontFamily: appFonts.interMedium,
        fontSize: fontSizes.h6
    },
    unSelectedText: {
        color: colors.appTextColor19,
        fontFamily: appFonts.interMedium,
        fontSize: fontSizes.h6
    },
})

