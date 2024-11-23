import React from 'react';
import { height, width } from 'react-native-dimension'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import Wrapper from '../../wrapper';
import Text from '../../text';
import { appFonts, appIcons, appImages, colors, fontSizes, responsiveHeight, responsiveWidth, routes, sizes } from '../../../services';
import Spacer from '../../spacer';
import { Buttons, Icons, Images } from '../..';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export const LocalsItems = ({ userData }) => {
  console.log('Received item in LocalsItems:', userData);
  const navigation = useNavigation();
  return (
    // <>
    //   {
    //     userData.map((item) => 
            <Wrapper marginVerticalSmall marginHorizontalSmall paddingHorizontalSmall isBorderedWrapper style={{ borderColor: colors.borderColor4, flexWrap: 'wrap' }}>
              <Wrapper justifyContentSpaceBetween flexDirectionRow>
                <Wrapper >
                  <Images.SqareRound style={{ borderRadius: 10, height: sizes.images.logoHeight, width: sizes.images.logoWidth }} source={userData.image} />
                </Wrapper>
                <Wrapper style={{ width: responsiveWidth(51) }}>
                  <Wrapper flex={1} justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                    <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1, fontSize: fontSizes.mediumSmall }}>{userData.name}</Text>
                    <Buttons.ColoredSmall
                      onPress={() => navigation.navigate(routes.localPreview, { item })}
                      gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                      textStyle={{ fontFamily: appFonts.baloo2_Regular, color: colors.appTextColor5, fontSize: fontSizes.small }}
                      buttonStyle={{ justifyContent: 'center', alignItems: 'center', paddingVertical: width(1), paddingHorizontal: width(1.5) }}
                      text={'View Profile'} />
                  </Wrapper>
                  <Wrapper flex={1} alignItemsCenter flexDirectionRow>
                    <Icons.Custom icon={appIcons.star} size={sizes.icons.small} />
                    <Spacer width={width(1)} />
                    <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor6, fontSize: fontSizes.regular }}>{userData.rating}</Text>
                  </Wrapper>
                  <Wrapper flex={1} justifyContentCenter >
                    <Text style={{ fontFamily: appFonts.baloo2_ExtraBold, color: colors.appTextColor2, fontSize: fontSizes.regular }}>${userData.rate}{' '}
                      <Text style={{ fontFamily: appFonts.baloo2_Medium, color: colors.appTextColor7, fontSize: fontSizes.regular }}>/hour</Text></Text>
                  </Wrapper>

                  <Wrapper justifyContentFlexend>
                    <Wrapper flexDirectionRow style={{ flexWrap: 'wrap' }}>
                      <Text style={{ flex: 1, fontFamily: appFonts.appTextRegular, textAlign: 'justify', color: colors.appTextColor3, fontSize: 14 }}>{userData.description}</Text>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>

              </Wrapper>
              {/* <Spacer/> */}
              <Wrapper marginVerticalSmall style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
              {/* <Wrapper flexDirectionRow style={{ flexWrap: 'wrap' }}>
                {userData.badges.map((badge, index) => (
                  <LinearGradient
                    key={index}
                    colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                    style={{
                      padding: 0.5, // Border width
                      borderRadius: 30,
                      margin: width(0.1),
                      marginEnd: width(2.3),
                      marginBottom: height(0.5)
                    }}
                  >
                    <LinearGradient
                      colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={{
                        borderRadius: 28,
                        padding: 1,
                      }}
                    >
                      <Wrapper backgroundColor={colors.appColor1} paddingVerticalTiny paddingHorizontalTiny justifyContentCenter alignItemsCenter style={{ borderWidth: 1, borderColor: 'transparent', borderRadius: 30 }}>
                        <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small, }} >{badge}</Text>
                      </Wrapper>
                    </LinearGradient>
                  </LinearGradient>
                ))}
              </Wrapper> */}
            </Wrapper>
    //       )
    //   }
    // </>
  );
};
