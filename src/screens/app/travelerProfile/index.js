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
                <Spacer isStatusBarHeigt />
                <Wrapper
                    marginHorizontalSmall
                    backgroundColor={colors.appColor1}>
                    <Headers.Primary
                        onBackPress={() => goBack()}
                        showBackArrow
                        rightIconSource={appIcons.chevron_left}
                        // allowText
                        // iconColor={colors.iconColor1}
                        title={'Traveler Profile'}
                        titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1, height: height(7) }} />
                </Wrapper>
                <ScrollViews.KeyboardAvoiding contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
                    <Spacer />
                    <Wrapper marginHorizontalBase>
                        <Wrapper marginHorizontalZero paddingHorizontalSmall isBorderedWrapper style={{ borderColor: colors.borderColor4 }}>
                            <Wrapper justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                                <Wrapper >
                                    <Images.SqareRound size={sizes.images.largeXLarge} style={{ borderRadius: 10, }} source={appImages.profile1} />
                                </Wrapper>
                                <Spacer horizontal isSmall />
                                <Wrapper flex={1}>
                                    <Wrapper flex={0.6} justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                                        <Text style={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor8, fontSize: fontSizes.large1 }}>John Doe</Text>
                                        <Icons.Button isRound onPress={() => navigate(routes.chatScreen)} buttonColor={colors.buttonColor4} buttonStyle={{ borderColor: colors.buttonBorder5, borderWidth: width(0.3) }} iconColor={colors.iconColor8} buttonSize={sizes.icons.largeXLarge} customIcon={appIcons.messages} iconSize={sizes.icons.mediumSmall} />
                                    </Wrapper>
                                    <Wrapper  >
                                        <Text style={{ flex: 1, fontFamily: appFonts.appTextRegular, textAlign: 'justify', color: colors.appTextColor3, fontSize: fontSizes.small }}>Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.el facilis sint aut sunt voluptatem.</Text>
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                        <Spacer />
                        <Wrapper>
                            <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Home Address</Text>
                            <Spacer height={height(1)} />
                            <Wrapper justifyContentFlexstart>
                                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                                    <Icons.Custom icon={appIcons.location} color={colors.iconColor1} size={sizes.icons.xSmall} />
                                    <Spacer width={width(1)} />
                                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>88 Zurab Lorem St Gorgia, batumi</Text>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                        <Spacer isSmall />
                        <Wrapper>
                            <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Languages</Text>
                            <Spacer height={height(1)} />
                            <Wrapper flex={1} justifyContentFlexstart flexDirectionRow style={{ flexWrap: 'wrap' }}>
                                <Wrapper alignItemsCenter flexDirectionRow style={{ marginRight: width(17), marginBottom: sizes.marginHorizontal2 }}>
                                    <Icons.Button isRound disabled buttonSize={sizes.icons.largeTiny} buttonColor={colors.buttonColor5} iconSize={sizes.icons.medium} customIcon={appIcons.indonesia} />
                                    <Spacer horizontal isSmall />
                                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular, color: colors.appTextColor3 }}>Indonesia</Text>
                                </Wrapper>
                                <Wrapper alignItemsCenter flexDirectionRow style={{ marginRight: width(17), marginBottom: sizes.marginHorizontal2 }}>
                                    <Icons.Button isRound disabled buttonSize={sizes.icons.largeTiny} buttonColor={colors.buttonColor5} iconSize={sizes.icons.medium} customIcon={appIcons.english} />
                                    <Spacer horizontal isSmall />
                                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular, color: colors.appTextColor3 }}>English (US)</Text>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                        {/* <Spacer /> */}
                        <Wrapper>
                            <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Preferences</Text>
                            <Spacer height={height(1)} />
                            <Wrapper flex={1} justifyContentSpaceBetween flexDirectionRow style={{ flexWrap: 'wrap' }}>
                                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Dining</Text>
                                </Wrapper>
                                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Sustainable</Text>
                                </Wrapper>
                                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Budget</Text>
                                </Wrapper>
                                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Party</Text>
                                </Wrapper>
                            </Wrapper>
                            <Wrapper justifyContentSpaceBetween flexDirectionRow style={{ flexWrap: 'wrap' }}>
                                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Relaxation</Text>
                                </Wrapper>
                                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Night Life</Text>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                        <Spacer />
                        <Wrapper>
                            <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Local Attributes</Text>
                            <Spacer height={height(1)} />
                            <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Couple</Text>
                        </Wrapper>
                        <Spacer />
                        <Wrapper>
                            <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Preferences</Text>
                            <Spacer height={height(1)} />
                            <Wrapper flexDirectionRow alignItemsCenter>
                                <Icons.Custom icon={appIcons.car} color={colors.iconColor1} size={sizes.icons.xSmall} />
                                <Spacer width={width(1)} />
                                <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Public Transport</Text>
                            </Wrapper>
                            <Spacer isSmall />
                            <Wrapper flexDirectionRow alignItemsCenter>
                                <Icons.Custom icon={appIcons.people} color={colors.iconColor1} size={sizes.icons.xSmall} />
                                <Spacer width={width(1)} />
                                <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Walking</Text>
                            </Wrapper>
                        </Wrapper>
                        <Spacer />
                        <Wrapper>
                            <Text style={{ color: colors.appBgColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium }}>Unique Local Place</Text>
                            <Spacer height={height(1)} />
                            <Wrapper justifyContentFlexstart flexDirectionRow style={{ flexWrap: 'wrap' }}>
                                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter style={{ marginRight: width(8) }}>
                                    <Icons.Custom icon={appIcons.location} color={colors.iconColor1} size={sizes.icons.xSmall} />
                                    <Spacer width={width(1)} />
                                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Bali, Indonesia</Text>
                                </Wrapper>
                                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter style={{ marginRight: width(8) }}>
                                    <Icons.Custom icon={appIcons.location} color={colors.iconColor1} size={sizes.icons.xSmall} />
                                    <Spacer width={width(1)} />
                                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Phuket, Thiland</Text>
                                </Wrapper>
                                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter style={{ marginRight: width(8) }}>
                                    <Icons.Custom icon={appIcons.location} color={colors.iconColor1} size={sizes.icons.xSmall} />
                                    <Spacer width={width(1)} />
                                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Italy</Text>
                                </Wrapper>
                                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter style={{ marginRight: width(8) }}>
                                    <Icons.Custom icon={appIcons.location} color={colors.iconColor1} size={sizes.icons.xSmall} />
                                    <Spacer width={width(1)} />
                                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.small }}>Jumerah, Dubai</Text>
                                </Wrapper>
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
                        textStyle={{ textAlign: 'center', fontFamily: appFonts.appTextMedium, color: colors.appTextColor2, fontSize: fontSizes.regular }}
                        buttonStyle={{ width: width(40), paddingHorizontal: width(3), paddingVertical: height(1.45), justifyContent: 'center', alignItems: 'center' }}
                        text={'Cancel'} />
                </LinearGradient>
                <Buttons.ColoredSmall
                    onPress={() => navigate(routes.booking)}
                    gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                    textStyle={{ textAlign: 'justify', fontFamily: appFonts.appTextMedium, color: colors.appTextColor5, fontSize: fontSizes.regular }}
                    buttonStyle={{ width: width(40), paddingHorizontal: width(3), paddingVertical: height(1.6), justifyContent: 'center', alignItems: 'center' }}
                    text={'Accept'} />
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


