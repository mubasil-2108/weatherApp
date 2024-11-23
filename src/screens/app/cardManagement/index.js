import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList, PlacesList, Rating, ReviewList, CardList } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // For unique IDs
import storage from '@react-native-firebase/storage';
import { DrawerActions, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

export default function Index(props) {

    const { navigate, goBack, dispatch } = props.navigation
    
    const {
        selected,
        handleRadioButtonPress,
        data,
        screenName,
        buttonText,
        pressed,
        setPressed,
        modalVisible,
        handleSubmit,
        setModalVisible,
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
                        rightIcon
                        leftIconSource={appIcons.delete}
                        // allowText
                        leftButtonStyle={{ borderColor: colors.transparent }}
                        title={screenName}
                        titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1 }} />
                </Wrapper>
                <ScrollViews.KeyboardAvoiding >

                    <Wrapper marginHorizontalBase alignItemsCenter>
                        <Images.Simple style={{ resizeMode: 'contain', height: height(27), width: '100%', }} source={appImages.paymentCard} />
                        <Wrapper isAbsolute alignItemsFlexStart style={{ width: '85%', top: height(10) }}>
                            <Spacer isTiny />
                            <Wrapper >
                                <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.h5, color: colors.appTextColor5 }}>3822  8293  8292  2356</Text>
                            </Wrapper>
                            <Spacer isMedium />
                            <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                                <Wrapper flex={4}>
                                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.tiny, color: colors.appTextColor15 }}>Card holder name</Text>
                                </Wrapper>
                                <Wrapper alignItemsFlexStart flex={1}>
                                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.tiny, color: colors.appTextColor15 }}>Expiry Date</Text>
                                </Wrapper>
                            </Wrapper>
                            <Spacer isSmall />
                            <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                                <Wrapper flex={4}>
                                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular, color: colors.appTextColor5 }}>Alexser verguson</Text>
                                </Wrapper>
                                <Wrapper alignItemsFlexStart flex={1}>
                                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular, color: colors.appTextColor5 }}>03/30</Text>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper isMain backgroundColor={colors.appColor1}>
                        <Wrapper flex={1} marginHorizontalBase paddingVerticalSmall >
                            <Spacer isMedium />
                            <TextInputs.Colored
                                title={'Full Name'}
                                // value={fullName}
                                // onChangeText={(text) => setFullName(text)}
                                keyboardType={'default'}
                                containerStyle={{ marginHorizontal: 0 }}
                                inputContainerStyle={{
                                    backgroundColor: colors.inputfieldColor1,
                                    borderColor: colors.inputTextBorder,
                                    borderRadius: totalSize(2)
                                }}
                                inputStyle={{
                                    fontSize: fontSizes.medium,
                                    fontFamily: appFonts.appTextRegular,
                                    color: colors.appTextColor1
                                }}
                                placeholder={'John Doe'}
                                placeholderTextColor={colors.placeHolderColor}
                                titleStyle={{
                                    fontSize: fontSizes.regular,
                                    fontFamily: appFonts.appTextBold,
                                    color: colors.appTextColor3
                                }} />
                            <Spacer isBasic/>
                            <TextInputs.Colored
                                title={'Card Number'}
                                // value={fullName}
                                // onChangeText={(text) => setFullName(text)}
                                keyboardType={'numeric'}
                                containerStyle={{ marginHorizontal: 0 }}
                                inputContainerStyle={{
                                    backgroundColor: colors.inputfieldColor1,
                                    borderColor: colors.inputTextBorder,
                                    borderRadius: totalSize(2)
                                }}
                                inputStyle={{
                                    fontSize: fontSizes.medium,
                                    fontFamily: appFonts.appTextRegular,
                                    color: colors.appTextColor1
                                }}
                                placeholder={'xxxx-xxxx-xxxx'}
                                placeholderTextColor={colors.placeHolderColor}
                                titleStyle={{
                                    fontSize: fontSizes.regular,
                                    fontFamily: appFonts.appTextBold,
                                    color: colors.appTextColor3
                                }} />
                            <Spacer isBasic/>
                            <Wrapper justifyContentSpaceBetween flexDirectionRow>
                                <Wrapper flex={1}>
                                    <TextInputs.Colored
                                        title={'Expiry Date'}
                                        // value={fullName}
                                        // onChangeText={(text) => setFullName(text)}
                                        keyboardType={'default'}
                                        containerStyle={{width: width(40), marginHorizontal: 0 }}
                                        inputContainerStyle={{
                                            backgroundColor: colors.inputfieldColor1,
                                            borderColor: colors.inputTextBorder,
                                            borderRadius: totalSize(2)
                                        }}
                                        inputStyle={{
                                            fontSize: fontSizes.medium,
                                            fontFamily: appFonts.appTextRegular,
                                            color: colors.appTextColor1
                                        }}
                                        placeholder={'11/24'}
                                        placeholderTextColor={colors.placeHolderColor}
                                        titleStyle={{
                                            fontSize: fontSizes.regular,
                                            fontFamily: appFonts.appTextBold,
                                            color: colors.appTextColor3
                                        }} />
                                </Wrapper>
                                <Wrapper flex={1} alignItemsFlexEnd>
                                    <TextInputs.Colored
                                        title={'3-Digit CVV'}
                                        // value={fullName}
                                        // onChangeText={(text) => setFullName(text)}
                                        keyboardType={'numeric'}
                                        maxLength={3}
                                        containerStyle={{width: width(40), marginHorizontal: 0 }}
                                        inputContainerStyle={{
                                            backgroundColor: colors.inputfieldColor1,
                                            borderColor: colors.inputTextBorder,
                                            borderRadius: totalSize(2)
                                        }}
                                        inputStyle={{
                                            fontSize: fontSizes.medium,
                                            fontFamily: appFonts.appTextRegular,
                                            color: colors.appTextColor1
                                        }}
                                        placeholder={'521'}
                                        placeholderTextColor={colors.placeHolderColor}
                                        titleStyle={{
                                            fontSize: fontSizes.regular,
                                            fontFamily: appFonts.appTextBold,
                                            color: colors.appTextColor3
                                        }} />
                                </Wrapper>
                            </Wrapper>
                        </Wrapper >
                        {/* </Wrapper> */}
                        {/* </ScrollViews.KeyboardAvoiding> */}
                    </Wrapper>
                </ScrollViews.KeyboardAvoiding>

            </Wrapper>

            <Wrapper
                backgroundColor={colors.appColor1}
                paddingVerticalBase>
                <Buttons.Colored
                      onPress={screenName === 'Edit Card Details' ? () => goBack() : handleSubmit}
                    text={buttonText}
                    gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                    textStyle={{
                        color: colors.appTextColor5,
                        fontFamily: appFonts.appTextMedium,
                        fontSize: fontSizes.regular,
                    }} />
            </Wrapper>

            <Wrapper>
                    <Modals.Swipable
                        hideHeader
                        visible={modalVisible}
                        onPress={ () => { goBack() }}
                        data={'Card added successfully'}
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