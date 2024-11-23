import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Text, Icons, Headers, Modals, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Images, Spacer } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // For unique IDs
import storage from '@react-native-firebase/storage';
import { DrawerActions } from '@react-navigation/native';

export default function HelpCenter(props) {

    const { navigate, goBack, dispatch } = props.navigation
    const {
        statusBarVisible,
        DrawerActions, } = useHooks() || {};
    return (
        <>
            <StatusBars.Dark backgroundColor={colors.appColor1} />
            <Spacer isStatusBarHeigt />
            <Wrapper isMain backgroundColor={colors.appColor1}>
                <ScrollViews.KeyboardAvoiding>
                    <Wrapper marginHorizontalBase >
                        <Headers.Primary
                            onBackPress={() => goBack()}
                            showBackArrow
                            rightIconSource={appIcons.chevron_left}
                            allowText
                            textColor={colors.appTextColor9}
                            iconColor={colors.iconColor1}
                            title={'Help Center'}
                            titleStyle={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.medium }}
                            iconContainer={{ flexDirection: 'row' }}
                            containerStyle={{ backgroundColor: colors.appColor1, height: height(7) }} />
                        <Wrapper alignItemsCenter>
                            <Images.MainLogo size={sizes.images.logoWidthLarge} source={appImages.helpCenter} style={{ resizeMode: 'contain' }} />
                        </Wrapper>
                        <Wrapper marginVerticalLarge>
                            <Wrapper marginVerticalTiny marginHorizontalSmall>
                                <TouchableOpacity onPress={() => navigate(routes.faqs)}>
                                    <TextInputs.Colored
                                        editable={false}
                                        containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                                        inputContainerStyle={{
                                            backgroundColor: colors.inputfieldColor1,
                                            borderColor: colors.inputTextBorder,
                                            borderRadius: totalSize(2)
                                        }}
                                        customIconRight={appIcons.chevron_right}
                                        iconColorRight={colors.iconColor1}
                                        iconSizeRight={sizes.icons.tiny}
                                        iconStyleRight={{
                                            marginRight: width(5),
                                            resizeMode: 'contain'
                                        }}
                                        inputStyle={{
                                            fontSize: fontSizes.medium,
                                            fontFamily: appFonts.appTextRegular,
                                            color: colors.appTextColor1
                                        }}
                                        placeholder={'FAQ'}
                                        placeholderTextColor={colors.placeHolderColor}
                                    />
                                </TouchableOpacity>
                            </Wrapper>
                            <Wrapper marginVerticalTiny marginHorizontalSmall>
                                <TouchableOpacity onPress={() => navigate(routes.contactSupport)}>
                                    <TextInputs.Colored
                                        editable={false}
                                        containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                                        inputContainerStyle={{
                                            backgroundColor: colors.inputfieldColor1,
                                            borderColor: colors.inputTextBorder,
                                            borderRadius: totalSize(2)
                                        }}
                                        customIconRight={appIcons.chevron_right}
                                        iconColorRight={colors.iconColor1}
                                        iconSizeRight={sizes.icons.tiny}
                                        iconStyleRight={{
                                            marginRight: width(5),
                                            resizeMode: 'contain'
                                        }}
                                        inputStyle={{
                                            fontSize: fontSizes.medium,
                                            fontFamily: appFonts.appTextRegular,
                                            color: colors.appTextColor1
                                        }}
                                        placeholder={'Contact Support'}
                                        placeholderTextColor={colors.placeHolderColor}
                                    />
                                </TouchableOpacity>
                            </Wrapper>
                            <Wrapper marginVerticalTiny marginHorizontalSmall>
                                <TouchableOpacity onPress={() => navigate(routes.common)}>
                                    <TextInputs.Colored
                                        editable={false}
                                        containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                                        inputContainerStyle={{
                                            backgroundColor: colors.inputfieldColor1,
                                            borderColor: colors.inputTextBorder,
                                            borderRadius: totalSize(2)
                                        }}
                                        customIconRight={appIcons.chevron_right}
                                        iconColorRight={colors.iconColor1}
                                        iconSizeRight={sizes.icons.tiny}
                                        iconStyleRight={{
                                            marginRight: width(5),
                                            resizeMode: 'contain'
                                        }}
                                        inputStyle={{
                                            fontSize: fontSizes.medium,
                                            fontFamily: appFonts.appTextRegular,
                                            color: colors.appTextColor1
                                        }}
                                        placeholder={'Guidelines'}
                                        placeholderTextColor={colors.placeHolderColor}
                                    />
                                </TouchableOpacity>
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


