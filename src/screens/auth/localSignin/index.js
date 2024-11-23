import React, { Component } from 'react';
// import { View, } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, StatusBars, Images, CheckBoxes, Modals, Icons, } from '../../../components';
import { responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appImages, appFonts, colors, appIcons, fontSizes } from '../../../services';
import { Button, Image, TouchableOpacity } from 'react-native';
import { useHooks } from './hooks';
import { Screen } from 'react-native-screens';

export default function Index(props) {
  const { navigate, goBack } = props.navigation


  const { Signin, handleSignIn, email, setEmail, password, setPassword, togglePasswordVisibility, showPassword } = useHooks()
  return (
    // <Text>{t('welcome')}</Text>
    <Wrapper isMain backgroundColor={colors.appBgColor2} >
      <ScrollViews.KeyboardAvoiding>
        <StatusBars.Dark backgroundColor={colors.statusBarColor1} />
        <Wrapper marginHorizontalBase style={{ marginTop: width(10) }}>
          <Wrapper alignItemsFlexEnd marginVerticalBase>
            <Buttons.BorderedSmall
              buttonStyle={{ borderColor: colors.buttonBorder1, paddingVertical:1 }}
              rowReverse
              gradientColors={[colors.appColor2, colors.appColor3]}
              onPress={()=>navigate(routes.signin)}
              text={'User'}
              textStyle={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular, color: colors.appTextColor1 }}
              customIconRight={appIcons.arrow_forward}
              iconSize={totalSize(1.6)}
              iconContainer={{ right: width(4.5) }}
              tintColor={colors.iconColor3}
            />
          </Wrapper>
          <Wrapper justifyContentCenter >
            <Text style={{ color: colors.appTextColor6, fontFamily: appFonts.appTextMedium, fontSize: fontSizes.h3 }} >Login to your account.</Text>
          </Wrapper>
          <Wrapper marginVerticalBase>
            <TextInputs.Colored
              title={'Email or Phone Number'}
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
            <Buttons.ColoredSmall
              text={'Forgot Password?'}
              onPress={() => { navigate(routes.forgetPassword) }}
              buttonStyle={{
                backgroundColor: colors.transparent,
                paddingHorizontal: 0,
                alignItems: 'flex-end',
              }}
              gradientColors={[colors.transparent, colors.transparent]}
              textStyle={{
                color: colors.appTextColor4,
                fontSize: fontSizes.regular,
                fontFamily: appFonts.appTextMedium
              }} />
          </Wrapper>
          <Wrapper marginVerticalMedium>
            <Buttons.Colored
              onPress={() => 
                // Signin(email, password)
                // navigate(routes.app)
                handleSignIn()
              }
              buttonStyle={{ marginHorizontal: 0 }}
              iconSize={totalSize(2)}
              customIconRight={appIcons.arrow_forward}
              tintColor={colors.iconColor4}
              text={'Login'}
              iconContainer={{ left: width(35) }}
              gradientColors={[colors.buttonColor1,colors.buttonColor1, colors.buttonColor2]}
              textStyle={{
                color: colors.appTextColor5,
                fontFamily: appFonts.appTextMedium,
                fontSize: fontSizes.regular,
                left: width(5)
              }} />

          </Wrapper>
          <Wrapper justifyContentCenter flexDirectionRow style={{ marginTop: width(30) }}>
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
            <TouchableOpacity onPress={() => navigate(routes.createAccount,{ fromSignin: 'local' })}>
              <Text style={{ color: colors.appTextColor6, fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular }}>Don't have an account? <Text style={{ color: colors.appTextColor2, fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular }}>Register</Text> </Text>
            </TouchableOpacity>
          </Wrapper>
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

