import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList, Switches, GradientText, CheckBoxes } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight, appStyles } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // For unique IDs
import storage from '@react-native-firebase/storage';
import { DrawerActions } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Index(props) {

    const { navigate, goBack, dispatch } = props.navigation

    const {
        customDayNames,
        selectedDate,
        onDatePress,
        genderData,
        selectGender,
        setSelectGender
    } = useHooks() || {};
    const CustomHeader = ({ date, onPrevious, onNext }) => {
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        return (
            <Wrapper justifyContentCenter alignItemsCenter flexDirectionRow>
                <Text style={{ color: colors.appTextColor11, fontFamily: appFonts.baloo2_Regular, fontSize: fontSizes.regular }}>{`${month} ${year}`}</Text>
            </Wrapper>
        )
    };
    const CustomArrow = (direction) => {
        const icon = direction === 'left' ? appIcons.calendarLeft : appIcons.calendarRight;
        return (
            <Icons.Button
                customIcon={icon}
                iconColor={colors.iconColor9}
                buttonColor={colors.transparent}
                iconSize={sizes.icons.tiny}
            />
        );
    };
    const CustomDay = ({ date, state, customDayNames }) => {
        const isSelected = selectedDate === date.dateString;
        const dayName = customDayNames[new Date(date.dateString).getDay()];
        return (
            <>

                <TouchableOpacity onPress={() => onDatePress(date)} style={{ flex: 1 }}>
                    {isSelected ? (
                        <Wrapper
                            isGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            gradiantColors={isSelected ? [colors.appColor5, colors.appColor5, colors.appColor3,] : [colors.transparent, colors.transparent]}
                            style={
                                {
                                    width: 30,
                                    height: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 50,
                                }}>
                            <Wrapper alignItemsCenter>
                                <Text style={[{ color: colors.appTextColor11, fontFamily: appFonts.avenirNextLTPro_Medium, fontSize: fontSizes.medium }, { color: colors.appTextColor5 }]}>
                                    {date.day}
                                </Text>
                            </Wrapper>
                        </Wrapper>
                    ) : (

                        <Wrapper isGradient
                            gradiantColors={[colors.transparent, colors.transparent]}
                            style={{
                                width: 30,
                                height: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 50,

                            }}>
                            <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.avenirNextLTPro_Medium, color: colors.appTextColor11 }}>
                                {date.day}
                            </Text>
                        </Wrapper>
                    )}
                </TouchableOpacity>
            </>
        );
    };
    return (
        <>
            <Wrapper isMain backgroundColor={colors.appColor1}>
                <StatusBars.Dark backgroundColor={colors.appColor1} />
                <Spacer isStatusBarHeigt />
                <Wrapper
                    marginHorizontalTiny
                    backgroundColor={colors.appColor1}>
                    <Headers.Primary
                        onBackPress={() => goBack()}
                        showBackArrow
                        rightIconSource={appIcons.chevron_left}
                        title={'Monday'}
                        titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1, height: height(7) }} />
                </Wrapper>
                <ScrollViews.KeyboardAvoiding>
                    <Spacer />
                    <Wrapper marginHorizontalBase>
                        <Wrapper paddingHorizontalTiny paddingVerticalTiny isBorderedWrapper marginHorizontalZero marginVerticalZero>
                            <Calendar
                                dayComponent={({ date, state }) => (

                                    <CustomDay date={date} state={state} customDayNames={customDayNames} />
                                )}
                                style={{ flex: 1, width: '100%' }}
                                hideExtraDays={true}
                                // hideDayNames={true}
                                renderArrow={(direction) => CustomArrow(direction)}
                                onDayPress={day => onDatePress(day)}
                                onPressArrowLeft={subtractMonth => subtractMonth()}
                                onPressArrowRight={addMonth => addMonth()}
                                renderHeader={(date) => (
                                    <CustomHeader
                                        date={new Date(date)}
                                        onPrevious={() => console.log('Previous Month')}
                                        onNext={() => console.log('Next Month')}
                                    />
                                )}
                                theme={{
                                    textDayHeaderFontFamily: appFonts.avenirNextLTPro_Medium,
                                    textDayHeaderFontSize: fontSizes.tiny
                                }}
                            />
                            <Spacer isSmall />
                        </Wrapper>
                        <Wrapper marginVerticalBase flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
                            <Wrapper>
                                <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Time Slot</Text>
                            </Wrapper>
                            <TouchableOpacity>
                                <LinearGradient
                                    colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={{
                                        borderRadius: 28,
                                        padding: 1,
                                    }}
                                >
                                    <Wrapper justifyContentCenter paddingVerticalTiny paddingHorizontalSmall style={{ borderRadius: sizes.cardRadius }} backgroundColor={colors.appColor1}>
                                        <GradientText start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} text={'+Add More'} color={[colors.appTextColor2, colors.appTextColor2, colors.appTextColor30]} textStyle={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular }} />
                                    </Wrapper>
                                </LinearGradient>
                            </TouchableOpacity>
                        </Wrapper>
                        <Wrapper justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                            <Wrapper flex={1}>
                                <TextInputs.Colored
                                    title={'Starting Time'}
                                    // value={fullName}
                                    // onChangeText={(text) => setFullName(text)}
                                    customIconLeft={appIcons.clock}
                                    iconColorLeft={colors.iconColor1}
                                    keyboardType={'default'}
                                    containerStyle={{ width: width(41), marginHorizontal: 0, }}
                                    inputContainerStyle={{
                                        backgroundColor: colors.inputfieldColor1,
                                        borderColor: colors.inputTextBorder,
                                        borderRadius: totalSize(2)
                                    }}
                                    maxLength={4}
                                    inputStyle={{
                                        fontSize: fontSizes.medium,
                                        fontFamily: appFonts.appTextRegular,
                                        color: colors.appTextColor1,
                                        right: width(2)

                                    }}
                                    placeholder={'00:900 am'}
                                    placeholderTextColor={colors.placeHolderColor2}
                                    titleStyle={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.appTextBold,
                                        color: colors.appTextColor3
                                    }} />
                            </Wrapper>
                            <Wrapper style={{ top: height(1.5) }}>
                                <Text style={{ fontFamily: appFonts.satoshiRegular, fontSize: fontSizes.medium, color: colors.appTextColor7 }}>-</Text>
                            </Wrapper>
                            <Wrapper flex={1} alignItemsFlexEnd>
                                <TextInputs.Colored
                                    title={'Ending Time'}
                                    // value={fullName}
                                    // onChangeText={(text) => setFullName(text)}
                                    customIconLeft={appIcons.clock}
                                    iconColorLeft={colors.iconColor1}
                                    keyboardType={'numeric'}
                                    maxLength={4}
                                    containerStyle={{ width: width(41), marginHorizontal: 0 }}
                                    inputContainerStyle={{
                                        backgroundColor: colors.inputfieldColor1,
                                        borderColor: colors.inputTextBorder,
                                        borderRadius: totalSize(2)
                                    }}
                                    inputStyle={{
                                        fontSize: fontSizes.medium,
                                        fontFamily: appFonts.appTextRegular,
                                        color: colors.appTextColor1,
                                        right: width(2)
                                    }}
                                    placeholder={'11:00 am'}
                                    placeholderTextColor={colors.placeHolderColor2}
                                    titleStyle={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.appTextBold,
                                        color: colors.appTextColor3
                                    }} />
                            </Wrapper>
                        </Wrapper>
                        <Spacer isSmall />
                        <TextInputs.Colored
                            title={'Rate per hour'}
                            // value={email}
                            // onChangeText={(text) => setEmail(text)}
                            keyboardType={'numeric'}
                            containerStyle={{ marginHorizontal: 0 }}
                            inputCntainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.dollar}
                            inputStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.appTextRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            // iconStyleLeft={{  }}
                            placeholder={'$13'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                        <Wrapper marginVerticalSmall flexDirectionRow>
                            <Icons.Custom icon={appIcons.info} size={sizes.icons.small} />
                            <Spacer horizontal isSmall />
                            <Text style={{ flex: 1, fontFamily: appFonts.appTextRegular, fontSize: fontSizes.small, color: colors.appTextColor1 }}>Tips make up a significant proportion of earning so, a lower rate may be beneficial</Text>
                        </Wrapper>
                        <TextInputs.DropDown
                            title={'Time Zone'}
                            data={genderData}
                            values={selectGender}
                            onChange={(text) => setSelectGender(text)}
                            keyboardType={'numeric'}
                            customIconLeft={appIcons.time}
                            iconColorLeft={colors.iconColor1}
                            containerStyles={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            placeholder={'Select here...'}
                            placeholderStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.appTextRegular,
                                color: colors.appTextColor3,
                                opacity: 0.5
                            }}
                            inputStyle={{
                                flex: 1,
                            }}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                        <Wrapper marginVerticalSmall>
                            <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Transport</Text>
                        </Wrapper>
                        <TextInputs.DropDown
                            title={'Transport Preferences'}
                            data={genderData}
                            values={selectGender}
                            onChange={(text) => setSelectGender(text)}
                            // keyboardType={'numeric'}
                            customIconLeft={appIcons.car2}
                            // iconSizeLeft={sizes.icons.small}
                            iconColorLeft={colors.iconColor1}
                            containerStyles={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            placeholder={'Car'}
                            placeholderStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.appTextRegular,
                                color: colors.appTextColor3,
                                opacity: 0.5
                            }}
                            inputStyle={{
                                flex: 1,
                            }}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                        <Spacer isSmall />
                        <TextInputs.Colored
                            title={'Transport Charges'}
                            // value={email}
                            // onChangeText={(text) => setEmail(text)}
                            keyboardType={'numeric'}
                            containerStyle={{ marginHorizontal: 0 }}
                            inputCntainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.dollar}
                            inputStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.appTextRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            // iconStyleLeft={{  }}
                            placeholder={'$13'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                            <Spacer />
                        <Wrapper paddingVerticalSmall justifyContentFlexend >
                            <Buttons.Colored
                                onPress={() => goBack()}
                                buttonStyle={{ marginHorizontal: 0 }}
                                text={'Save Changes'}
                                iconContainer={{ left: width(34) }}
                                gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                textStyle={{
                                    color: colors.appTextColor5,
                                    fontFamily: appFonts.appTextMedium,
                                    fontSize: fontSizes.regular,
                                }} />

                        </Wrapper>
                    </Wrapper>
                </ScrollViews.KeyboardAvoiding>
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
    },
    flipCard: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    face: {
        backgroundColor: colors.appColor3,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: sizes.cardRadius,
    },
    back: {
        backgroundColor: colors.appColor4,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: sizes.cardRadius,
    },
    timerText: {
        fontSize: fontSizes.h4_small,
        color: colors.appTextColor2,
        fontFamily: appFonts.appTextMedium,
    },
})