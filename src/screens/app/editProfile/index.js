import React, { Component, useState } from 'react';
import { Image, TouchableOpacity, View, } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, StatusBars, Images, Modals } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appFonts, fontSizes, appIcons, appImages } from '../../../services';
import { useHooks } from './hooks';


export default function Index(props) {
  const { navigate, goBack } = props.navigation



  const { modalVisible, email, setEmail, phoneNumber, phoneNumberRef, phoneInputRef, selectGender, setSelectGender, truncatedAddress, handleSubmit, profileImage, selectImage, preferencesChunks, displayText, handleAdd, isInputVisible, setIsInputVisible, genderData, preferences, setPreferences, date, handleChangeText, fullName, setFullName } = useHooks()
  return (
    <Wrapper isMain backgroundColor={colors.appBgColor2} style={[{}]}>
      <StatusBars.Dark backgroundColor={colors.statusBarColor1} />
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
          title={'Edit Profile Data'}
          titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
          iconContainer={{ flexDirection: 'row' }}
          containerStyle={{ backgroundColor: colors.appColor1, height: height(7) }} />
      </Wrapper>
      <ScrollViews.KeyboardAvoiding contentContainerStyle={{ flexGrow: 1 }}>
        <Spacer isMedium />
        {/* <Wrapper > */}
          <Wrapper  marginHorizontalBase>
            <TextInputs.Colored
              title={'Full Name'}
              value={fullName}
              onChangeText={(text) => setFullName(text)}
              keyboardType={'default'}
              containerStyle={{ marginHorizontal: 0 }}
              inputContainerStyle={{
                backgroundColor: colors.inputfieldColor1,
                borderColor: colors.inputTextBorder,
                borderRadius: totalSize(2)
              }}
              customIconLeft={appIcons.user}
              inputStyle={{
                fontSize: fontSizes.medium,
                fontFamily: appFonts.appTextRegular,
                color: colors.appTextColor1
              }}
              iconColorLeft={colors.iconColor1}
              // iconStyleLeft={{  }}
              placeholder={'John Doe'}
              placeholderTextColor={colors.placeHolderColor}
              titleStyle={{
                fontSize: fontSizes.regular,
                fontFamily: appFonts.appTextBold,
                color: colors.appTextColor3
              }} />
            <Spacer isSmall />
            <TextInputs.Colored
              title={'Email'}
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType={'default'}
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
            <Wrapper flexDirectionRow justifyContentSpaceBetween>

              <TextInputs.Colored
                title={'Date of Birth'}
                value={date}
                onChangeText={(text) => handleChangeText(text)}
                keyboardType={'numeric'}
                maxLength={10}
                containerStyle={{ width: width(40), marginHorizontal: 0, marginTop: height(1), }}
                inputContainerStyle={{
                  backgroundColor: colors.inputfieldColor1,
                  borderColor: colors.inputTextBorder,
                  borderRadius: totalSize(2)
                }}
                customIconLeft={appIcons.calendar}
                inputStyle={{
                  fontSize: fontSizes.medium,
                  fontFamily: appFonts.appTextRegular,
                  color: colors.appTextColor1
                }}
                iconColorLeft={colors.iconColor1}
                // iconStyleLeft={{  }}
                placeholder={'1990/01/31'}
                placeholderTextColor={colors.placeHolderColor}
                titleStyle={{
                  fontSize: fontSizes.regular,
                  fontFamily: appFonts.appTextBold,
                  color: colors.appTextColor3
                }} />

              <TextInputs.DropDown
                title={'Gender'}
                data={genderData}
                values={selectGender}
                onChange={(text) => setSelectGender(text)}
                keyboardType={'numeric'}
                containerStyles={{ width: width(40), marginHorizontal: 0, marginTop: height(1), }}
                inputContainerStyle={{
                  borderColor: colors.inputTextBorder,
                  borderRadius: totalSize(2)
                }}
                itemText={{
                  fontSize: fontSizes.medium,
                  fontFamily: appFonts.appTextRegular,
                }}
                placeholder={'Select--'}
                inputStyle={{
                  width: width(40),
                }}
                titleStyle={{
                  fontSize: fontSizes.regular,
                  fontFamily: appFonts.appTextBold,
                  color: colors.appTextColor3
                }} />
            </Wrapper>
            <TextInputs.Colored
              editable={false}
              title={'Home - Address'}
              value={truncatedAddress}
              containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
              inputContainerStyle={{
                backgroundColor: colors.inputfieldColor1,
                borderColor: colors.inputTextBorder,
                borderRadius: totalSize(2)
              }}
              customIconLeft={appIcons.location}
              customIconRight={appIcons.dropDown}
              iconColorRight={colors.iconColor1}
              iconSizeRight={sizes.icons.tiny}
              iconStyleRight={{
                marginRight: width(5)
              }}
              inputStyle={{
                fontSize: fontSizes.medium,
                fontFamily: appFonts.appTextRegular,
                color: colors.appTextColor1
              }}
              iconColorLeft={colors.iconColor1}
              onPressIconRight={() => navigate(routes.addAddress)}
              placeholder={'Add here...'}
              placeholderTextColor={colors.placeHolderColor}
              titleStyle={{
                fontSize: fontSizes.regular,
                fontFamily: appFonts.appTextBold,
                color: colors.appTextColor3
              }} />
          </Wrapper>
          <Wrapper flex={1} marginHorizontalBase justifyContentFlexend marginVerticalSmall>
            <Buttons.Colored
              onPress={()=> navigate(routes.account)}
              buttonStyle={{ marginHorizontal: 0 }}
              text={'Save Changes'}
              gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
              textStyle={{
                color: colors.appTextColor5,
                fontFamily: appFonts.appTextMedium,
                fontSize: fontSizes.regular,
              }} />
          </Wrapper>
        {/* </Wrapper> */}

      </ScrollViews.KeyboardAvoiding>
      <Modals.Swipable
        hideHeader
        visible={modalVisible}
        onPress={() => { navigate(routes.signin) }}
        data={'Account created successfully'}
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
  );
}

