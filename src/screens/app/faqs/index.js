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

export default function Faqs(props) {

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
                    <Wrapper>
                        <Wrapper marginHorizontalBase>
                            <Headers.Primary
                                onBackPress={() => navigate(routes.helpCenter)}
                                rightIconSource={appIcons.chevron_left}
                                showBackArrow
                                allowText
                                textColor={colors.appTextColor9}
                                iconColor={colors.iconColor1}
                                title={'FAQ'}
                                titleStyle={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.medium }}
                                iconContainer={{ flexDirection: 'row' }}
                                containerStyle={{ backgroundColor: colors.appColor1, height: height(7) }} />
                            <Spacer isMedium />
                            <Wrapper marginHorizontalSmall>
                                <Text style={{ textAlign: 'justify', fontSize: fontSizes.medium, fontFamily: appFonts.appTextBold, color: colors.appTextColor1 }}>We’re here to help you with anything and{'\n'}everyting on Local Eyes</Text>
                            </Wrapper>
                            <Wrapper marginVerticalTiny marginHorizontalSmall>
                                <Text style={{ fontSize: fontSizes.h6, fontFamily: appFonts.appTextBold, color: colors.appTextColor1 }}>FAQ</Text>
                            </Wrapper>
                        </Wrapper>
                        <Wrapper marginVerticalLarge>
                            <Wrapper marginVerticalSmall style={{ borderWidth: 0.4, borderColor: colors.spacerColor2 }} />
                            {faqsData.map((item, index) => (
                                <React.Fragment key={index}>
                                    <TouchableOpacity onPress={() => handleExpand(index)}>
                                        <Wrapper flexDirectionRow marginHorizontalMedium alignItemsCenter justifyContentSpaceBetween>
                                            <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.appTextMedium, color: colors.appTextColor25 }}>{item.title}</Text>
                                            <Icons.Custom size={sizes.icons.small} icon={expanded === index ? appIcons.minus : appIcons.plus} />
                                        </Wrapper>
                                    </TouchableOpacity>
                                    {expanded === index && (
                                        <Wrapper marginVerticalSmall marginHorizontalMedium justifyContentCenter >
                                            <Text style={{ fontSize: fontSizes.small, fontFamily: appFonts.appTextRegular, color: colors.appTextColor7 }}>{item.detail}</Text>
                                        </Wrapper>
                                    )}
                                    <Wrapper marginVerticalSmall style={{ borderWidth: 0.4, borderColor: colors.spacerColor2 }} />
                                </React.Fragment>
                            ))}
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


