import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import ScrollPicker from "react-native-wheel-scrollview-picker";

import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList, PlacesList, Rating, ReviewList, CheckBoxes, TimePicker } from '../../../components';
import { useHooks } from './hooks'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight, appStyles } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';


export default function Index(props) {

    const { navigate, goBack, dispatch } = props.navigation
    const {
        modalVisible,
        setModalVisible,
        selectedLanguages,
        handleLanguageSelection,
        selectedLanguageNames,
        languageToIsoCodeMap,
        handleModalToggle,
        customDayNames,
        selectedDate,
        toggleCheckbox,
        isChecked,
        onDatePress,
        selected,
        handleRadioButtonPress,
        search,
        setSearch,
        handleSelection,
        isItemSelected
    } = useHooks() || {};
    const firstLanguageIsoCode = selectedLanguageNames.length > 0
        ? languageToIsoCodeMap[selectedLanguageNames[0]]
        : null;
    function renderPreference(label, icon) {
        const selected = isItemSelected(label);
        return (
            <TouchableOpacity onPress={() => handleSelection(label)}>
                <Wrapper start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} gradiantColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]} isBorderedWrapper={!selected} isGradient={selected} style={[selected && appStyles.paddingVerticalTiny, selected && appStyles.paddingHorizontalBase, { flexDirection: 'row', alignItems: 'center', borderColor: colors.appColor5, marginBottom: height(1.5), backgroundColor: selected ? colors.appColor5 : colors.appColor1, borderRadius: sizes.cardRadius, }, selected && { flex: 0, borderWidth: 1, borderColor: colors.appColor1 }]} alignItemsCenter paddingHorizontalBase marginHorizontalZero marginVerticalZero paddingVerticalTiny flexDirectionRow >
                    <Icons.Custom icon={icon} color={selected ? colors.iconColor3 : null} size={sizes.icons.small} />
                    <Spacer horizontal isTiny />
                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular, color: selected ? colors.appTextColor5 : colors.appTextColor2 }}>{label}</Text>
                </Wrapper>
            </TouchableOpacity>
        )
    }
    function renderLocalAttribute(label, icon) {
        const selected = isItemSelected(label);
        return (
            <TouchableOpacity onPress={() => handleSelection(label)}>
                <Wrapper start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} gradiantColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]} isBorderedWrapper={!selected} isGradient={selected} style={[selected && appStyles.paddingVerticalTiny, selected && appStyles.paddingHorizontalBase, { flexDirection: 'row', alignItems: 'center', borderColor: colors.appColor5, marginBottom: height(1.5), backgroundColor: selected ? colors.appColor5 : colors.appColor1, borderRadius: sizes.cardRadius, }, selected && { flex: 0, borderWidth: 1, borderColor: colors.appColor1 }]} alignItemsCenter paddingHorizontalBase marginHorizontalZero marginVerticalZero paddingVerticalTiny flexDirectionRow >
                    <Icons.Custom icon={icon} color={selected ? colors.iconColor3 : null} size={sizes.icons.small} />
                    <Spacer horizontal isTiny />
                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular, color: selected ? colors.appTextColor5 : colors.appTextColor2 }}>{label}</Text>
                </Wrapper>
            </TouchableOpacity>
        )
    }
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
                        // allowText
                        // iconColor={colors.iconColor1}
                        title={'Sort'}
                        titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1, height: height(7) }} />
                </Wrapper>
                <ScrollViews.KeyboardAvoiding contentContainerStyle={{ flexGrow: 1 }}>
                    <Spacer isSmall />
                    <Wrapper marginHorizontalBase>
                        <Wrapper alignItemsCenter flexDirectionRow>
                            <Images.Simple size={sizes.images.small} source={appIcons.sort} />
                            <Spacer horizontal isTiny />
                            <Text style={{ fontFamily: appFonts.baloo2_Medium, fontSize: fontSizes.h3, color: colors.appTextColor6 }}>Sort</Text>
                        </Wrapper>
                        <Spacer />
                        <Text style={{ fontFamily: appFonts.baloo2_Bold, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Price</Text>
                        <Spacer />
                        <Wrapper justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                            <Wrapper flex={1}>
                                <TextInputs.Colored
                                    title={'Minimum'}
                                    // value={fullName}
                                    // onChangeText={(text) => setFullName(text)}
                                    customIconLeft={appIcons.dollar}
                                    iconColorLeft={colors.iconColor1}
                                    keyboardType={'default'}
                                    containerStyle={{ width: width(40), marginHorizontal: 0, }}
                                    inputContainerStyle={{
                                        backgroundColor: colors.inputfieldColor1,
                                        borderColor: colors.inputTextBorder,
                                        borderRadius: totalSize(2)
                                    }}
                                    inputStyle={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.interRegular,
                                        color: colors.appTextColor1,
                                        right: width(2)

                                    }}
                                    placeholder={'$100'}
                                    placeholderTextColor={colors.placeHolderColor}
                                    titleStyle={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.baloo2_Regular,
                                        color: colors.appTextColor22
                                    }} />
                            </Wrapper>
                            <Wrapper style={{ top: height(1.5) }}>
                                <Text style={{ fontFamily: appFonts.interRegular, fontSize: fontSizes.regular, color: colors.appTextColor21 }}>-</Text>
                            </Wrapper>
                            <Wrapper flex={1} alignItemsFlexEnd>
                                <TextInputs.Colored
                                    title={'Maximum'}
                                    // value={fullName}
                                    // onChangeText={(text) => setFullName(text)}
                                    customIconLeft={appIcons.dollar}
                                    iconColorLeft={colors.iconColor1}
                                    keyboardType={'numeric'}
                                    maxLength={3}
                                    containerStyle={{ width: width(40), marginHorizontal: 0 }}
                                    inputContainerStyle={{
                                        backgroundColor: colors.inputfieldColor1,
                                        borderColor: colors.inputTextBorder,
                                        borderRadius: totalSize(2)
                                    }}
                                    inputStyle={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.interRegular,
                                        color: colors.appTextColor1,
                                        right: width(2)
                                    }}
                                    placeholder={'$500'}
                                    placeholderTextColor={colors.placeHolderColor}
                                    titleStyle={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.baloo2_Regular,
                                        color: colors.appTextColor22
                                    }} />
                            </Wrapper>
                        </Wrapper>
                        <Spacer />
                        <Text style={{ fontFamily: appFonts.baloo2_Bold, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Rating</Text>
                        <TextInputs.Colored
                            editable={false}
                            title={'Select Rating'}
                            // value={truncatedAddress}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.rating}
                            customIconRight={appIcons.dropDown}
                            iconColorRight={colors.iconColor1}
                            iconSizeRight={sizes.icons.tiny}
                            iconStyleRight={{
                                marginRight: width(5)
                            }}
                            inputStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.baloo2_Regular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            onPressIconRight={() => navigate(routes.addAddress)}
                            placeholder={'Best Rating'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.baloo2_Bold,
                                color: colors.appTextColor3
                            }} />
                        <Spacer />
                        <Text style={{ fontFamily: appFonts.baloo2_Bold, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Featured</Text>
                        <TextInputs.Colored
                            editable={false}
                            title={'Select Featured'}
                            // value={truncatedAddress}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.medal}
                            customIconRight={appIcons.dropDown}
                            iconColorRight={colors.iconColor1}
                            iconSizeRight={sizes.icons.tiny}
                            iconStyleRight={{
                                marginRight: width(5)
                            }}
                            inputStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.baloo2_Regular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            // onPressIconRight={() => navigate(routes.addAddress)}
                            placeholder={'Select'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.baloo2_Bold,
                                color: colors.appTextColor3
                            }} />
                    </Wrapper>
                    <Wrapper flex={1} marginHorizontalBase justifyContentFlexend marginVerticalSmall>
                        <Buttons.Colored
                            onPress={() => navigate(routes.matchingResult)}
                            buttonStyle={{ marginHorizontal: 0 }}
                            text={'Save'}
                            iconContainer={{ left: width(34) }}
                            gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                            textStyle={{
                                color: colors.appTextColor5,
                                fontFamily: appFonts.appTextBold,
                                fontSize: fontSizes.regular,
                            }} />
                    </Wrapper>
                </ScrollViews.KeyboardAvoiding>
            </Wrapper>
            <Modals.PopupPrimary handleLanguageSelection={handleLanguageSelection} selectedLanguages={selectedLanguages} toggle={() => setModalVisible(!modalVisible)} disableSwipe language topMargin titleStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.h5, color: colors.appTextColor6 }} title={'Language'} visible={modalVisible} />
        </>
    );
}

const styles = StyleSheet.create({
    selectedText: {
        right: width(8),
        color: colors.appTextColor18,
        fontFamily: appFonts.interMedium,
        fontSize: fontSizes.h6
    },
    unSelectedText: {
        color: colors.appTextColor19,
        fontFamily: appFonts.interMedium,
        fontSize: fontSizes.h6
    },
})

