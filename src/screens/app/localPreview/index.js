import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList, PlacesList, Rating, ReviewList } from '../../../components';
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

export default function Index(props) {

  const { navigate, goBack, dispatch } = props.navigation
  const {
    clickedItems,
    modalVisible,
    setModalVisible,
    handlePressItem,
    data,
    search,
    pressed,
    setPressed,
    images,
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
      <Wrapper isMain backgroundColor={colors.appColor1}>
        <StatusBars.Dark backgroundColor={colors.appColor1} />
        <Spacer />
        <Wrapper
          marginHorizontalBase
          backgroundColor={colors.appColor1}>
          <Headers.Primary
            onBackPress={() => goBack()}
            showBackArrow
            rightIconSource={appIcons.chevron_left}
            title={'Local Profile'}
            titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
            iconContainer={{ flexDirection: 'row' }}
            containerStyle={{ backgroundColor: colors.appColor1 }} />
        </Wrapper>
        <ScrollViews.KeyboardAvoiding contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
          <Wrapper marginHorizontalMedium>
            <Wrapper marginHorizontalZero paddingHorizontalSmall isBorderedWrapper style={{ borderColor: colors.borderColor4 }}>
              <Wrapper justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                <Wrapper >
                  <Images.SqareRound size={sizes.images.logo} style={{ borderRadius: 10, }} source={appImages.profile1} />
                </Wrapper>
                <Wrapper flex={0.97}>
                  <Wrapper justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor8, fontSize: fontSizes.large }}>John Doe</Text>
                    <Icons.Button isRound onPress={() => navigate(routes.chatScreen)} buttonColor={colors.buttonColor4} buttonStyle={{ borderColor: colors.buttonBorder5, borderWidth: width(0.3) }} iconColor={colors.iconColor8} buttonSize={sizes.icons.largeXLarge} customIcon={appIcons.messages} iconSize={sizes.icons.mediumSmall} />
                  </Wrapper>
                  <Wrapper alignItemsCenter flexDirectionRow>
                    <Icons.Custom icon={appIcons.star} size={sizes.icons.small} />
                    <Spacer width={width(1)} />
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>4.9</Text>
                  </Wrapper>
                  <Wrapper flex={1} justifyContentCenter >
                    <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor2, fontSize: fontSizes.regular }}>$165,3{' '}
                      <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor7, fontSize: fontSizes.regular }}>/night</Text></Text>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
              <Wrapper marginVerticalSmall style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
              <Wrapper >
                <Text style={{ flex: 1, fontFamily: appFonts.appTextRegular, textAlign: 'justify', color: colors.appTextColor3, fontSize: 14 }}>Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.el facilis sint aut sunt voluptatem.</Text>
              </Wrapper>
            </Wrapper>
            <Spacer />
            <Wrapper>
              <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Expertise</Text>
              <Spacer height={height(1)} />
              <Wrapper justifyContentFlexstart flexDirectionRow style={{ flexWrap: 'wrap' }}>
                <Wrapper marginVerticalTiny style={{ marginRight: width(10) }} flexDirectionRow alignItemsCenter>
                  <Icons.Custom icon={appIcons.book} color={colors.iconColor1} size={sizes.icons.xSmall} />
                  <Spacer width={width(1)} />
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Certified Tour Guide</Text>
                </Wrapper>
                {/* <Spacer width={width(15)}/> */}
                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                  <Icons.Custom icon={appIcons.car} color={colors.iconColor1} size={sizes.icons.xSmall} />
                  <Spacer width={width(1)} />
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Local with Transport</Text>
                </Wrapper>
                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                  <Icons.Custom icon={appIcons.people} color={colors.iconColor1} size={sizes.icons.xSmall} />
                  <Spacer width={width(1)} />
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Local Enthusiast</Text>
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Spacer />
            <Wrapper>
              <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Additional Offering</Text>
              <Spacer height={height(1)} />
              <Wrapper flex={1} justifyContentFlexstart flexDirectionRow style={{ flexWrap: 'wrap' }}>
                <Wrapper marginVerticalTiny style={{ marginRight: width(7) }} flexDirectionRow alignItemsCenter>
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Lorem Ispum</Text>
                </Wrapper>
                <Wrapper marginVerticalTiny style={{ marginRight: width(7) }} flexDirectionRow alignItemsCenter>
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Lorem Ispum</Text>
                </Wrapper>
                <Wrapper marginVerticalTiny style={{ marginRight: width(7) }} flexDirectionRow alignItemsCenter>
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Lorem</Text>
                </Wrapper>
                <Wrapper marginVerticalTiny style={{ marginRight: width(7) }} flexDirectionRow alignItemsCenter>
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Lorem Ispum</Text>
                </Wrapper>
                <Wrapper marginVerticalTiny style={{ marginRight: width(7) }} flexDirectionRow alignItemsCenter>
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Lorem Ispum</Text>
                </Wrapper>
                <Wrapper marginVerticalTiny style={{ marginRight: width(7) }} flexDirectionRow alignItemsCenter>
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Lorem</Text>
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Spacer />
            <Wrapper>
              <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Experience</Text>
              <Spacer height={height(1)} />
              <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                <Icons.Custom icon={appIcons.experience} color={colors.iconColor1} size={sizes.icons.xSmall} />
                <Spacer width={width(1)} />
                <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>10+ Years with Local eyes</Text>
              </Wrapper>
            </Wrapper>
            <Spacer />
            <Wrapper>
              <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Unique Local Place</Text>
              <Spacer height={height(1)} />
              <PlacesList data={images} />
              <Spacer height={height(1)} />
              <Wrapper justifyContentFlexstart flexDirectionRow style={{ flexWrap: 'wrap' }}>
                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter style={{ marginRight: width(6) }}>
                  <Icons.Custom icon={appIcons.location} color={colors.iconColor1} size={sizes.icons.xSmall} />
                  <Spacer width={width(1)} />
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Bali, Indonesia</Text>
                </Wrapper>
                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter style={{ marginRight: width(6) }}>
                  <Icons.Custom icon={appIcons.location} color={colors.iconColor1} size={sizes.icons.xSmall} />
                  <Spacer width={width(1)} />
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Phuket, Thiland</Text>
                </Wrapper>
                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter style={{ marginRight: width(6) }}>
                  <Icons.Custom icon={appIcons.location} color={colors.iconColor1} size={sizes.icons.xSmall} />
                  <Spacer width={width(1)} />
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Italy</Text>
                </Wrapper>
                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter style={{ marginRight: width(6) }}>
                  <Icons.Custom icon={appIcons.location} color={colors.iconColor1} size={sizes.icons.xSmall} />
                  <Spacer width={width(1)} />
                  <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Jumerah, Dubai</Text>
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Spacer />
            <Wrapper>
              <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Ratings & Reviews</Text>
              <Spacer height={height(1)} />
              <ReviewList data={data} />
            </Wrapper>
            <Spacer />
            <Wrapper>
              <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>License/ Certificate</Text>
              <Spacer height={height(1)} />
              <Wrapper isBorderedWrapper paddingHorizontalZero marginHorizontalZero paddingVerticalZero style={{ borderRadius: totalSize(3), borderColor: colors.buttonBorder5 }}>
                <Images.MainLogo
                  style={{ borderRadius: totalSize(3), height: sizes.images.logoHeight, width: '100%' }}
                  source={appImages.liscense}
                />
              </Wrapper>
              <Wrapper isAbsoluteFill  alignItemsFlexEnd style={{top:height(5), right: width(3)}}>
                <Icons.Button isRound buttonSize={sizes.icons.large} buttonColor={colors.buttonColor3} iconSize={sizes.icons.small} customIcon={appIcons.download} />
              </Wrapper>
            </Wrapper>
            <Spacer />
            <Wrapper>
              <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Cancelation Policy</Text>
              <Spacer height={height(1)} />
              <Wrapper isBorderedWrapper paddingHorizontalSmall paddingVerticalBase marginHorizontalZero style={{ borderRadius: totalSize(3), borderColor: colors.buttonBorder5 }}>
                <Text style={{textAlign:'justify', fontFamily:appFonts.appTextRegular, fontSize:fontSizes.small, color:colors.appTextColor3}}>Lorem ipsum dolor sit amet. Ut esse repellat ut illo nesciunt et consequatur autem ut ipsa omnis qui officia expedita non deserunt voluptatem. Sed Quis itaque a dolores necessitatibus quo internos tempora. A fugit debitis ab blanditiis nulla et pariatur officiis ut nemo dolore eum dolorem quas qui inventore vitae aut autem cupiditate.</Text>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </ScrollViews.KeyboardAvoiding>


      </Wrapper>
      <Wrapper
        alignItemsCenter
        backgroundColor={colors.appColor1}
        paddingVerticalBase
        paddingHorizontalBase
        justifyContentSpaceBetween
        flexDirectionRow
        style={{
          shadowColor: colors.shadowColor1,
          shadowOffset: { width: 0, height: -5.93 },
          shadowOpacity: 0.12,
          shadowRadius: 30,
          elevation: 50,
        }}>

        <LinearGradient
          // colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
          colors={pressed ? [colors.transparent, colors.transparent] : [colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            borderRadius: 28,
            padding: 1,
          }}
        >
          <Buttons.ColoredSmall

            onPressIn={() => { setPressed(true); setModalVisible(true) }}
            onPressOut={() => setPressed(false)}
            gradientColors={[colors.buttonColor3, colors.buttonColor3]}
            textStyle={{ textAlign: 'center', fontFamily: appFonts.interSemiBold, color: colors.appTextColor2, fontSize: fontSizes.regular }}
            buttonStyle={{ width: width(40), paddingHorizontal: width(3), paddingVertical: height(1.45), justifyContent: 'center', alignItems: 'center' }}
            text={'Check Availability'} />
        </LinearGradient>
        <Buttons.ColoredSmall
          onPress={()=> navigate(routes.booking)}
          gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
          textStyle={{ textAlign: 'justify', fontFamily: appFonts.interSemiBold, color: colors.appTextColor5, fontSize: fontSizes.regular }}
          buttonStyle={{ width: width(40), paddingHorizontal: width(3), paddingVertical: height(1.6), justifyContent: 'center', alignItems: 'center' }}
          text={'Book Now'} />
      </Wrapper>

      <Modals.PopupPrimary toggle={() => setModalVisible(!modalVisible)} calender topMargin titleStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium, color: colors.appTextColor6 }} title={'Availability'} visible={modalVisible} />
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


