import React, { useState, useRef, Component, useEffect } from 'react';
import { Wrapper, Text, Logos, Icons, Images, StatusBars, ScrollViews, Buttons } from '../../../components';
import { totalSize, width, height } from 'react-native-dimension';
import { appFonts, appIcons, appImages, appStyles, appSvgs, colors, fontSizes, responsiveFontSize, responsiveHeight, responsiveWidth, routes, sizes } from '../../../services';
import { StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { useHooks } from './hooks';


export default function Index(props) {
  const { navigate } = props.navigation
  const { slides, currentIndex, currentSlide, navigation } = useHooks();
  return (
    <Wrapper isMain isCenter isImageBackground source={currentSlide.backgroundImage}>
      <StatusBars.Dark backgroundColor={colors.transparent} />

      <Wrapper justifyContentCenter alignItemsCenter style={styles.pagination}>
        <Wrapper flexDirectionRow justifyContentCenter>
          {slides.map((_, index) => (
            <Wrapper
              key={index}
              alignItemsCenter
              justifyContentCenter
              style={[
                styles.dotWrapper, // Style for the wrapper
                index === currentIndex && styles.activeDotWrapper, // Active state style
              ]}
            >
              <Wrapper
                style={[
                  styles.dot,
                  index === currentIndex && styles.activeDot, // Active state style for the dot
                ]}
              />
            </Wrapper>
          ))}
        </Wrapper>
      </Wrapper>

      <Wrapper flex={1} justifyContentFlexend>
        <Wrapper flex={0.47}>
          <Wrapper style={styles.container}>
            {/* <BlurView
              style={styles.blurWrapper}
              blurType="light"  // Options: 'dark', 'light', 'xlight'
              blurAmount={4}
            
            > */}
              <Wrapper isAbsoluteFill>
                <Wrapper flex={1} marginVerticalLarge marginHorizontalBase>
                  <Wrapper marginVerticalBase>
                    <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1, fontSize: fontSizes.h3_small }}> {currentSlide.title}</Text>
                  </Wrapper>
                  <Wrapper>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor1, fontSize: fontSizes.mediumSmall }}> {currentSlide.text}</Text>
                  </Wrapper>
                </Wrapper>
                <Wrapper flex={0.5} justifyContentFlexend marginVerticalMedium>
                  <Wrapper flexDirectionRow justifyContentSpaceBetween marginHorizontalBase>
                    <Buttons.ColoredSmall
                    onPress={()=>navigate(routes.createAccount)}
                      gradientColors={[colors.appColor1, colors.appColor1]}
                      textStyle={{ fontFamily: appFonts.baloo2_Regular, color: colors.appTextColor2, fontSize: fontSizes.regularLarge }}
                      buttonStyle={{ justifyContent: 'center', alignItems: 'center', width: width(43), paddingVertical: height(2) }}
                      text={'Sign Up'} />
                    <Buttons.ColoredSmall
                    onPress={()=>navigate(routes.signin)}
                      gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                      textStyle={{ fontFamily: appFonts.baloo2_Regular, color: colors.appTextColor5, fontSize: fontSizes.regularLarge }}
                      buttonStyle={{ justifyContent: 'center', alignItems: 'center', width: width(43), paddingVertical: height(2) }}
                      text={'Login'} />
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            {/* </BlurView> */}
          </Wrapper>
        </Wrapper>
      </Wrapper>

    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: totalSize(5),
    borderTopRightRadius: totalSize(5),
    overflow: 'hidden',  // Ensures the content stays within the bounds of the border radius
    backgroundColor: colors.appColor4,
  },
  // blurWrapper: {
  //   // flex: 1,
  //   justifyContent: 'flex-end',
  // },
  blurWrapper: {
    flex: 1,
    // position: 'relative',
    borderTopLeftRadius: totalSize(10),
    borderTopRightRadius: totalSize(10),
    // justifyContent: 'flex-end',
    overflow: 'hidden', // Ensures the content stays within the bounds
  },
  title1: {
    fontSize: fontSizes.h1,
    color: colors.appColor1,
    marginBottom: 10,
    fontFamily: appFonts.appTextMedium
  },
  title: {
    fontSize: fontSizes.h2,
    fontFamily: appFonts.appTextBold,
    marginTop: responsiveHeight(7),
    color: colors.appColor1,
  },
  pagination: {
    position: 'absolute',
    top: responsiveHeight(50),
    // bottom: responsiveHeight(50),
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  dot: {
    width: width(1),
    height: width(1),
    borderRadius: 50,
    marginHorizontal: width(1.5),
    borderColor: colors.appColor1,
    backgroundColor: colors.appColor1,
    borderWidth: 1,
  },
  activeDot: {
    width: width(2),
    height: width(2),
    opacity:1
    // bottom: height(0.3)
  },
  activeDotWrapper: {
    width: width(3.5),
    height: width(3.5),
    // bottom: height(0.3),
    backgroundColor: colors.iconColor5, // Red background for the active dot
    borderRadius: 50, // Make sure it's a circle
  },
})
