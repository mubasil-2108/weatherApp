import React, { Component, useState } from 'react';
import { Image, TouchableOpacity, View, } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, StatusBars, Images } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appFonts, fontSizes, appIcons, appImages } from '../../../services';
import { useHooks } from './hooks';

export default function Index(props) {
    const { navigate, goBack } = props.navigation

    const { handleInputChange, formData, cityOptions, handleStateChange, stateOptions, handleCountryChange, countryOptions, preferencesChunks, displayText, handleAdd, isInputVisible, setIsInputVisible, genderData, preferences, setPreferences, date, handleChangeText, street_1, street_2, setStreet_1, setStreet_2 } = useHooks()
    return (
        <Wrapper isMain backgroundColor={colors.appBgColor2} style={[{}]}>
            <StatusBars.Dark backgroundColor={colors.statusBarColor1} />
            <ScrollViews.KeyboardAvoiding>

                <Wrapper marginHorizontalBase style={{ marginTop: width(5) }}>
                    <Headers.Primary
                        onBackPress={() => goBack()}
                        showBackArrow
                        rightIconSource={appIcons.chevron_left}
                        allowText
                        textColor={colors.appTextColor9}
                        // iconColor={colors.iconColor1}
                        title={'Add Address'}
                        titleStyle={{ fontFamily: appFonts.interBold, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1 }} />

                    <Wrapper marginVerticalLarge>
                        <TextInputs.Colored
                            title={'Street 1'}
                            value={formData.street_1}
                            onChangeText={(text) => handleInputChange('street_1', text)}
                            keyboardType={'default'}
                            containerStyle={{ marginHorizontal: 0 }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            inputStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiRegular,
                                color: colors.appTextColor1
                            }}
                            placeholder={'Type here...'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.small,
                                fontFamily: appFonts.satoshiMedium,
                                color: colors.appTextColor3
                            }} />
                        <TextInputs.Colored
                            title={'Street 2'}
                            value={formData.street_2}
                            onChangeText={(text) => handleInputChange('street_2',text)}
                            keyboardType={'default'}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            inputStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiRegular,
                                color: colors.appTextColor1
                            }}
                            placeholder={'Type here...'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.small,
                                fontFamily: appFonts.satoshiMedium,
                                color: colors.appTextColor3
                            }} />
                        <Wrapper flexDirectionRow justifyContentSpaceBetween>
                            {cityOptions && (
                                <TextInputs.DropDown
                                    title={'City'}
                                    data={cityOptions}
                                    values={formData.city}
                                    onChange={(value) => handleInputChange('city', value)}
                                    keyboardType={'numeric'}
                                    containerStyles={{ width: width(40), marginHorizontal: 0, marginTop: height(1), }}
                                    inputContainerStyle={{
                                        borderColor: colors.inputTextBorder,
                                        borderRadius: totalSize(2)
                                    }}
                                    placeholder={'Select--'}
                                    inputStyle={{
                                        width: width(40),
                                    }}
                                    titleStyle={{
                                        fontSize: fontSizes.small,
                                        fontFamily: appFonts.satoshiMedium,
                                        color: colors.appTextColor3
                                    }} />
                            )}
                            {stateOptions && (
                                <TextInputs.DropDown
                                    title={'State'}
                                    data={stateOptions}
                                    values={formData.state}
                                    onChange={(value) => {handleInputChange('state', value); handleStateChange(value)}}
                                    keyboardType={'numeric'}
                                    containerStyles={{ width: width(40), marginHorizontal: 0, marginTop: height(1), }}
                                    inputContainerStyle={{
                                        borderColor: colors.inputTextBorder,
                                        borderRadius: totalSize(2)
                                    }}
                                    placeholder={'Select--'}
                                    inputStyle={{
                                        width: width(40),
                                    }}
                                    titleStyle={{
                                        fontSize: fontSizes.small,
                                        fontFamily: appFonts.satoshiMedium,
                                        color: colors.appTextColor3
                                    }} />
                            )}
                        </Wrapper>
                        <Wrapper flexDirectionRow justifyContentSpaceBetween>

                            <TextInputs.Colored
                                title={'ZIP / Postal Code'}
                                value={formData.postalCode}
                                onChangeText={(num) =>handleInputChange('postalCode', num.toString())}
                                keyboardType={'numeric'}
                                maxLength={6}
                                containerStyle={{ width: width(40), marginHorizontal: 0, marginTop: height(1), }}
                                inputContainerStyle={{
                                    backgroundColor: colors.inputfieldColor1,
                                    borderColor: colors.inputTextBorder,
                                    borderRadius: totalSize(2)
                                }}
                                inputStyle={{
                                    fontSize: fontSizes.regular,
                                    fontFamily: appFonts.satoshiRegular,
                                    color: colors.appTextColor1
                                }}
                                placeholder={'05520'}
                                placeholderTextColor={colors.placeHolderColor}
                                titleStyle={{
                                    fontSize: fontSizes.small,
                                    fontFamily: appFonts.satoshiMedium,
                                    color: colors.appTextColor3
                                }} />

                            <TextInputs.DropDown
                                title={'Country'}
                                data={countryOptions}
                                values={formData.country}
                                onChange={(value) => {handleInputChange('country', value); handleCountryChange(value)}}
                                keyboardType={'numeric'}
                                containerStyles={{ width: width(40), marginHorizontal: 0, marginTop: height(1), }}
                                inputContainerStyle={{
                                    borderColor: colors.inputTextBorder,
                                    borderRadius: totalSize(2)
                                }}
                                placeholder={'Select--'}
                                inputStyle={{
                                    width: width(40),
                                }}
                                titleStyle={{
                                    fontSize: fontSizes.small,
                                    fontFamily: appFonts.satoshiMedium,
                                    color: colors.appTextColor3
                                }} />
                        </Wrapper>
                    </Wrapper>
                    <Wrapper marginVerticalLarge style={{ marginTop: width(55) }}>
                        <Buttons.Colored
                        onPress={()=>navigate(routes.createProfile, { formData })}
                            buttonStyle={{ marginHorizontal: 0 }}
                            text={'Add'}
                            gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                            textStyle={{
                                color: colors.appTextColor5,
                                fontFamily: appFonts.interSemiBold,
                                fontSize: fontSizes.regular,
                            }} />

                    </Wrapper>

                </Wrapper>
            </ScrollViews.KeyboardAvoiding>

        </Wrapper>
    );
}

