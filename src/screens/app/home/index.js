import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList, SearchResult, Charts } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight, weatherImages } from '../../../services';
import { BlurView } from '@react-native-community/blur';
import { Icon } from '@rneui/base';


export default function Home(props) {

  const { navigate, goBack } = props.navigation

  const {
    setSearchButton,
    searchButton,
    handleTextDebounce,
    weatherCheck,
    searchResults,
    result,
    setSearch,
    city,
    timezone,
    country,
    getCurentLocation,
    wind,
    temperature,
    humidity,
    description,
    icon,
    refreshing,
    onRefresh,
    sunRise,
    weatherResultsArray,
    loader,
    ShimmerPlaceholder,
    weatherResults
  } = useHooks() || { weatherResultsArray: [] };
  return (
    <>
      <Wrapper isImageBackground source={appImages.backGroundImage} />
      <StatusBars.Light backgroundColor={colors.transparent} />
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={100}
      >
        <Wrapper isMain backgroundColor={colors.transparent} isAbsoluteFill>
        <Spacer isStatusBarHeigt />
          <ScrollViews.WithKeyboardAvoidingView
            refreshControl={
              <RefreshControl
                progressBackgroundColor={colors.appBgColor3}
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor={colors.appBgColor3}
                colors={[colors.appColor1]}
              />
            }
          >
            {/* <Spacer isStatusBarHeigt /> */}
            <Spacer />
            <Wrapper marginHorizontalSmall>
              <Wrapper justifyContentCenter flexDirectionRow>
                <Wrapper flex={1}>
                  <Wrapper animation={searchButton ? 'fadeInRight' : 'fadeOutRight'} marginHorizontalZero paddingHorizontalZero>
                    <TextInputs.SearchBar
                      onChangeText={handleTextDebounce}
                      keyboardType={'default'}
                      inputContainerStyle={{
                        height: height(6),

                        borderColor: colors.inputTextBorder,
                        borderRadius: totalSize(2.5),
                        backgroundColor: colors.inputfieldColor1,
                      }}
                      inputStyle={{
                        fontSize: fontSizes.regular,
                        fontFamily: appFonts.appTextRegular,
                        color: colors.appTextColor5
                      }}
                      placeholder={'Search City'}
                      placeholderTextColor={colors.placeHolderColor}
                    />
                  </Wrapper>
                </Wrapper>
                <Wrapper style={{ alignItems: 'center', }}>
                  <Icon
                    name={'magnify'}
                    type={'material-community'}
                    size={sizes.icons.medium}
                    color={colors.appTextColor5}
                    iconStyle={{
                      backgroundColor: colors.appBgColor3,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: width(30),
                      padding: sizes.icons.medium / 3
                    }}
                    onPress={() => setSearchButton(!searchButton)}
                  />
                </Wrapper>
              </Wrapper>
              {
                result && searchButton ? (
                  <Wrapper marginHorizontalTiny style={{ zIndex: 1, marginTop: height(7) }} isAbsoluteFill>
                    <SearchResult search={searchResults} getCurentLocation={getCurentLocation} weatherCheck={weatherCheck} searchButton={searchButton} />
                  </Wrapper>
                ) :
                  null
              }
              <Spacer isBasic />
              <Spacer isSmall />
              <Wrapper justifyContentCenter alignItemsCenter>
                <Text style={{
                  textAlign: 'center',
                  fontFamily: appFonts.interBold,
                  fontSize: fontSizes.h5,
                  color: colors.appTextColor5
                }}>
                  {city},{' '}
                  <Text style={{
                    fontFamily: appFonts.interMedium,
                    fontSize: fontSizes.large
                  }}>{country}</Text>
                </Text>
                <Spacer isDoubleBase />
                <Images.Simple style={{ resizeMode: 'contain' }} source={weatherImages[icon]} size={sizes.images.xL} />
                <Spacer isBasic />
                <Text style={{
                  textAlign: 'center',
                  fontFamily: appFonts.interBold,
                  fontSize: fontSizes.xL,
                  color: colors.appTextColor5,
                  marginLeft: width(5)
                }}>{temperature}&#176;</Text>
                <Text style={{
                  textAlign: 'center',
                  fontFamily: appFonts.interRegular,
                  fontSize: fontSizes.h6,
                  color: colors.appTextColor5,
                }}>{description}</Text>
              </Wrapper>
              <Spacer isBasic />
              <Wrapper justifyContentSpaceBetween marginHorizontalSmall flexDirectionRow>
                <Wrapper alignItemsCenter flexDirectionRow>
                  <Icons.Custom icon={appIcons.wind} size={sizes.icons.small} />
                  <Spacer isSmall horizontal />
                  <Text style={{
                    textAlign: 'center',
                    fontFamily: appFonts.interRegular,
                    fontSize: fontSizes.regular,
                    color: colors.appTextColor5,
                  }}>{wind}km</Text>
                </Wrapper>
                <Wrapper alignItemsCenter flexDirectionRow>
                  <Icons.Custom icon={appIcons.drop} size={sizes.icons.small} />
                  <Spacer isSmall horizontal />
                  <Text style={{
                    textAlign: 'center',
                    fontFamily: appFonts.interRegular,
                    fontSize: fontSizes.regular,
                    color: colors.appTextColor5,
                  }}>{humidity}%</Text>
                </Wrapper>
                <Wrapper alignItemsCenter flexDirectionRow>
                  <Icons.Custom icon={appIcons.sun} size={sizes.icons.small} />
                  <Spacer isSmall horizontal />
                  <Text style={{
                    textAlign: 'center',
                    fontFamily: appFonts.interRegular,
                    fontSize: fontSizes.regular,
                    color: colors.appTextColor5,
                  }}>{sunRise}</Text>
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Spacer isBasic />
            <Wrapper>
              <Wrapper marginHorizontalSmall flexDirectionRow>
                <Icons.Custom icon={appIcons.clock} color={colors.iconColor3} size={sizes.icons.small} />
                <Spacer isSmall horizontal />
                <Text style={{
                  textAlign: 'center',
                  fontFamily: appFonts.interRegular,
                  fontSize: fontSizes.regular,
                  color: colors.appTextColor5,
                }}>3 Hours Forecast</Text>
              </Wrapper>
              <Spacer isBasic />
              {
                loader &&
                <Wrapper flex={1} marginHorizontalSmall> 
                <ShimmerPlaceholder
                shimmerColors={[
                  colors.appBgColor3, // Base shimmer color
                  colors.appColor4, // Shimmer highlight color
                  colors.appBgColor4, // Back to base
                ]}
                location={[0.3, 0.5, 1]}
                shimmerWidthPercent={1}
                duration={2000}
                style={{ borderRadius: sizes.inputRadius, width: width(94), height: height(30)  }}></ShimmerPlaceholder>
                </Wrapper>
              }
              {!loader && weatherResultsArray.length > 0 ? (
                <Charts.LineCharts weatherForecast={weatherResults} timezone={timezone} />
              ):null
            }
            
            </Wrapper>
            <Spacer isBasic />
            <Wrapper>
              <Wrapper marginHorizontalSmall flexDirectionRow>
                <Icons.Custom icon={appIcons.calendar} color={colors.iconColor3} size={sizes.icons.small} />
                <Spacer isSmall horizontal />
                <Text style={{
                  textAlign: 'center',
                  fontFamily: appFonts.interRegular,
                  fontSize: fontSizes.regular,
                  color: colors.appTextColor5,
                }}>Daily Forecast</Text>
              </Wrapper>
              <Spacer isBasic />
              {
                loader &&
                <FlatList data={[1, 1, 1, 1, 1]}
                  horizontal

                  showsHorizontalScrollIndicator={false}
                  renderItem={(item, index) => {
                    console.log(index)
                    return (
                      <>
                        {
                          item.index === 0 && (
                            <>
                              <Spacer isSmall horizontal />
                              <Spacer isTiny horizontal />
                            </>
                          )
                        }
                        <ShimmerPlaceholder
                          shimmerColors={[
                            colors.appBgColor3, // Base shimmer color
                            colors.appColor4, // Shimmer highlight color
                            colors.appBgColor4, // Back to base
                          ]}
                          location={[0.3, 0.5, 1]}
                          shimmerWidthPercent={1}
                          duration={2000}
                          style={{ borderRadius: sizes.inputRadius, marginRight: sizes.smallMargin, width: width(30), height: width(80) / 2 }}>
                          <Wrapper flex={1} paddingVerticalBase backgroundColor={colors.appBgColor3} justifyContentCenter alignItemsCenter style={{ borderRadius: sizes.inputRadius, width: width(30) }}>
                            <Images.Simple style={{ resizeMode: 'contain' }} size={sizes.images.mediumLarge} source={''} />
                            <Spacer isSmall />
                            <Text style={{
                              textAlign: 'center',
                              fontFamily: appFonts.interRegular,
                              fontSize: fontSizes.regular,
                              color: colors.transparent,
                            }}>{item.index}</Text>
                            <Spacer isSmall />
                            <Text style={{
                              textAlign: 'center',
                              fontFamily: appFonts.interBold,
                              fontSize: fontSizes.large,
                              color: colors.transparent,
                            }}>35&#176;</Text>
                          </Wrapper>
                        </ShimmerPlaceholder>
                      </>
                    )
                  }}>

                </FlatList>
              }
              {!loader && weatherResultsArray.length > 0 ? (
                <ScrollViews.KeyboardAvoiding showsHorizontalScrollIndicator={false} horizontal>
                  <Spacer isSmall horizontal />
                  <Spacer isTiny horizontal />
                  {weatherResultsArray.map((item, index) => {
                    if (item.dt_txt.split(' ')[0] !== new Date().toISOString().slice(0, 10)) {
                      const date = new Date(item.dt_txt.split(' ')[0]);
                      const options = { weekday: 'long' };
                      const day = date.toLocaleDateString('en-US', options)
                      const tempKelvin = item.main.temp;
                      const tempCelsius = (tempKelvin - 273.15).toFixed(1);
                      return (
                        <Wrapper animation={'bounceIn'} key={`${item.dt}_${index}`} style={{ marginRight: sizes.smallMargin }}>
                          <Wrapper paddingVerticalBase backgroundColor={colors.appBgColor3} justifyContentCenter alignItemsCenter style={{ borderRadius: sizes.inputRadius, width: width(30) }}>
                            <Images.Simple style={{ resizeMode: 'contain' }} size={sizes.images.mediumLarge} source={weatherImages[item.weather[0].main]} />
                            <Spacer isSmall />
                            <Text style={{
                              textAlign: 'center',
                              fontFamily: appFonts.interRegular,
                              fontSize: fontSizes.regular,
                              color: colors.appTextColor5,
                            }}>{day}</Text>
                            <Spacer isSmall />
                            <Text style={{
                              textAlign: 'center',
                              fontFamily: appFonts.interBold,
                              fontSize: fontSizes.large,
                              color: colors.appTextColor5,
                            }}>{tempCelsius}&#176;</Text>
                          </Wrapper>
                        </Wrapper>
                      )
                    }
                  })}
                </ScrollViews.KeyboardAvoiding>
              ) : null
              }

            </Wrapper>
            <Spacer isBasic />
          </ScrollViews.WithKeyboardAvoidingView>
        </Wrapper>

      </BlurView>

    </>
  );
}

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})


