import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import ScrollPicker from "react-native-wheel-scrollview-picker";

import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList, PlacesList, Rating, ReviewList, CheckBoxes, TimePicker } from '../../../components';
import { useHooks } from './hooks'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';


export default function Index(props) {

    const { navigate, goBack, dispatch } = props.navigation
    const {
        modalVisible,
        setModalVisible,
        customDayNames,
        selectedDate,
        toggleCheckbox,
        isChecked,
        onDatePress,

    } = useHooks() || {};

    const [selectedHour, setSelectedHour] = useState('1');
    const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
    const periods = ['PM', 'AM'];
    const handleHourChange = (data, selectedIndex) => {
        setSelectedHour(data);
    };

    const getItemTextStyle = (item, selectedValue) => {
        return item === selectedValue
            ? styles.selectedText
            : styles.unSelectedText;
    };

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

                                // Non-selected background color
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
                <Spacer />
                <Wrapper
                    marginHorizontalTiny
                    backgroundColor={colors.appColor1}>
                    <Headers.Primary
                        onBackPress={() => goBack()}
                        showBackArrow
                        rightIconSource={appIcons.chevron_left}
                        // allowText
                        // iconColor={colors.iconColor1}
                        title={'Schedule'}
                        titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1 }} />
                </Wrapper>
                <ScrollViews.KeyboardAvoiding contentContainerStyle={{ flexGrow: 1 }}>
                    <Wrapper flex={1} backgroundColor={colors.appColor1} marginHorizontalBase>
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
                        <Spacer />
                        <Text style={{ fontFamily: appFonts.baloo2_Bold, fontSize: fontSizes.medium, color: colors.appTextColor9 }}>Starting Time</Text>
                        <Wrapper paddingHorizontalBase paddingVerticalZero isBorderedWrapper>
                            <TimePicker />
                        </Wrapper>
                        <Spacer />
                        <Text style={{ fontFamily: appFonts.baloo2_Bold, fontSize: fontSizes.medium, color: colors.appTextColor9 }}>How many hours?</Text>
                        <Wrapper paddingHorizontalBase paddingVerticalZero isBorderedWrapper>
                            <Wrapper alignItemsCenter marginHorizontalSmall flexDirectionRow>
                                <ScrollPicker
                                    dataSource={hours}
                                    selectedIndex={periods.indexOf(selectedHour)}
                                    onValueChange={handleHourChange}
                                    wrapperHeight={180}
                                    wrapperBackground={colors.appColor1}
                                    itemHeight={60}
                                    renderItem={(item) => (
                                        <Text style={getItemTextStyle(item, selectedHour)}>
                                            {item}
                                        </Text>
                                    )}
                                    highlightColor={colors.borderColor5}
                                    highlightBorderWidth={width(0.2)}
                                />
                                <Wrapper isAbsolute style={{ left: width(30) }}>
                                    <Text style={{ fontFamily: appFonts.interMedium, fontSize: fontSizes.h6, color: colors.appTextColor18 }}>hours</Text>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                        <Spacer isMedium />
                        <Wrapper marginVerticalSmall>
                            <CheckBoxes.Primary text={'Select Multiple Days'} textStyle={{ fontFamily: appFonts.baloo2_Medium, fontSize: fontSizes.regular, color: colors.appTextColor3 }} checkIconsize={sizes.icons.small} uncheckedIconColor={colors.iconColor6} checkedIconColor={colors.iconColor6} onPress={toggleCheckbox} checked={isChecked} uncheckIconType={'fontisto'} checkIconType={'fontisto'} uncheckedIconName={'radio-btn-passive'} checkedIconName={'radio-btn-active'} />
                        </Wrapper>
                        <Wrapper marginVerticalMedium>
                            <Buttons.Colored
                                onPress={() => navigate(routes.preference)}
                                buttonStyle={{ marginHorizontal: 0 }}
                                text={'Next'}
                                iconContainer={{ left: width(34) }}
                                gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                textStyle={{
                                    color: colors.appTextColor5,
                                    fontFamily: appFonts.appTextBold,
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

