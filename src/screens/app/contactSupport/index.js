import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Text, Icons, Headers, Modals, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Images, Buttons, Spacer } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // For unique IDs
import storage from '@react-native-firebase/storage';
import { DrawerActions } from '@react-navigation/native';

export default function ContactSupport(props) {

    const { navigate, goBack, reset, dispatch } = props.navigation
    const {
        statusBarVisible,
        DrawerActions,
        expanded,
        handleExpand,
        faqsData
    } = useHooks() || {};

    return (
        <>
            <StatusBars.Dark backgroundColor={colors.appColor1} />
            <Spacer isStatusBarHeigt />
            <Wrapper isMain backgroundColor={colors.appColor1}>
                <ScrollViews.KeyboardAvoiding>
                    <Wrapper >
                        <Wrapper marginHorizontalBase>
                            <Headers.Primary
                                onBackPress={() => navigate(routes.helpCenter)}
                                rightIconSource={appIcons.chevron_left}
                                showBackArrow
                                allowText
                                textColor={colors.appTextColor9}
                                iconColor={colors.iconColor1}
                                title={'Contact Support'}
                                titleStyle={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.medium }}
                                iconContainer={{ flexDirection: 'row' }}
                                containerStyle={{ backgroundColor: colors.appColor1, height:height(7) }} />
                            <Spacer isMedium/>
                            <Wrapper marginHorizontalTiny>
                                <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.appTextBold, color: colors.appTextColor1 }}>Write us a message and we’ll reach back to{'\n'}you</Text>
                            </Wrapper>
                            <Wrapper marginVerticalMedium>
                                <TextInputs.Colored
                                    title={'Write a message'}
                                    // value={fullName}
                                    // onChangeText={(text) => setFullName(text)}
                                    keyboardType={'default'}
                                    containerStyle={{ marginHorizontal: 0 }}
                                    inputContainerStyle={{
                                        
                                        backgroundColor: colors.inputfieldColor1,
                                        borderColor: colors.inputTextBorder,
                                        borderRadius: totalSize(2)
                                    }}
                                    inputStyle={{
                                        height: responsiveHeight(15),
                                        textAlignVertical:'top',
                                        fontSize: fontSizes.medium,
                                        fontFamily: appFonts.appTextRegular,
                                        color: colors.appTextColor1
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
                            <Wrapper style={{ marginTop: responsiveHeight(10) }}>
                                <Buttons.Colored
                                    onPress={() => handleResetPassword()}
                                    buttonStyle={{ marginHorizontal: 0 }}
                                    text={'Send Message'}
                                    iconContainer={{ left: width(34) }}
                                    gradientColors={[colors.buttonColor1, colors.buttonColor2]}
                                    textStyle={{
                                        color: colors.appTextColor5,
                                        fontFamily: appFonts.appTextMedium,
                                        fontSize: fontSizes.regular,
                                    }} />

                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </ScrollViews.KeyboardAvoiding>
            </Wrapper>

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