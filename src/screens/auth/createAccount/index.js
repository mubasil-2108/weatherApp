import React, { Component, useState } from 'react';
import { Image, TouchableOpacity, View, } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, StatusBars } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appFonts, fontSizes, appIcons } from '../../../services';
import { useHooks } from './hooks';
import { Signup } from '../../../services/utilities/firebaseUtil/firebaseAuth';
export default function Index(props) {
    const { navigate, } = props.navigation
    const { phoneNumberRef, phoneInputRef, handleSigninPress, handleProfilePress, handleButtonPress, toggleCheckbox, phoneNumber, setPhone, isChecked, email, setEmail, password, setPassword, togglePasswordVisibility, showPassword, name, setName, confirmPassword, setConfirmPassword, toggleConfirmPasswordVisibility, showConfirmPassword } = useHooks()
    // console.log("phone #: ",phoneNumber)
    return (
        <Wrapper isMain backgroundColor={colors.appBgColor2} style={[{}]}>
            <ScrollViews.KeyboardAvoiding>
                <StatusBars.Dark backgroundColor={colors.statusBarColor1} />
                <Wrapper marginHorizontalBase style={{ marginTop: width(5) }}>
                    <Wrapper justifyContentCenter style={{ marginTop: responsiveHeight(6) }}>
                        <Text style={{ color: colors.appTextColor6, fontFamily: appFonts.appTextMedium, fontSize: fontSizes.h3 }} >Create your new{'\n'}account</Text>
                    </Wrapper>
                    <Wrapper marginVerticalBase>
                        <TextInputs.Colored
                            title={'Email or Phone Number'}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            keyboardType={'email-address'}
                            containerStyle={{ marginHorizontal: 0 }}
                            inputCntainerStyle={{
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
                        <TextInputs.Phone
                            title={'Phone Number'}
                            inputRef={phoneInputRef}
                            // onChangeText={(value)=>setPhone(value)}
                            keyboardType={'numeric'}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2),
                                flexDirection: 'column'
                            }}
                            inputStyle={{ paddingHorizontal: sizes.marginHorizontal2 }}
                            textStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.appTextRegular,
                                color: colors.appTextColor1,
                                paddingLeft: width(1.5)
                            }}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                        <TextInputs.Colored
                            title={'Password'}
                            value={password}

                            onChangeText={(text) => setPassword(text)}
                            keyboardType={'default'}
                            secureTextEntry={!showPassword}
                            onPressIconRight={togglePasswordVisibility}
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
                            title={'Confirm Password'}
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
                    <Wrapper flexDirectionRow marginVerticalZero marginHorizontalTiny>
                        <CheckBoxes.Primary onPress={toggleCheckbox} checked={isChecked} checkIconsize={sizes.icons.xSmall} customCheckIcon={appIcons.checked} customUnCheckIcon={appIcons.blankCheck} />
                        <Text style={{ fontSize: fontSizes.regular, color: colors.appTextColor6, fontFamily: appFonts.appTextMedium }}>I Agree with{' '}
                            <Text style={{textAlign:'justify', color: colors.appTextColor4 }}>Terms of Service</Text> and{' '}
                            <Text style={{ color: colors.appTextColor4 }}>Privacy Policy</Text>
                        </Text>
                    </Wrapper>
                    <Wrapper marginVerticalMedium>
                        <Buttons.Colored
                            onPress={() => {
                                // phoneNumberRef();
                                // Signup(email, password, setEmail, setPassword, confirmPassword, setConfirmPassword, phoneNumber, isChecked, routes.createProfile)
                                // navigate(routes.createProfile)
                                handleProfilePress();
                            }}
                            buttonStyle={{ marginHorizontal: 0 }}
                            iconSize={totalSize(2)}
                            customIconRight={appIcons.arrow_forward}
                            tintColor={colors.iconColor4}
                            text={'Sign Up'}
                            iconContainer={{ left: width(33) }}
                            gradientColors={[colors.buttonColor1,colors.buttonColor1, colors.buttonColor2]}
                            textStyle={{
                                color: colors.appTextColor5,
                                fontFamily: appFonts.appTextMedium,
                                fontSize: fontSizes.regular,
                                left: width(6)
                            }} />

                    </Wrapper>
                    <Spacer height={height(5)}/>
                    <Wrapper justifyContentCenter flexDirectionRow >
                        <Wrapper justifyContentCenter alignItemsCenter flex={1} >
                            <Image style={{ width: width(30), tintColor: colors.appTextColor7 }} source={appIcons.vector} />
                        </Wrapper>
                        <Wrapper flex={1} justifyContentCenter alignItemsCenter>
                            <Text style={{ color: colors.appTextColor7, fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular }}>Or sign in with</Text>
                        </Wrapper>
                        <Wrapper flex={1} justifyContentCenter alignItemsCenter>
                            <Image style={{ width: width(30), tintColor: colors.appTextColor7 }} source={appIcons.vector} />
                        </Wrapper>
                    </Wrapper>
                    <Wrapper marginVerticalBase justifyContentSpaceEvenly style={{ paddingHorizontal: width(23) }} flexDirectionRow >
                        <Icons.Button isRound buttonSize={width(9)} buttonColor={colors.appColor1} buttonStyle={{ borderWidth: width(0.4), borderColor: colors.buttonBorder3 }} customIcon={appIcons.google} iconSize={sizes.icons.medium} />
                        <Icons.Button isRound buttonSize={width(9)} buttonColor={colors.appColor1} buttonStyle={{ borderWidth: width(0.4), borderColor: colors.buttonBorder3 }} customIcon={appIcons.facebook} iconSize={sizes.icons.medium} />
                        <Icons.Button isRound buttonSize={width(9)} buttonColor={colors.appColor1} buttonStyle={{ borderWidth: width(0.4), borderColor: colors.buttonBorder3 }} customIcon={appIcons.apple} iconSize={sizes.icons.medium} />
                    </Wrapper>
                    <Wrapper marginVerticalSmall justifyContentCenter alignItemsCenter>
                        <TouchableOpacity onPress={()=>handleSigninPress()}>
                            <Text style={{ color: colors.appTextColor6, fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular }}>Already have an account? <Text style={{ color: colors.appTextColor4, fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular }}>Login</Text> </Text>
                        </TouchableOpacity>
                    </Wrapper>
                </Wrapper>
            </ScrollViews.KeyboardAvoiding>
        </Wrapper>
    );
}

