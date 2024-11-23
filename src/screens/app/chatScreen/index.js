import React, { Component, useState } from 'react';
import { Image, TouchableOpacity, View, } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, StatusBars, Images, Modals, Pickers, Chats } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appFonts, fontSizes, appIcons, appImages } from '../../../services';
import { useHooks } from './hooks';
import LinearGradient from 'react-native-linear-gradient';
import { GiftedChat } from 'react-native-gifted-chat';


export default function Index(props) {
    const { navigate, goBack } = props.navigation
    const { locale, offerSend } = useHooks() || {};

    return (
        <Wrapper isMain backgroundColor={colors.appColor1} style={[{}]}>
            <StatusBars.Dark backgroundColor={colors.statusBarColor1} />
            <Wrapper marginHorizontalSmall style={{ marginTop: width(5) }}>
                <Spacer isSmall />
                <Headers.Primary
                    onBackPress={() => goBack()}
                    showBackArrow
                    rightIconSource={appIcons.chevron_left}
                    allowText
                    profilePic={appImages.profile1}
                    textColor={colors.appTextColor9}
                    // iconColor={colors.iconColor1}
                    title={'John Doe'}
                    titleStyle={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.medium }}
                    iconContainer={{ flexDirection: 'row' }}
                    containerStyle={{ backgroundColor: colors.appColor1 }} />

            </Wrapper>
            {
                locale === 'locale' ?
                    (
                        <>
                            <Wrapper flex={0} style={{ top: -7 }} marginHorizontalLarge paddingHorizontalLarge >
                                <Buttons.Colored
                                    onPress={() => navigate(routes.customizeOffer)}
                                    buttonStyle={{ marginHorizontal: 0 }}
                                    text={'Send Customize Offer'}
                                    iconContainer={{ left: width(34) }}
                                    gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                    textStyle={{
                                        color: colors.appTextColor5,
                                        fontFamily: appFonts.appTextMedium,
                                        fontSize: fontSizes.regular,
                                    }} />
                            </Wrapper>
                            <Spacer isTiny />
                        </>
                    )
                    :
                    null
            }

            <Chats.Chat userType={locale} offerSend={offerSend} booking={locale ? () => navigate(routes.booking) : null} />
        </Wrapper>
    );
}