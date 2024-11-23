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
                        title={'Filters'}
                        titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1, height: height(7) }} />
                </Wrapper>
                <ScrollViews.KeyboardAvoiding contentContainerStyle={{ flexGrow: 1 }}>
                    <Spacer isSmall />
                    <Wrapper backgroundColor={colors.appColor1} marginHorizontalBase>
                        <Wrapper alignItemsCenter flexDirectionRow>
                            <Images.Simple size={sizes.images.small} source={appIcons.equalizer} />
                            <Spacer horizontal isTiny />
                            <Text style={{ fontFamily: appFonts.baloo2_Medium, fontSize: fontSizes.h3, color: colors.appTextColor6 }}>Filters</Text>
                        </Wrapper>
                        {/* <TouchableOpacity > */}
                        <TextInputs.Counter
                            title={'Language'}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2),
                                height: sizes.inputHeight
                            }}
                            placeholder={'Select...'}
                            Language={selectedLanguageNames}
                            // onPress
                            textStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiRegular,
                                color: colors.appTextColor1
                            }}
                            onPressIconRight={() => setModalVisible(true)}
                            flagCode={firstLanguageIsoCode}
                            flageSize={sizes.icons.medium}
                            iconStyleLeft={{ width: width(7), borderRadius: 4 }}
                            customIconRight1={appIcons.dropDown}
                            iconColorRight={colors.iconColor1}
                            iconSizeRight={sizes.icons.tiny}
                            inputStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            iconStyleRight={{
                                marginRight: width(5)
                            }}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiBold,
                                color: colors.appTextColor3
                            }} />
                        {/* </TouchableOpacity> */}
                        <Spacer />
                        <Text style={{ fontFamily: appFonts.baloo2_Bold, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Preferences</Text>
                    </Wrapper>
                    <Spacer isMedium />
                    <Wrapper>
                        <TextInputs.SearchBar
                            value={search}
                            onChangeText={(text) => setSearch(text)}
                            iconStyleLeft={{ marginLeft: width(1) }}
                            keyboardType={'default'}
                            iconColorLeft={colors.iconColor10}
                            inputContainerStyle={{
                                borderColor: colors.inputTextBorder3,
                                borderRadius: totalSize(2.5),
                                backgroundColor: colors.inputfieldColor5,
                            }}
                            inputStyle={{
                                fontSize: fontSizes.small,
                                fontFamily: appFonts.baloo2_Regular,
                                color: colors.appTextColor1
                            }}
                            placeholder={'Search'}
                            placeholderTextColor={colors.placeHolderColor2}
                        />
                    </Wrapper>
                    <Spacer />
                    <Wrapper marginHorizontalBase>
                        <Wrapper alignItemsCenter flexDirectionRow style={{ flexWrap: 'wrap' }}>

                            {renderPreference('Dining', appIcons.dining)}
                            <Spacer horizontal isTiny />
                            {renderPreference('History', appIcons.history)}
                            <Spacer horizontal isTiny />
                            {renderPreference('Shopping', appIcons.shopping)}
                            <Spacer horizontal isTiny />
                            {renderPreference('Art', appIcons.art)}
                            <Spacer horizontal isTiny />
                            {renderPreference('Night Life', appIcons.nightLife)}
                            <Spacer horizontal isTiny />
                            {renderPreference('Culture', appIcons.culture)}
                            <Spacer horizontal isTiny />
                            {renderPreference('Nature', appIcons.nature)}
                            <Spacer horizontal isTiny />
                            {renderPreference('Sightseeing', appIcons.sightSeeing)}
                            <Spacer horizontal isTiny />
                        </Wrapper>
                        <Spacer isSmall />
                        <Text style={{ fontFamily: appFonts.baloo2_Bold, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Locals Attributes</Text>
                        <Spacer />
                        <Wrapper alignItemsCenter flexDirectionRow style={{ flexWrap: 'wrap' }}>
                            {renderPreference('Couple', appIcons.couple)}
                            <Spacer horizontal isTiny />
                            {renderPreference('Family', appIcons.family)}
                            <Spacer horizontal isSmall />
                        </Wrapper>
                        <Spacer isSmall />

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

