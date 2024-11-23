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
        editBooking,
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
                        // allowText
                        rightIcon
                        rightIconOnPress={() => navigate(routes.tripPlan, {editBooking: 'editBooking'})}
                        iconColor={colors.iconColor8}
                        leftButtonStyle={{ borderColor: colors.transparent }}
                        leftIconSource={appIcons.edit}
                        title={'Booking Confirmation'}
                        titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1 }} />
                </Wrapper>
                <ScrollViews.KeyboardAvoiding contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
                    <Wrapper marginHorizontalMedium>
                        <Wrapper marginHorizontalZero>
                            <Wrapper flexDirectionRow>
                                <Wrapper >
                                    <Images.SqareRound size={sizes.images.xLSmall} style={{ borderRadius: 10, }} source={appImages.profile1} />
                                </Wrapper>
                                <Spacer horizontal isSmall />
                                <Wrapper justifyContentSpaceBetween flex={0.8} style={{ flexWrap: 'wrap' }}>
                                    <Wrapper >
                                        <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor8, fontSize: fontSizes.medium }}>John Doe</Text>
                                        <Spacer isTiny />
                                        <Wrapper alignItemsCenter flexDirectionRow>
                                            <Icons.Custom icon={appIcons.star} size={sizes.icons.small} />
                                            <Spacer width={width(1)} />
                                            <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor3, fontSize: fontSizes.small }}>5.0</Text>
                                        </Wrapper>
                                    </Wrapper>
                                    <Wrapper justifyContentCenter >
                                        <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor2, fontSize: fontSizes.regular }}>$165,3{' '}
                                            <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor7, fontSize: fontSizes.regular }}>/night</Text></Text>
                                    </Wrapper>
                                    <Wrapper >
                                        <Text style={{ fontFamily: appFonts.appTextLight, textAlign: 'justify', color: colors.appTextColor3, fontSize: fontSizes.small }}>Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.</Text>
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                        <Spacer isDoubleBase />
                        <Wrapper>
                            <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.baloo2_Bold, fontSize: fontSizes.medium }}>Your Trip</Text>
                            <Spacer height={height(1)} />
                            <Wrapper style={{ marginRight: width(8) }}>
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
                                <Spacer isTiny />
                                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                                    <Icons.Custom icon={appIcons.calendar} color={colors.iconColor6} size={sizes.icons.small} />
                                    <Spacer horizontal isSmall />
                                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>Feb 17-20 | 4 Days | 4 hours</Text>
                                </Wrapper>
                            </Wrapper>

                        </Wrapper>
                        <Spacer isMedium />
                        <Wrapper>
                            <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Price Details</Text>
                            <Spacer height={height(1)} />
                            <Wrapper marginHorizontalTiny>
                                <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                                    <Wrapper flex={5}>
                                        <Text style={{ fontFamily: appFonts.appTextLight, fontSize: fontSizes.regular, color: colors.appTextColor3 }}>$63.97 x 2 hour</Text>
                                    </Wrapper>
                                    <Wrapper flex={1} alignItemsFlexStart>
                                        <Text style={{ fontFamily: appFonts.appTextLight, fontSize: fontSizes.regular, color: colors.appTextColor3 }}>$63.97</Text>
                                    </Wrapper>
                                </Wrapper>
                                <Spacer isSmall />
                                <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                                    <Wrapper flex={5}>
                                        <Text style={{ fontFamily: appFonts.appTextLight, fontSize: fontSizes.regular, color: colors.appTextColor3 }}>Clearing fee</Text>
                                    </Wrapper>
                                    <Wrapper flex={1} alignItemsFlexStart>
                                        <Text style={{ fontFamily: appFonts.appTextLight, fontSize: fontSizes.regular, color: colors.appTextColor3 }}>$10.66</Text>
                                    </Wrapper>
                                </Wrapper>
                                <Spacer isBasic />
                                <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                                    <Wrapper flex={5}>
                                        <Text style={{ fontFamily: appFonts.appTextLight, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>Total USD</Text>
                                    </Wrapper>
                                    <Wrapper flex={1} alignItemsFlexStart>
                                        <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>$74.63</Text>
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                        <Spacer isMedium />
                        <Wrapper>
                            <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Cancelation Policy</Text>
                            <Spacer height={height(1)} />
                            <Wrapper>
                                <Text style={{ textAlign: 'justify', fontFamily: appFonts.appTextRegular, fontSize: fontSizes.small, color: colors.appTextColor3 }}>Lorem ipsum dolor sit amet. Ut esse repellat ut illo nesciunt et consequatur autem ut ipsa omnis qui officia expedita non deserunt voluptatem. Sed Quis itaque a dolores necessitatibus quo internos tempora. A fugit debitis ab blanditiis nulla et pariatur officiis ut nemo dolore eum dolorem quas qui inventore vitae aut autem cupiditate.</Text>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>

                </ScrollViews.KeyboardAvoiding>


            </Wrapper>
            <Wrapper
                // alignItemsCenter
                backgroundColor={colors.appColor1}
                paddingVerticalBase
                // justifyContentSpaceBetween
                style={{
                    shadowColor: colors.shadowColor1,
                    shadowOffset: { width: 0, height: -5.93 },
                    shadowOpacity: 0.12,
                    shadowRadius: 30,
                    elevation: 50,
                }}>
                <Buttons.Colored
                    onPress={() => navigate(routes.payment)}
                    text={'Confirm Booking'}
                    gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                    textStyle={{
                        color: colors.appTextColor5,
                        fontFamily: appFonts.appTextBold,
                        fontSize: fontSizes.regular,
                    }} />
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


