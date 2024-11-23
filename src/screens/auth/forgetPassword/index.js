import React, { Component, useState } from 'react';
import { TouchableOpacity, View, } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, StatusBars, Modals } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appFonts, fontSizes, appIcons } from '../../../services';
import { useHooks } from './hooks';
import { Screen } from 'react-native-screens';

export default function Index(props) {
    const { navigate, goBack } = props.navigation

    const { email, setEmail, handleResetPassword, modalVisible } = useHooks()
    return (
        <Wrapper isMain backgroundColor={colors.appBgColor2} style={[{}]}>
            <StatusBars.Dark backgroundColor={colors.statusBarColor1} />
            <ScrollViews.KeyboardAvoiding>
                <Wrapper marginHorizontalBase style={{ marginTop: width(5) }}>
                    <Headers.Primary
                        onBackPress={() => goBack()}
                        showBackArrow
                        rightIconSource={appIcons.chevron_left}
                        allowText
                        textColor={colors.appTextColor9}
                        // iconColor={colors.iconColor1}
                        title={'Password Reset'}
                        titleStyle={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1 }} />
                    <Wrapper
                        justifyContentCenter
                        paddingHorizontalTiny
                        marginVerticalSmall>
                        <Text
                            style={{
                                fontFamily: appFonts.appTextMedium,
                                color: colors.appTextColor1,
                                fontSize: fontSizes.h3
                            }}>
                            Forgot Password?
                        </Text>
                        <Spacer isTiny/>
                        <Text
                            style={{
                                fontFamily: appFonts.appTextMedium,
                                color: colors.appTextColor7,
                                fontSize: fontSizes.regular
                            }}>
                            Enter your email address and we’ll send you{'\n'}confirmation code to reset your password                        </Text>
                    </Wrapper>
                    <Wrapper marginVerticalMedium >
                        <TextInputs.Colored
                            title={'Email'}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            keyboardType={'email-address'}
                            containerStyle={{ marginHorizontal: 0 }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.mail}
                            inputStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.appTextRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            // iconStyleLeft={{  }}
                            placeholder={'example@email.com'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                        <Wrapper marginVerticalMedium>
                            <Buttons.Colored
                                onPress={() => handleResetPassword()}
                                buttonStyle={{ marginHorizontal: 0 }}
                                text={'Continue'}
                                iconContainer={{ left: width(34) }}
                                gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                textStyle={{
                                    color: colors.appTextColor5,
                                    fontFamily: appFonts.appTextMedium,
                                    fontSize: fontSizes.regular,
                                }} />

                        </Wrapper>
                    </Wrapper>

                </Wrapper>
                <Wrapper>
                    <Modals.Swipable
                        hideHeader
                        visible={modalVisible}
                        onPress={() => { navigate(routes.signin) }}
                        data={'A password reset link has been sent to your email\nsuccessfully'}
                        headerTitle={'Success'}
                        // colorsOpacity={[colors.transparent, colors.transparent]}
                        containerStyle={{
                            shadowColor: '#000000',
                            shadowOffset: { width: 4, height: 4 },
                            shadowOpacity: 0.1,
                            shadowRadius: 20,
                            elevation: 4,
                        }} 
                        hideContent2
                        />
                </Wrapper>
            </ScrollViews.KeyboardAvoiding>
        </Wrapper>
    )
}