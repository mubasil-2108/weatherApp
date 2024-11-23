import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList, Switches } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // For unique IDs
import storage from '@react-native-firebase/storage';
import { DrawerActions } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

export default function Home(props) {

  const { navigate, goBack, dispatch } = props.navigation
  const {
    selectImage,
    profileImage,
    languageToIsoCodeMap,
    selectedLanguages,
    handleLanguageSelection,
    selectedLanguageNames,
    modalVisible,
    setModalVisible,
    notificationsEnabled,
    handleToggleNotifications,
    privacyPolicyEnabled,
    handleTogglePrivacyPolicy,
    pressed,
    setPressed
  } = useHooks() || {};
  const firstLanguageIsoCode = selectedLanguageNames.length > 0
    ? languageToIsoCodeMap[selectedLanguageNames[0]]
    : null;

  return (
    <>
      <Wrapper
        flex={0.915}
        backgroundColor={colors.appColor1}>
        <StatusBars.Dark backgroundColor={colors.appColor1} />
        <Spacer isStatusBarHeigt />
        <ScrollViews.KeyboardAvoiding>
          <Spacer isSmall />
          <Wrapper marginHorizontalBase>
            <Wrapper alignItemsCenter>
              <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Profile</Text>
              <Spacer />
              <Wrapper justifyContentCenter alignItemsCenter>
                <Images.Round style={{ resizeMode: 'contain' }} size={sizes.images.xLSmall} source={profileImage ? { uri: profileImage } : appImages.dummyProfile} />
                <Icons.Button
                  isRound
                  onPress={selectImage}
                  buttonStyle={{ bottom: height(4), left: width(9.5) }}
                  buttonSize={width(8)}
                  buttonColor={colors.iconeButtonColor1}
                  customIcon={appIcons.camera}
                  iconSize={sizes.icons.small} />
              </Wrapper>
              <Wrapper isAbsolute style={{ top: height(20) }}>
                <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.h6, color: colors.appTextColor6 }}>John Doe</Text>
              </Wrapper>
            </Wrapper>
            <Spacer />
            <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Profile</Text>
            <Spacer isSmall />
            <TextInputs.Colored
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
              onPressIconRight={() => navigate(routes.editProfile)}
              iconColorLeft={colors.iconColor1}
              customIconRight={appIcons.calendarRight}
              iconColorRight={colors.iconColor1}
              iconSizeRight={sizes.icons.tiny}
              iconStyleRight={{
                marginRight: width(5)
              }}
              placeholder={'Edit Profile'}
              placeholderTextColor={colors.placeHolderColor} />
            <Spacer isSmall />
            <TextInputs.Counter
              title={'Language'}
              containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
              inputContainerStyle={{
                backgroundColor: colors.inputfieldColor1,
                borderColor: colors.inputTextBorder,
                borderRadius: totalSize(2),
                height: sizes.inputHeight
              }}
              placeholder={'Select...'}
              Language={selectedLanguageNames}
              // onPress
              textStyle={{
                fontSize: fontSizes.regular,
                fontFamily: appFonts.satoshiRegular,
                color: colors.appTextColor1
              }}
              onPressIconRight={() => setModalVisible(true)}
              flagCode={firstLanguageIsoCode}
              flageSize={sizes.icons.medium}
              iconStyleLeft={{ width: width(7), borderRadius: 4 }}
              customIconRight1={appIcons.dropDown}
              iconColorRight={colors.iconColor1}
              iconSizeRight={sizes.icons.tiny}
              inputStyle={{
                fontSize: fontSizes.regular,
                fontFamily: appFonts.satoshiRegular,
                color: colors.appTextColor1
              }}
              iconColorLeft={colors.iconColor1}
              iconStyleRight={{
                marginRight: width(5)
              }}
              titleStyle={{
                fontSize: fontSizes.regular,
                fontFamily: appFonts.appTextBold,
                color: colors.appTextColor3
              }} />
            <Spacer />
            <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Settings</Text>
            <Spacer />
            <Wrapper marginHorizontalZero isBorderedWrapper style={{ borderRadius: totalSize(3), borderColor: colors.borderColor4 }}>
              <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                <Wrapper >
                  <Text style={{ fontFamily: appFonts.appTextRegular, opacity: 0.6, fontSize: fontSizes.medium, color: colors.appTextColor23 }}>Notifications</Text>
                </Wrapper>
                <Wrapper >
                  <Switches.Custom value={notificationsEnabled} gradiantColors={[colors.appColor2, colors.appColor2, colors.appColor3]} onPress={handleToggleNotifications} />
                </Wrapper>
              </Wrapper>
              <Spacer />
              <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                <Wrapper>
                  <Text style={{ fontFamily: appFonts.appTextRegular, opacity: 0.6, fontSize: fontSizes.medium, color: colors.appTextColor23 }}>Privacy Policy</Text>
                </Wrapper>
                <Wrapper >
                  <Switches.Custom value={privacyPolicyEnabled} gradiantColors={[colors.appColor2, colors.appColor2, colors.appColor3]} onPress={handleTogglePrivacyPolicy} />
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </ScrollViews.KeyboardAvoiding>
      </Wrapper>
      <Modals.PopupPrimary handleLanguageSelection={handleLanguageSelection} selectedLanguages={selectedLanguages} toggle={() => setModalVisible(!modalVisible)} disableSwipe language topMargin titleStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.h5, color: colors.appTextColor6 }} title={'Language'} visible={modalVisible} />
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


