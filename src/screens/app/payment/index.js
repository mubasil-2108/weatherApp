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
import { DrawerActions } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

export default function Index(props) {

    const { navigate, goBack, dispatch } = props.navigation
    const {
        selected,
        handleRadioButtonPress,
        data,
        pressed,
        handlePayNow,
        setPressed,
        modalVisible,
        setModalVisible,
        payment
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
                        // allowText
                        title={'Payment Method'}
                        titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1 }} />
                </Wrapper>
                <Wrapper flex={0.6} marginHorizontalBase alignItemsCenter>
                    <Images.Simple style={{ resizeMode: 'contain', height: '100%', width: '100%', }} source={appImages.paymentCard} />
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
                {/* <ScrollViews.KeyboardAvoiding contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}> */}
                <Wrapper flex={1} style={{ flexGrow: 1 }}>
                    <Wrapper flex={1} marginHorizontalBase paddingVerticalSmall >
                        <Spacer isMedium />
                        <CardList editCard={() => navigate(routes.cardManagement, { editCard: 'editCard' })} toggle={handleRadioButtonPress} selected={selected} data={data} />
                    </Wrapper >
                    {/* </ScrollViews.KeyboardAvoiding> */}
                </Wrapper>
            </Wrapper>
            <Wrapper
                backgroundColor={colors.appColor1}
                paddingVerticalSmall>
                <Wrapper marginHorizontalBase>
                    <LinearGradient
                        colors={pressed ? [colors.transparent, colors.transparent] : [colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{
                            borderRadius: 28,
                            padding: 1,
                        }}>
                        <Buttons.Colored
                            buttonStyle={{ marginHorizontal: 0 }}
                            onPressIn={() => { setPressed(true); navigate(routes.cardManagement) }}
                            onPressOut={() => setPressed(false)}
                            text={'+Add New Card'}
                            gradientColors={[colors.buttonColor3, colors.buttonColor3]}
                            textStyle={{
                                color: colors.appTextColor2,
                                fontFamily: appFonts.appTextBold,
                                fontSize: fontSizes.regular,
                            }} />
                    </LinearGradient>
                </Wrapper>
                {
                    payment ?
                        null
                        :
                        <>
                            <Spacer isSmall />
                            <Buttons.Colored
                                onPress={() => handlePayNow()}
                                text={'Pay Now'}
                                gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                textStyle={{
                                    color: colors.appTextColor5,
                                    fontFamily: appFonts.appTextMedium,
                                    fontSize: fontSizes.regular,
                                }} />
                        </>
                }

            </Wrapper>

            <Modals.PopupPrimary toggle={() => setModalVisible(!modalVisible)} topMargin payNow titleStyle={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.h5, color: colors.appTextColor6 }} title={'Success'} visible={modalVisible} />
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


