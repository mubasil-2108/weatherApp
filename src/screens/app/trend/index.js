import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, Dimensions, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList, CheckBoxes } from '../../../components';
import { useHooks } from './hooks'
// import { LineChart } from 'react-native-chart-kit';
import { LineChart } from "react-native-gifted-charts";
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight, appStyles } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // For unique IDs
import storage from '@react-native-firebase/storage';
import { DrawerActions } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { withDraw } from '../../../services/utilities/assets/appSvgs';


export default function Home(props) {
  const { navigate, goBack, dispatch } = props.navigation
  const {
    search,
    setSearch,
    DrawerActions,
    handleSelect,
    selected,
    data,
    data2,
    historyData,
    months
  } = useHooks() || {};

  const renderItem = ({ item }) => (
    <Wrapper alignItemsCenter flexDirectionRow marginVerticalTiny>
      <Images.SqareRound source={item.image} style={{ borderRadius: totalSize(1) }} size={sizes.images.large} />
      <Spacer horizontal isSmall />
      <Wrapper >
        <Wrapper flex={1} flexDirectionRow alignItemsFlexEnd>
          <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.large, color: colors.appTextColor1 }}>{item.name}</Text>
          <Spacer horizontal />
          <Wrapper justifyContentCenter alignItemsCenter paddingHorizontalSmall paddingVerticalTiny style={{ borderRadius: sizes.cardRadius }} backgroundColor={colors.appColor5}>
            <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.tiny, color: colors.appTextColor5 }}>{item.status}</Text>
          </Wrapper>
        </Wrapper>
        <Spacer isSmall />
        <Wrapper flex={1}>
          <Text style={{ fontFamily: appFonts.baloo2_Medium, fontSize: fontSizes.small, opacity: 0.5, color: colors.appTextColor2 }}>{item.date}</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper flex={1} alignItemsFlexEnd>
        <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.large, color: colors.appTextColor2 }}>{item.amount}</Text>
      </Wrapper>
    </Wrapper>
  )

  return (
    <>
      <StatusBars.Dark backgroundColor={colors.appColor1} />
      <Spacer isStatusBarHeigt />
      <Wrapper
        flex={0.915}
        backgroundColor={colors.appColor1}>
        <Wrapper
          backgroundColor={colors.appColor1}>
          <Wrapper flexDirectionRow
            justifyContentSpaceBetween
            marginHorizontalBase
            alignItemsCenter
            style={{ marginTop: responsiveHeight(4) }}>
            <Icons.Custom icon={appIcons.drawer} size={sizes.icons.mediumLarge} onPress={() => dispatch(DrawerActions.openDrawer())} />
            <Text style={{ color: colors.appTextColor6, fontFamily: appFonts.appTextMedium, fontSize: fontSizes.large }}>Home</Text>
            <Icons.Custom icon={appIcons.notification} size={sizes.icons.mediumLarge} />
          </Wrapper>
          <Spacer />
          <TextInputs.SearchBar
            value={search}
            onChangeText={(text) => setSearch(text)}
            customIconRight={appIcons.equalizer}
            iconColorRight={colors.iconColor6}
            iconSizeRight={sizes.icons.mediumSmall}
            iconStyleRight={{ right: width(4) }}
            iconStyleLeft={{ marginLeft: width(1) }}
            keyboardType={'default'}
            inputContainerStyle={{
              borderColor:
                colors.inputTextBorder,
              borderRadius: totalSize(2.5),
              backgroundColor: colors.inputfieldColor2,
            }}
            inputStyle={{
              height: height(7),
              fontSize: fontSizes.small,
              fontFamily: appFonts.appTextRegular,
              color: colors.appTextColor1
            }}
            placeholder={'Search Country, City, Town'}
            placeholderTextColor={colors.placeHolderColor2}
          />
          <Spacer isSmall />
        </Wrapper>
        <ScrollViews.KeyboardAvoiding>
          <Spacer />
          <Wrapper marginHorizontalBase>
            <Wrapper justifyContentCenter backgroundColor={colors.appColor19} flexDirectionRow style={{ borderRadius: sizes.cardRadius }}>
              <TouchableOpacity onPress={() => handleSelect('daily')}>
                <Wrapper backgroundColor={selected === 'daily' ? colors.appColor5 : colors.transparent} alignItemsCenter justifyContentCenter style={{ width: width(29.5), paddingVertical: height(1), borderRadius: sizes.cardRadius }}>
                  <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regularSmall, color: selected === 'daily' ? colors.appTextColor5 : colors.appTextColor1 }}>Daily</Text>
                </Wrapper>
              </TouchableOpacity>
              {selected === 'weekly' || selected !== 'daily' && (
                <Wrapper style={{ borderWidth: width(0.1), height: height(2), alignSelf: 'center', borderColor: colors.spacerColor4 }} />
              )}
              <TouchableOpacity onPress={() => handleSelect('weekly')}>
                <Wrapper backgroundColor={selected === 'weekly' ? colors.appColor5 : colors.transparent} alignItemsCenter justifyContentCenter style={{ width: width(29.5), paddingVertical: height(1), borderRadius: sizes.cardRadius }}>
                  <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regularSmall, color: selected === 'weekly' ? colors.appTextColor5 : colors.appTextColor1 }}>Weekly</Text>
                </Wrapper>
              </TouchableOpacity>
              {selected === 'weekly' || selected !== 'monthly' && (
                <Wrapper style={{ borderWidth: width(0.1), height: height(2), alignSelf: 'center', borderColor: colors.spacerColor4 }} />
              )}
              <TouchableOpacity onPress={() => handleSelect('monthly')}>
                <Wrapper backgroundColor={selected === 'monthly' ? colors.appColor5 : colors.transparent} alignItemsCenter justifyContentCenter style={{ width: width(29.5), paddingVertical: height(1), borderRadius: sizes.cardRadius }}>
                  <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regularSmall, color: selected === 'monthly' ? colors.appTextColor5 : colors.appTextColor1 }}>Monthly</Text>
                </Wrapper>
              </TouchableOpacity>
            </Wrapper>
            <Spacer />
            <Wrapper flexDirectionRow>
              <Wrapper flex={1} isBorderedWrapper justifyContentCenter paddingHorizontalSmall style={{ borderRadius: totalSize(1) }} marginHorizontalZero>
                <Wrapper alignItemsCenter flexDirectionRow>
                  <Wrapper>
                    <Icons.Button isRound customIcon={appIcons.states} iconStyle={{ resizeMode: 'contain' }} buttonStyle={{ justifyContent: 'center', alignItems: 'center' }} buttonSize={sizes.icons.large1} buttonColor={colors.buttonColor6} iconSize={sizes.icons.tiny} />
                  </Wrapper>
                  <Spacer horizontal isSmall />
                  <Wrapper flex={1}>
                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.tiny, color: colors.appTextColor28 }}>Earnings</Text>
                    <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.mediumSmall2, color: colors.appTextColor2 }}>$298.02</Text>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
              <Spacer horizontal isSmall />
              <Wrapper flex={1} isBorderedWrapper justifyContentCenter paddingHorizontalSmall style={{ borderRadius: totalSize(1) }} marginHorizontalZero>
                <Wrapper alignItemsCenter flexDirectionRow>
                  <Wrapper >
                    <Icons.Button isRound customIcon={appIcons.currency} buttonStyle={{ justifyContent: 'center', alignItems: 'center' }} buttonSize={sizes.icons.large1} buttonColor={colors.buttonColor6} iconSize={sizes.icons.medium} />
                  </Wrapper>
                  <Spacer horizontal isSmall />
                  <Wrapper flex={1}>
                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.tiny, color: colors.appTextColor28 }}>Tips this month</Text>
                    <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.mediumSmall2, color: colors.appTextColor2 }}>$570.58</Text>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Spacer isSmall />
            <Wrapper flexDirectionRow>
              <Wrapper flex={1} isBorderedWrapper justifyContentCenter paddingHorizontalSmall style={{ borderRadius: totalSize(1) }} marginHorizontalZero>
                <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.tiny, color: colors.appTextColor28 }}>Profit</Text>
                <Text style={{ flex: 1, fontFamily: appFonts.appTextBold, fontSize: fontSizes.mediumSmall2, color: colors.appTextColor2 }}>$964.59</Text>
                <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.xTiny1, color: colors.appTextColor29 }}>+23%{' '}
                  <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.xTiny1, color: colors.appTextColor28 }}>since last month</Text></Text>
              </Wrapper>
              <Spacer horizontal isSmall />
              <Wrapper flex={1} isBorderedWrapper justifyContentCenter paddingHorizontalSmall style={{ borderRadius: totalSize(1) }} marginHorizontalZero>
                <Wrapper alignItemsCenter flexDirectionRow>
                  <Wrapper flex={1}>
                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.tiny, color: colors.appTextColor28 }}>Your balance</Text>
                    <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.mediumSmall2, color: colors.appTextColor2 }}>$2,390</Text>
                  </Wrapper>
                  <Spacer horizontal isTiny />
                  <Wrapper>
                    <Buttons.ColoredSmall onPress={() => navigate(routes.withDraw)} text={'Withdraw'} textStyle={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.tiny, color: colors.appTextColor5 }} gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2,]} buttonStyle={{ paddingHorizontal: width(2) }} iconStyleRight={{ marginRight: width(1) }} iconColorRight={colors.iconColor3} iconSizeRight={sizes.icons.xTiny} customIconRight={appIcons.arrow_forward} />
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Spacer />
            <Wrapper isBorderedWrapper paddingHorizontalZero marginHorizontalZero>
              <Wrapper flexDirectionRow marginHorizontalSmall justifyContentSpaceBetween>
                <Wrapper >
                  <Wrapper flex={1} alignItemsCenter flexDirectionRow>
                    <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>$26.4K</Text>
                    <Spacer horizontal isSmall />
                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.tiny, color: colors.appTextColor28 }}>Total Profit</Text>
                    <Spacer horizontal isSmall />
                    <CheckBoxes.Primary customUnCheckIcon={appIcons.smallUp} text={'+4.91%'} textStyle={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.tiny, color: colors.appTextColor29 }} checkIconsize={sizes.icons.tiny} />
                  </Wrapper>
                  <CheckBoxes.Primary uncheckedIconName={'check-circle'} uncheckedIconColor={colors.iconColor12} uncheckIconType={'material-community'} text={'Profit'} textStyle={{ right: width(1), fontFamily: appFonts.appTextMedium, fontSize: fontSizes.tiny, color: colors.appTextColor29 }} checkIconsize={sizes.icons.xTiny} />
                </Wrapper>
                <Icons.Button customIcon={appIcons.states} buttonStyle={{ justifyContent: 'center', alignItems: 'center' }} buttonSize={sizes.icons.medium} buttonColor={colors.buttonColor6} iconStyle={{ resizeMode: 'contain' }} iconSize={sizes.icons.xTiny} />
              </Wrapper>
              <LineChart data={data} data2={data2} initialSpacing={width(9)} width={width(83)} thickness={width(0.8)} color={colors.appColor5} xAxisLabelTexts={months} xAxisLabelTextStyle={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.tiny, color: colors.appTextColor28 }} hideRules hideAxesAndRules hideYAxisText hideOrigin curved />
            </Wrapper>
            <Spacer />
            <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>History</Text>
            <Spacer isTiny />
            <FlatList
              data={historyData}
              keyExtractor={item => item.id}
              renderItem={renderItem}
            />
          </Wrapper>
          <Spacer />

        </ScrollViews.KeyboardAvoiding>
      </Wrapper>

    </>
  );
}