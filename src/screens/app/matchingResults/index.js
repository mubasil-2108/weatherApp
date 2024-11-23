import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList } from '../../../components';
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
    clickedItems,
    handlePressItem,
    data,
    search,
    setSearch,
    handleProductPressItem,
    dummyProductData,
    categories,
    isDrawerOpen,
    imageData,
    statusBarVisible,
    DrawerActions,
    clickedProductItems
  } = useHooks() || {};

  return (
    <>
      <Wrapper
        isMain
        backgroundColor={colors.appColor1}>
        <StatusBars.Dark hidden={!statusBarVisible} backgroundColor={colors.appColor1} />
        <Spacer />
        <Wrapper
          marginHorizontalBase
          backgroundColor={colors.appColor1}>
          <Headers.Primary
            onBackPress={() => goBack()}
            showBackArrow
            rightIconSource={appIcons.chevron_left}
            rightIconOnPress={()=>navigate(routes.filters)}
            rightIconOnPress2={()=>navigate(routes.sort)}
            rightIcon
            rightIcon2
            leftButtonStyle={{ marginRight:width(9), borderColor: colors.transparent }}
            leftIconSource={appIcons.equalizer}
            leftIconSource2={appIcons.sort}
            leftButtonStyle2={{ borderColor: colors.transparent }}
            title={'Matching Result'}
            titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
            iconContainer={{ flexDirection: 'row' }}
            containerStyle={{ backgroundColor: colors.appColor1,marginTop:sizes.marginTop, height:height(11)}} />
          {/* <Spacer /> */}
        </Wrapper>
        <ScrollViews.KeyboardAvoiding>
        <Wrapper marginHorizontalMedium >
          <Wrapper isBorderedWrapper paddingHorizontalBase marginHorizontalZero style={{ borderRadius: totalSize(3) }}>
            <Wrapper justifyContentSpaceBetween flexDirectionRow>
              <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                <Icons.Custom icon={appIcons.location_2} color={colors.iconColor6} size={sizes.icons.small} />
                <Spacer horizontal isSmall />
                <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>Bali, Indonesia</Text>
              </Wrapper>
              <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                <Icons.Custom icon={appIcons.adults} color={colors.iconColor6} size={sizes.icons.small} />
                <Spacer horizontal isSmall />
                <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>5 guests</Text>
              </Wrapper>
            </Wrapper>
            <Spacer />
            <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
              <Icons.Custom icon={appIcons.calendar} color={colors.iconColor6} size={sizes.icons.small} />
              <Spacer horizontal isSmall />
              <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>Feb 17-20 | 4 Days | 4 hours</Text>
            </Wrapper>
          </Wrapper>
          <Spacer isSmall />
          <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Suggested Locals</Text>
          <Spacer height={height(1)} />
        </Wrapper>
        <LocalsList data={data} />
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


