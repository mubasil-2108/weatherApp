import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, ActivityIndicator, ViewPropTypes, FlatList, Platform, ImageBackground } from 'react-native'
import { Icon } from '@rneui/base';
import { navigate } from "../../navigation/rootNavigation"
import { height, totalSize, width } from 'react-native-dimension';
import { colors, sizes, appStyles, useKeyboardStatus, appIcons, appFonts, fontSizes, responsiveHeight, routes, appImages } from '../../services';
import Modal from 'react-native-modal'
import Wrapper from '../wrapper';
import Text from '../text';
import Spacer from '../spacer';
import * as Icons from '../icons';
import * as Buttons from '../buttons';
import * as ScrollViews from '../scrollViews';
import * as TextInputs from '../textInput'
import { useHooks } from './hooks'
import { Calendar } from 'react-native-calendars';
import LinearGradient from 'react-native-linear-gradient';
import CommonNavigation from '../../navigation/common';
import { screensEnabled } from 'react-native-screens';
import { Images, Modals } from '..';
import { he, hr } from 'date-fns/locale';


// export const Swipable = ({ children, title, isVisible, toggleModal, footerFlex, headerFlex }) => {
//     return (
//         <Modal
//             isVisible={isVisible}
//             swipeDirection="down"
//             onSwipeComplete={toggleModal}
//             style={{ margin: 0 }}
//             // backdropOpacity={0}
//             onBackdropPress={toggleModal}
//         >
//             <Wrapper flex={1}>
//                 <Wrapper flex={headerFlex ? headerFlex : 1.5} />
//                 <Wrapper flex={footerFlex ? footerFlex : 8.5} style={[styles.swipableModalFooter]}>
//                     {children}
//                     <Wrapper style={[styles.barContainer]}>
//                         <Wrapper style={[appStyles.center]}>
//                             <TouchableOpacity onPress={toggleModal}>
//                                 <Lines.Horizontal
//                                     height={4}
//                                     width={width(15)}
//                                     style={{ borderRadius: 5 }}
//                                     color={colors.appBgColor3}
//                                 />
//                             </TouchableOpacity>
//                             <Spacer isBasic />
//                             <Text isTinyTitle>{title}</Text>
//                         </Wrapper>
//                     </Wrapper>
//                     <Wrapper isAbsolute style={[{ top: sizes.baseMargin * 1.5, left: sizes.marginHorizontal }]}>
//                         <Icon
//                             name="close"
//                         />
//                     </Wrapper>
//                 </Wrapper>
//             </Wrapper>
//         </Modal>
//     );
// }
export const Swipable = ({
    visible, toggle, onPress, disableSwipe, disableBackdropPress, topMargin, headerTitle, data, value, setValue, modalLogout,
    headerRight, headerLeft, hideHeader, children, backdropOpacity, backdropColor, containerStyle, hideContent, hideContent2, hideContent3, props }) => {

    const { modalHomeVisible, modalHomeVisibility, setModalHomeVisible, modalLogoutVisible, modalLogoutVisibility, setModalLogoutVisible } = useHooks()


    // manage keyboard
    const keyboardVisible = useKeyboardStatus()
    const defaultTopMargin = keyboardVisible ? height(12) : topMargin ? (Platform.OS === 'ios' ? topMargin : topMargin + height(5)) : height(12)
    return (
        // <Wrapper isMain background1 style={[{}]}>

        <Modal
            isVisible={visible} // Comment on video User
            style={{ margin: 0 }}
            onSwipeComplete={toggle}
            swipeDirection={disableSwipe ? null : "down"}
            propagateSwipe
            onBackdropPress={disableBackdropPress ? null : toggle}
            backdropOpacity={backdropOpacity ? backdropOpacity : 0}
            backdropColor={backdropColor && backdropColor}

        >
            <Wrapper flex={1} >

                {/* <LinearGradient style={{ flex: 1 }}
                colors={['#00000000', '#000000']}
            > */}
                {/* <TouchableOpacity onPress={disableBackdropPress ? null : toggle} activeOpacity={1} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }}>
                    <LinearGradient style={{ flex: 1 }}
                        colors={['#00000000', '#000000BF']}
                    />
                </TouchableOpacity> */}

                <Wrapper flex={1} justifyContentFlexend={!keyboardVisible} >
                    <TouchableOpacity onPress={disableBackdropPress ? null : toggle} activeOpacity={1} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }}>
                        <LinearGradient style={{ flex: 1 }}
                            colors={['#00000000', '#000000BF']}
                        />
                    </TouchableOpacity>
                    <Wrapper
                        paddingVerticalLarge
                        style={[{
                            //flex: 1,
                            marginTop: defaultTopMargin,
                            backgroundColor: colors.appColor1,
                            borderTopRightRadius: 25,
                            borderTopLeftRadius: 25,

                            //...appStyles.shadowExtraDark
                        }, containerStyle]}>
                        {
                            hideHeader ? null :
                                <Wrapper style={appStyles.rowCompContainer}>
                                    <Wrapper style={{ alignItems: 'center', right: 0, left: 0 }}>
                                        <Text isTinyTitle style={[appStyles.headerTitleStyle]}>
                                            {/* {data ? data.length + ' People' : 0 + ' People'} */}
                                            {headerTitle ? headerTitle : 'Title'}
                                        </Text>
                                    </Wrapper>
                                    <Wrapper>
                                        {
                                            headerLeft ? headerLeft :
                                                // <BackIcon
                                                //     onPress={toggle}
                                                //     color={colors.appTextColor6}
                                                // />
                                                <Icon
                                                    name="x"
                                                    type="feather"
                                                    size={totalSize(2.5)}
                                                    color={colors.appTextColor1}
                                                    onPress={toggle}
                                                />
                                        }
                                    </Wrapper>

                                    <Wrapper style={{}}>
                                        {headerRight}
                                    </Wrapper>
                                </Wrapper>
                        }
                        {children}
                        {!hideContent && (
                            <ScrollViews.KeyboardAvoiding>
                                <Wrapper marginHorizontalMedium>
                                    <Wrapper justifyContentCenter marginVerticalSmall alignItemsCenter>
                                        <Images.MainLogo size={sizes.images.xLSmall} source={appImages.success} style={{ resizeMode: 'contain' }} />
                                    </Wrapper>
                                    <Wrapper justifyContentCenter marginVerticalSmall alignItemsCenter >
                                        <Text style={{ fontFamily: appFonts.interBold, fontSize: fontSizes.h6, color: colors.appTextColor6 }}>{headerTitle}</Text>
                                    </Wrapper>
                                    <Wrapper  >
                                        <Text style={{ fontFamily: appFonts.interMedium, fontSize: fontSizes.small, textAlign: 'center', color: colors.appTextColor7 }}>{data}</Text>
                                    </Wrapper>
                                    <Wrapper marginVerticalMedium >
                                        <Buttons.Colored
                                            onPress={onPress}
                                            buttonStyle={{ marginHorizontal: 0 }}
                                            text={'Continue'}
                                            // iconContainer={{ left: width(34) }}
                                            gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                            textStyle={{
                                                color: colors.appTextColor5,
                                                fontFamily: appFonts.interSemiBold,
                                                fontSize: fontSizes.regular,
                                            }} />
                                    </Wrapper>
                                </Wrapper>
                            </ScrollViews.KeyboardAvoiding>
                        )}
                        {!hideContent2 && (
                            <Wrapper marginHorizontalMedium>
                                <Wrapper justifyContentCenter marginVerticalSmall alignItemsCenter>
                                    <Images.MainLogo size={sizes.images.xL2} source={appImages.oops} style={{ resizeMode: 'contain' }} />
                                </Wrapper>
                                <Wrapper justifyContentCenter marginVerticalSmall alignItemsCenter >
                                    <Text style={{textAlign: 'center', fontFamily: appFonts.interMedium, fontSize: fontSizes.regular, color: colors.appTextColor7 }}>We’re sorry, but we only accept locals who have{'\n'}lived in their city for over 2 years.{'\n'}Please come back in _ year!</Text>
                                </Wrapper>
                                <Wrapper marginVerticalSmall >
                                    <Buttons.Colored
                                        onPress={onPress}
                                        buttonStyle={{ marginHorizontal: 0 }}
                                        text={'Continue'}
                                        // iconContainer={{ left: width(34) }}
                                        gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                        textStyle={{
                                            color: colors.appTextColor5,
                                            fontFamily: appFonts.interSemiBold,
                                            fontSize: fontSizes.regular,
                                        }} />
                                </Wrapper>
                            </Wrapper>
                        )}
                        {/* {!hideContent3 && (
                            <>
                                <Wrapper isCenter paddingHorizontalLarge paddingVerticalSmall>
                                    <Images.MainLogo source={appImages.success}/>
                                </Wrapper>
                                <Wrapper isCenter marginVerticalMedium>
                                    <Wrapper marginVerticalSmall flexDirectionRow alignItemsCenter justifyContentCenter >
                                        <Buttons.Colored buttonColor={colors.buttonColor2} buttonStyle={{ height: height(8), width: width(40), marginHorizontal: width(1.5), }} text={'Cancel'} textStyle={{ color: colors.appTextColor1, fontFamily: appFonts.appTextBold, fontSize: fontSizes.small }} />
                                        <Buttons.Colored buttonColor={colors.buttonColor6} buttonStyle={{ height: height(8), width: width(40), marginHorizontal: width(1.5), }} text={'Logout'} textStyle={{ color: colors.appTextColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.small }} />
                                    </Wrapper>
                                </Wrapper>
                            </>
                        )} */}
                        {/* <Modals.Swipable visible={modalLogoutVisible} toggle={() => {modalLogoutVisibility(); modalHomeVisibility(false) }} hideContent2={true} hideContent={true} hideHeader  disableBackdropPress={false} /> */}

                        {/* <ImageBackground style={{}} ></ImageBackground> */}
                    </Wrapper>

                </Wrapper>
                {/* </LinearGradient> */}

            </Wrapper>
        </Modal >



    )
}

export const PopupPrimary = ({
    visible, toggle, title, info, iconName, iconType,
    customIcon, buttonText1, buttonText2, onPressButton1,
    onPressButton2, topMargin, children, scrollEnabled,
    backdropColor, backdropOpacity, onPressClose,
    button1Style, button2Style, keyboardShouldPersistTaps,
    headerTitle, topImage, headerRight, closeIconColor, disableSwipe, icon, disableBackdropPress,
    headerTitleStyle, preBottom, headerStyle, closeIconSize, rightContainerStyle, closeIconContainerSize,
    buttonWrapperShadow, headerBottom, titleStyle, buttonText1Style, buttonText2Style, headerSubtitleStyle, headerSubtitle,
    buttonsDirection, buttonsContainerStyle, mainContainerStyle, containerStyle,
    calender, payNow, language, selectedLanguages, handleLanguageSelection, setSelectedLanguages,
    //loaders 
    loadingButton1, loadingButton2,
    // New prop
}) => {

    const { selectedDate, pressed, setPressed, togglePressed, buttonData, handleDateChange, onDatePress, setSelectedDate } = useHooks();
    // manage keyboard
    const keyboardVisible = useKeyboardStatus()

    const defaultTopMargin = Platform.OS === 'ios' ? height(50) : height(40)
    const customTopMargin = keyboardVisible ? height(10) : topMargin ? Platform.OS === 'ios' ? topMargin : topMargin - height(10) : defaultTopMargin
    const isRowButtons = buttonsDirection === 'row' || buttonsDirection === 'row-reverse'

    const CustomHeader = ({ date, onPrevious, onNext }) => {
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        return (
            <Wrapper justifyContentCenter alignItemsCenter flexDirectionRow>
                <Text style={{ color: colors.appTextColor11, fontFamily: appFonts.appTextRegular, fontSize: fontSizes.regular }}>{`${month} ${year}`}</Text>
            </Wrapper>
        )
    };
    const CustomArrow = (direction) => {
        const icon = direction === 'left' ? appIcons.calendarLeft : appIcons.calendarRight;
        // const previous = subtractMonth => subtractMonth();
        // const month = direction === 'left' ? previous : null;
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
    const customDayNames = ['SAN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    return (
        <Swipable
            visible={visible}
            toggle={toggle}
            hideHeader
            topMargin={customTopMargin}
            backdropColor={backdropColor}
            backdropOpacity={backdropOpacity ? backdropOpacity : 0}
            disableSwipe={disableSwipe}
            disableBackdropPress={disableBackdropPress}
            containerStyle={mainContainerStyle}
            hideContent={true}
        >
            <Wrapper style={containerStyle}>
                {
                    headerTitle ?
                        <Wrapper style={{}}>
                            <Wrapper style={[{ paddingHorizontal: sizes.marginHorizontal, backgroundColor: 'transparent', paddingBottom: sizes.marginVertical, paddingTop: sizes.marginVertical * 1.5, justifyContent: 'center', }, headerStyle]}>
                                <Text isSmallTitle style={[appStyles.textCenter, headerTitleStyle]}>{headerTitle}</Text>
                                {
                                    headerSubtitle ?
                                        <Text isRegular style={[appStyles.textCenter, { marginTop: sizes.smallMargin }, headerSubtitleStyle]}>{headerSubtitle}</Text>
                                        :
                                        null
                                }
                                <Wrapper isAbsolute style={[{ right: sizes.marginHorizontal, top: sizes.marginVertical * 1.3 }, rightContainerStyle]}>
                                    {
                                        headerRight ? headerRight :
                                            onPressClose ?
                                                <Icons.Button
                                                    iconName="close"
                                                    iconColor={closeIconColor ? closeIconColor : colors.appTextColor1}
                                                    //buttonColor={colors.appBgColor3}
                                                    onPress={onPressClose}
                                                    iconSize={closeIconSize ? closeIconSize : totalSize(3)}
                                                    buttonSize={closeIconContainerSize ? closeIconContainerSize : totalSize(4)}
                                                    isRound
                                                //buttonColor={'red'}
                                                />
                                                :
                                                null
                                    }
                                </Wrapper>
                            </Wrapper>
                            {headerBottom && headerBottom}
                        </Wrapper>
                        :
                        <Spacer height={sizes.baseMargin * 1.5} />
                }


                <ScrollViews.WithKeyboardAvoidingView
                    containerStyle={{ flex: 0 }}
                    scrollEnabled={scrollEnabled}

                >
                    <Wrapper style={[appStyles.alignItemsCenter]}>
                        {

                            (icon || iconName || customIcon) ?

                                <>
                                    {icon ? icon :
                                        <Icons.Button
                                            iconName={iconName}
                                            iconType={iconType}
                                            customIcon={customIcon}
                                            iconColor={colors.appTextColor6}
                                            buttonColor={colors.appColor1}
                                            buttonSize={totalSize(10)}
                                            iconSize={totalSize(4)}
                                            buttonStyle={{ borderRadius: 100, }}
                                        />
                                    }
                                    <Spacer height={sizes.baseMargin * 1.5} />
                                </>
                                :
                                null
                        }
                    </Wrapper>
                    {
                        title ?
                            <>
                                <Wrapper marginHorizontalBase style={{ backgroundColor: 'transparent' }}>
                                    <Text isSmallTitle isBoldFont style={[appStyles.textCenter, titleStyle]}>{title}</Text>
                                </Wrapper>
                                <Spacer height={sizes.baseMargin} />
                            </>
                            :
                            null
                    }
                    {
                        info ?
                            <>
                                <Wrapper marginHorizontalLarge style={{ backgroundColor: 'transparent', }}>
                                    <Text isRegular style={[appStyles.textCenter]}>{info}</Text>
                                </Wrapper>
                                <Spacer isBasic />
                            </>
                            :
                            null
                    }
                    {
                        calender ?
                            <>
                                <Wrapper paddingHorizontalTiny paddingVerticalTiny isBorderedWrapper justifyContentCenter>
                                    <Calendar
                                        dayComponent={({ date, state }) => (
                                            <CustomDay date={date} state={state} customDayNames={customDayNames} />
                                        )}
                                        style={{ flex: 1, width: '100%' }}
                                        hideExtraDays={true}
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
                                            textDayHeaderFontFamily: appFonts.appTextRegular,
                                        }}
                                    />
                                </Wrapper>
                                <Spacer isBasic />
                                <Wrapper marginHorizontalBase >
                                    <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Time Slots</Text>
                                    <Spacer isSmall />
                                    <Wrapper alignItemsCenter flexDirectionRow style={{ flexWrap: 'wrap' }}>
                                        {buttonData.map((text, index) => (
                                            <TouchableOpacity key={index} style={{ marginRight: width(0.3) }} onPress={() => togglePressed(index)}>
                                                <LinearGradient
                                                    // colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                                    colors={pressed[index] ? [colors.transparent, colors.transparent] : [colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                                    start={{ x: 0, y: 0 }}
                                                    end={{ x: 1, y: 0 }}
                                                    style={{
                                                        borderRadius: 28,
                                                        padding: 1,
                                                        marginBottom: height(1),

                                                    }}
                                                >
                                                    <Wrapper
                                                        isGradient
                                                        start={{ x: 0, y: 0 }}
                                                        end={{ x: 1, y: 0 }}
                                                        style={{ justifyContent: 'center', borderRadius: 50, paddingVertical: sizes.TinyMargin, paddingHorizontal: sizes.marginHorizontal2 }}
                                                        gradiantColors={pressed[index] ? [colors.buttonColor1, colors.buttonColor1, colors.buttonColor2] : [colors.appColor1, colors.appColor1]}>
                                                        <Text style={{ fontFamily: appFonts.appTextLight, fontSize: fontSizes.small, color: pressed[index] ? colors.appTextColor5 : colors.appTextColor3 }}>{text}</Text>
                                                    </Wrapper>
                                                </LinearGradient>
                                            </TouchableOpacity>
                                        ))}
                                    </Wrapper>
                                </Wrapper>

                            </>
                            :
                            null
                    }
                    {
                        payNow ?
                            <Wrapper marginHorizontalBase >
                                <Wrapper alignItemsCenter>
                                    <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.regular, color: colors.appTextColor7 }}>Booking confirmed successfully</Text>
                                </Wrapper>
                                <Spacer isMedium />
                                <Spacer isSmall />

                                <Wrapper flexDirectionRow alignItemsCenter>
                                    <Images.SqareRound style={{ borderRadius: 10, height: sizes.images.logoHeight, width: sizes.images.logoWidth }} source={appImages.profile1} />
                                    <Spacer horizontal isSmall />
                                    <Wrapper>
                                        <Wrapper justifyContentSpaceEvenly flex={1}>
                                            <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium, color: colors.appTextColor1 }}>John Doe</Text>
                                            {/* <Spacer isTiny/> */}
                                            <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor2, fontSize: fontSizes.regular }}>$165,3{' '}
                                                <Text style={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor7, fontSize: fontSizes.regular }}>/night</Text></Text>
                                        </Wrapper>
                                        {/* <Spacer isTiny/> */}
                                        <Wrapper flex={1} alignItemsCenter flexDirectionRow >
                                            <Icons.Custom icon={appIcons.calendar} color={colors.iconColor6} size={sizes.icons.small} />
                                            <Spacer horizontal isSmall />
                                            <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>Feb 17-20 | 4 Days | 4 hours</Text>
                                        </Wrapper>
                                    </Wrapper>
                                </Wrapper>
                                <Spacer />
                                <Wrapper alignItemsCenter>
                                    <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Share Your Travel Plan</Text>
                                    <Spacer isSmall />
                                    <Text style={{ textAlign: 'center', fontFamily: appFonts.appTextRegular, fontSize: fontSizes.regular, color: colors.appTextColor16 }}>Share your itinerary with anyone who might want to know your plan.</Text>
                                </Wrapper>
                                <Spacer isSmall />
                                <TextInputs.Colored
                                    title={'Email'}
                                    //   value={email}
                                    //   onChangeText={(text) => setEmail(text)}
                                    keyboardType={'email-address'}
                                    containerStyle={{ marginHorizontal: 0 }}
                                    inputContainerStyle={{
                                        backgroundColor: colors.inputfieldColor1,
                                        borderColor: colors.inputTextBorder,
                                        borderRadius: totalSize(2)
                                    }}
                                    customIconLeft={appIcons.mail}
                                    inputStyle={{
                                        fontSize: fontSizes.medium,
                                        fontFamily: appFonts.appTextRegular,
                                        color: colors.appTextColor1
                                    }}
                                    iconColorLeft={colors.iconColor1}
                                    // iconStyleLeft={{  }}
                                    placeholder={'example@email.com'}
                                    placeholderTextColor={colors.placeHolderColor}
                                    titleStyle={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.appTextBold,

                                        color: colors.appTextColor3
                                    }} />
                                <Spacer />
                                <Wrapper flexDirectionRow paddingVerticalTiny alignItemsCenter justifyContentSpaceBetween>
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

                                            onPressIn={() => { setPressed(true); }}
                                            onPressOut={() => setPressed(false)}
                                            gradientColors={[colors.buttonColor3, colors.buttonColor3]}
                                            textStyle={{ textAlign: 'center', fontFamily: appFonts.appTextRegular, color: colors.appTextColor2, fontSize: fontSizes.medium }}
                                            buttonStyle={{ width: width(42), paddingHorizontal: width(3), paddingVertical: height(1.45), justifyContent: 'center', alignItems: 'center' }}
                                            text={'Skip'} />
                                    </LinearGradient>
                                    <Buttons.ColoredSmall
                                        // onPress={() => navigate(routes.booking)}
                                        gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                        textStyle={{ textAlign: 'justify', fontFamily: appFonts.appTextMedium, color: colors.appTextColor5, fontSize: fontSizes.medium }}
                                        buttonStyle={{ width: width(42), paddingHorizontal: width(3), paddingVertical: height(1.6), justifyContent: 'center', alignItems: 'center' }}
                                        text={'Book Now'} />
                                </Wrapper>
                            </Wrapper>
                            :
                            null
                    }
                    {
                        language ?
                            <Wrapper marginHorizontalBase>
                                <Spacer isSmall />
                                <Wrapper marginHorizontalBase alignItemsCenter flexDirectionRow>
                                    <Icons.Button onPress={() => handleLanguageSelection(1)} iconName={selectedLanguages.includes(1) ? 'radio-btn-active' : 'radio-btn-passive'} isRound buttonColor={colors.transparent} iconColor={colors.iconColor6} buttonSize={sizes.icons.medium} iconSize={sizes.icons.small} iconType={'fontisto'} />
                                    <Spacer horizontal isTiny />
                                    <Icons.Button isRound disabled buttonSize={sizes.icons.largeTiny} buttonColor={colors.buttonColor5} iconSize={sizes.icons.medium} customIcon={appIcons.english} />
                                    <Spacer horizontal isSmall />
                                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular, color: colors.appTextColor3 }}>English (US)</Text>
                                </Wrapper>
                                <Spacer isMedium />
                                <Wrapper marginHorizontalBase alignItemsCenter flexDirectionRow>
                                    <Icons.Button onPress={() => handleLanguageSelection(2)} iconName={selectedLanguages.includes(2) ? 'radio-btn-active' : 'radio-btn-passive'} isRound buttonColor={colors.transparent} iconColor={colors.iconColor6} buttonSize={sizes.icons.medium} iconSize={sizes.icons.small} iconType={'fontisto'} />
                                    <Spacer horizontal isTiny />
                                    <Icons.Button isRound disabled buttonSize={sizes.icons.largeTiny} buttonColor={colors.buttonColor5} iconSize={sizes.icons.medium} customIcon={appIcons.indonesia} />
                                    <Spacer horizontal isSmall />
                                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular, color: colors.appTextColor3 }}>Indonesia</Text>
                                </Wrapper>
                                <Spacer isMedium />
                                <Wrapper marginHorizontalBase alignItemsCenter flexDirectionRow>
                                    <Icons.Button onPress={() => handleLanguageSelection(3)} iconName={selectedLanguages.includes(3) ? 'radio-btn-active' : 'radio-btn-passive'} isRound buttonColor={colors.transparent} iconColor={colors.iconColor6} buttonSize={sizes.icons.medium} iconSize={sizes.icons.small} iconType={'fontisto'} />
                                    <Spacer horizontal isTiny />
                                    <Icons.Button isRound disabled buttonSize={sizes.icons.largeTiny} buttonColor={colors.buttonColor5} iconSize={sizes.icons.medium} customIcon={appIcons.thailand} />
                                    <Spacer horizontal isSmall />
                                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular, color: colors.appTextColor3 }}>Thailand</Text>
                                </Wrapper>
                                <Spacer isMedium />
                                <Wrapper marginHorizontalBase alignItemsCenter flexDirectionRow>
                                    <Icons.Button onPress={() => handleLanguageSelection(4)} iconName={selectedLanguages.includes(4) ? 'radio-btn-active' : 'radio-btn-passive'} isRound buttonColor={colors.transparent} iconColor={colors.iconColor6} buttonSize={sizes.icons.medium} iconSize={sizes.icons.small} iconType={'fontisto'} />
                                    <Spacer horizontal isTiny />
                                    <Icons.Button isRound disabled buttonSize={sizes.icons.largeTiny} buttonColor={colors.buttonColor5} iconSize={sizes.icons.medium} customIcon={appIcons.china} />
                                    <Spacer horizontal isSmall />
                                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.regular, color: colors.appTextColor3 }}>Chinese  </Text>
                                </Wrapper>
                                <Spacer isMedium />
                                <Wrapper>
                                    <Buttons.Colored
                                        onPress={toggle}
                                        buttonStyle={{ marginHorizontal: 0 }}
                                        text={'Select'}
                                        iconContainer={{ left: width(34) }}
                                        gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                        textStyle={{
                                            color: colors.appTextColor5,
                                            fontFamily: appFonts.appTextMedium,
                                            fontSize: fontSizes.regular,
                                        }} />

                                </Wrapper>
                            </Wrapper>
                            :
                            null
                    }
                    {children}
                </ScrollViews.WithKeyboardAvoidingView>
                {preBottom}
                {/* </KeyboardAvoidingView> */}
                {/* <Spacers.Spacer height={sizes.baseMargin} /> */}

                {
                    onPressButton1 || onPressButton2 ?
                        <Wrapper
                            marginHorizontalBase
                            style={[{
                                backgroundColor: colors.appBgColor1,
                                paddingBottom: sizes.baseMargin * 1.5,
                                paddingTop: sizes.baseMargin,
                                flexDirection: buttonsDirection || 'column-reverse',
                            },
                            buttonWrapperShadow && appStyles.shadowDark,
                                buttonsContainerStyle
                            ]}>
                            {
                                onPressButton2 ?
                                    <Wrapper style={[isRowButtons && { flex: 1 }]}>
                                        <Buttons.Bordered
                                            text={buttonText2}
                                            onPress={onPressButton2}
                                            tintColor={colors.appColor1}
                                            //tintColor={colors.appTextColor1}
                                            buttonStyle={[appStyles.marginHorizontalZero, button2Style]}
                                            textStyle={[buttonText2Style]}
                                            isLoading={loadingButton2}

                                        />
                                    </Wrapper>
                                    :
                                    null
                            }
                            {
                                (onPressButton2 && onPressButton1) ?
                                    isRowButtons ?
                                        <Spacer width={sizes.marginHorizontal} />
                                        :
                                        <Spacer height={sizes.marginVertical} />
                                    : null
                            }

                            {
                                onPressButton1 ?
                                    <Wrapper style={[isRowButtons && { flex: 1 }]}>
                                        <Buttons.Colored
                                            text={buttonText1}
                                            onPress={onPressButton1}
                                            shadow
                                            buttonStyle={[{ marginHorizontal: 0, }, button1Style]}
                                            textStyle={[buttonText1Style]}
                                            isLoading={loadingButton1}
                                        />
                                    </Wrapper>
                                    :
                                    null
                            }
                        </Wrapper>
                        :
                        null
                }
                {/* <Spacers.Spacer height={sizes.baseMargin} /> */}

            </Wrapper>
        </Swipable>
    )
}

export const ImagePickerPopup = ({ visible, toggle, onPressButton1, onPressButton2, title, button1Text, button2Text, cancelText }) => {
    return (
        <PopupPrimary
            visible={visible}
            title={title || "Choose Image"}
            // buttonText2="Cancel"
            // onPressButton2={toggle}
            toggle={toggle}
            topMargin={height(60)}
        >
            <Wrapper>
                <Wrapper marginHorizontalBase>
                    {
                        onPressButton1 ?
                            <>
                                <Buttons.Colored
                                    text={button1Text || "Take Photo"}
                                    //  iconName="camera"
                                    buttonStyle={{ backgroundColor: colors.appBgColor2 }}
                                    textStyle={[{ color: colors.appTextColor3 }]}
                                    onPress={() => {
                                        toggle();
                                        setTimeout(() => {
                                            onPressButton1()
                                        }, 500);
                                    }}
                                    disableShadow
                                />
                                <Spacer isBasic />
                            </>
                            :
                            null
                    }

                    <Buttons.Colored
                        text={button2Text || "Select from Gallery"}
                        //iconName="image"
                        buttonStyle={{ backgroundColor: colors.appBgColor2 }}
                        textStyle={[{ color: colors.appTextColor3 }]}
                        onPress={() => {
                            toggle();
                            setTimeout(() => {
                                onPressButton2()
                            }, 500);
                        }}
                        disableShadow
                    />
                    <Spacer isBasic />
                    <Buttons.Colored
                        text={cancelText || "Cancel"}
                        //iconName="image"
                        buttonStyle={{ backgroundColor: colors.transparent }}
                        textStyle={[{ color: colors.appTextColor1 }]}
                        onPress={() => {
                            toggle();
                        }}
                        disableShadow
                    />
                </Wrapper>
            </Wrapper>
        </PopupPrimary>
    );
}

// export const ImageModal = ({
//     visible, toggle, disableSwipe, disableBackdropPress, topMargin, headerTitle, data, value, setValue, modalLogout,
//     headerRight, headerLeft, hideHeader, children, backdropOpacity, backdropColor, containerStyle, hideContent, hideContent2, hideContent3, props }) => {

//     const { modalHomeVisible, modalHomeVisibility, setModalHomeVisible, modalLogoutVisible, modalLogoutVisibility, setModalLogoutVisible } = useHooks()


//     // manage keyboard
//     const keyboardVisible = useKeyboardStatus()
//     // const { navigate } = props.navigation
//     // const [modalLogoutVisible, setModalLogoutVisible] = useState(false);
//     // const modalLogoutVisibility = () => {
//     //     setModalLogoutVisible(true);
//     // };
//     // const handleLogout = () => {
//     //     toggle(); // Close the Swipable modal
//     //     setModalLogoutVisible(!modalLogoutVisible); // Open the PopupPrimary modal
//     // };
//     const defaultTopMargin = keyboardVisible ? height(12) : topMargin ? (Platform.OS === 'ios' ? topMargin : topMargin + height(5)) : height(12)
//     return (
//         // <Wrapper isMain background1 style={[{}]}>

//         <Modal
//             isVisible={visible} // Comment on video User
//             style={{ margin: 0 }}
//             onSwipeComplete={toggle}
//             swipeDirection={disableSwipe ? null : "down"}
//             propagateSwipe
//             onBackdropPress={disableBackdropPress ? null : toggle}
//             backdropOpacity={backdropOpacity ? backdropOpacity : 0}
//             backdropColor={backdropColor && backdropColor}

//         >
//             <Wrapper flex={1} >

//                 {/* <LinearGradient style={{ flex: 1 }}
//                 colors={['#00000000', '#000000']}
//             > */}
//                 {/* <TouchableOpacity onPress={disableBackdropPress ? null : toggle} activeOpacity={1} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }}>
//                     <LinearGradient style={{ flex: 1 }}
//                         colors={['#00000000', '#000000BF']}
//                     />
//                 </TouchableOpacity> */}

//                 <Wrapper 
//                 flex={1} justifyContentFlexend={!keyboardVisible} 
//                 >
//                     <TouchableOpacity onPress={disableBackdropPress ? null : toggle} activeOpacity={1} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }}>
//                         <LinearGradient 
//                         style={{ flex: 1 }}
//                             colors={['#00000000', '#000000BF']}
//                         />
//                     </TouchableOpacity>
//                     <Wrapper
//                         paddingVerticalLarge
//                         style={[{
//                             //flex: 1,
//                             marginTop: defaultTopMargin,
//                             backgroundColor: colors.appBgColor1,
//                             borderTopRightRadius: 25,
//                             borderTopLeftRadius: 25,

//                             //...appStyles.shadowExtraDark
//                         }, containerStyle]}>
//                         {
//                             hideHeader ? null :
//                                 <Wrapper style={appStyles.rowCompContainer}>
//                                     <Wrapper style={{ alignItems: 'center', right: 0, left: 0 }}>
//                                         <Text isTinyTitle style={[appStyles.headerTitleStyle]}>
//                                             {/* {data ? data.length + ' People' : 0 + ' People'} */}
//                                             {headerTitle ? headerTitle : 'Title'}
//                                         </Text>
//                                     </Wrapper>
//                                     <Wrapper>
//                                         {
//                                             headerLeft ? headerLeft :
//                                                 // <BackIcon
//                                                 //     onPress={toggle}
//                                                 //     color={colors.appTextColor6}
//                                                 // />
//                                                 <Icon
//                                                     name="x"
//                                                     type="feather"
//                                                     size={totalSize(2.5)}
//                                                     color={colors.appTextColor1}
//                                                     onPress={toggle}
//                                                 />
//                                         }
//                                     </Wrapper>

//                                     <Wrapper style={{}}>
//                                         {headerRight}
//                                     </Wrapper>
//                                 </Wrapper>
//                         }
//                         {children}
//                         {!hideContent && (
//                             <ScrollViews.KeyboardAvoiding>
//                                 {/* <Wrapper> */}
//                                 <Wrapper isCenter paddingHorizontalLarge>
//                                     <Text isTinyTitle style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1 }}>Reset Password</Text>
//                                     <Text isSmall style={{ textAlign: 'center', marginTop: height(5), fontFamily: appFonts.appTextRegular, color: colors.appTextColor1 }}>Enter you registered email address to receive a{'\n'}password reset link.</Text>
//                                 </Wrapper>
//                                 <Wrapper paddingHorizontalSmall style={{ marginTop: height(5) }} >
//                                     <TextInputs.Colored title={'Email Address'} keyboardType={'email-address'} inputContainerStyle={{ borderColor: colors.inputTextBorder, borderRadius: width(10) }} customIconLeft={appIcons.mail} iconSizeLeft={sizes.icons.mediumTiny} inputStyle={{ fontSize: fontSizes.regular, fontFamily: appFonts.appTextRegular, color: colors.appTextColor1 }}
//                                         iconColorLeft={colors.iconColor} iconStyleLeft={{ marginLeft: width(0.7) }} placeholder={'example@email.com'} placeholderTextColor={colors.placeHolderColor} titleStyle={{ fontSize: fontSizes.tiny, fontFamily: appFonts.appTextRegular, marginLeft: width(4), color: colors.appTextColor1 }} />
//                                 </Wrapper>
//                                 <Wrapper paddingVerticalLarge style={{ marginHorizontal: width(15) }} >
//                                     <Buttons.Colored buttonColor={colors.buttonColor1} buttonStyle={{ height: height(8) }} text={'Send Link'} textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular }} />
//                                 </Wrapper>
//                                 {/* </Wrapper> */}
//                             </ScrollViews.KeyboardAvoiding>
//                         )}
//                         {!hideContent2 && (
//                             <>
//                                 <Wrapper isCenter paddingHorizontalLarge paddingVerticalSmall>
//                                     <Text isTinyTitle style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1 }}>Profile Options</Text>
//                                 </Wrapper>
//                                 <Wrapper marginVerticalMedium  >
//                                     <Wrapper style={{ marginBottom: height(0.5) }} >
//                                         <Buttons.Custom buttonColor={colors.buttonColor4} buttonStyle={{ height: height(8), justifyContent: 'space-around', borderColor: colors.buttonBorder2, borderWidth: width(0.2) }}
//                                             text={'Edit Profile'} customIconLeft={appIcons.edit} hideContent4={true} flex={7}
//                                             customIconRight={appIcons.chevron_right} tintColor={colors.iconColor4}
//                                             onPress={() => { navigate(routes.editProfile) }}
//                                             textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.small, }}
//                                             iconStyle={{ alignSelf: 'center', }} />
//                                     </Wrapper>
//                                     <Wrapper style={{ marginBottom: height(0.5) }}>
//                                         <Buttons.Custom data={data} buttonColor={colors.buttonColor4} buttonStyle={{ height: height(8), justifyContent: 'space-around', borderColor: colors.buttonBorder2, borderWidth: width(0.2) }}
//                                             text={'Font Size'} customIconLeft={appIcons.format_size} hideContent3={true}
//                                             customIconRight={appIcons.chevron_right} tintColor={colors.iconColor4} flex={5} setValue={setValue} value={value}
//                                             textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, }}
//                                             iconStyle={{ alignSelf: 'center', }} disabled={true} />
//                                     </Wrapper>
//                                     <Wrapper style={{ marginBottom: height(0.5) }}>
//                                         <Buttons.Custom buttonColor={colors.buttonColor4} buttonStyle={{ height: height(8), justifyContent: 'space-around', borderColor: colors.buttonBorder2, borderWidth: width(0.2) }}
//                                             text={'How to Use'} customIconLeft={appIcons.info} hideContent4={true} flex={6}
//                                             customIconRight={appIcons.chevron_right} tintColor={colors.iconColor4}
//                                             onPress={() => { navigate(routes.common, { screen: routes.howToUse }) }}
//                                             textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, }}
//                                             iconStyle={{ alignSelf: 'center', }} />
//                                     </Wrapper>
//                                     <Wrapper style={{ marginBottom: height(0.5) }}>
//                                         <Buttons.Custom buttonColor={colors.buttonColor4} buttonStyle={{ height: height(8), justifyContent: 'space-around', borderColor: colors.buttonBorder2, borderWidth: width(0.2) }}
//                                             text={'Terms & Conditions'} customIconLeft={appIcons.file_text} hideContent4={true}
//                                             onPress={() => { navigate(routes.common) }}
//                                             customIconRight={appIcons.chevron_right} tintColor={colors.iconColor4} flex={6}
//                                             textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, }}
//                                             iconStyle={{ alignSelf: 'center', }} />
//                                     </Wrapper>
//                                     <Wrapper style={{ marginBottom: height(0.5) }}>
//                                         <Buttons.Custom buttonColor={colors.buttonColor4} buttonStyle={{ height: height(8), justifyContent: 'space-around', borderColor: colors.buttonBorder2, borderWidth: width(0.2) }}
//                                             text={'Logout'} customIconLeft={appIcons.log_out} hideContent4={true}
//                                             customIconRight={appIcons.chevron_right} tintColor={colors.warning} flex={6}
//                                             textStyle={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, }}
//                                             onPress={modalLogout}
//                                             iconStyle={{ alignSelf: 'center', }} />
//                                     </Wrapper>
//                                 </Wrapper>
//                             </>
//                         )}
//                         {!hideContent3 && (
//                             <>
//                                 <Wrapper isCenter paddingHorizontalLarge paddingVerticalSmall>
//                                     <Text isTinyTitle style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1 }}>Logout?</Text>
//                                 </Wrapper>
//                                 <Wrapper isCenter marginVerticalMedium>
//                                     <Wrapper marginVerticalSmall flexDirectionRow alignItemsCenter justifyContentCenter >
//                                         <Buttons.Colored buttonColor={colors.buttonColor2} buttonStyle={{ height: height(8), width: width(40), marginHorizontal: width(1.5), }} text={'Cancel'}  textStyle={{ color: colors.appTextColor1, fontFamily: appFonts.appTextBold, fontSize: fontSizes.small }} />
//                                         <Buttons.Colored buttonColor={colors.buttonColor6} buttonStyle={{ height: height(8), width: width(40), marginHorizontal: width(1.5), }} text={'Logout'} textStyle={{ color: colors.appTextColor6, fontFamily: appFonts.appTextBold, fontSize: fontSizes.small }} />
//                                     </Wrapper>
//                                 </Wrapper>
//                             </>
//                         )}
//                         {/* <Modals.Swipable visible={modalLogoutVisible} toggle={() => {modalLogoutVisibility(); modalHomeVisibility(false) }} hideContent2={true} hideContent={true} hideHeader  disableBackdropPress={false} /> */}

//                         {/* <ImageBackground style={{}} ></ImageBackground> */}
//                     </Wrapper>

//                 </Wrapper>
//                 {/* </LinearGradient> */}

//             </Wrapper>
//         </Modal >



//     )
// }

export const ImageModal = ({
    visible, toggle, disableSwipe, disableBackdropPress, topMargin, headerTitle, onPress, colorsOpacity,
    headerRight, headerLeft, hideHeader, children, backdropOpacity, backdropColor, containerStyle, hideContent, props
}) => {

    // const { modalHomeVisible, modalHomeVisibility, setModalHomeVisible, modalLogoutVisible, modalLogoutVisibility, setModalLogoutVisible } = useHooks();
    const keyboardVisible = useKeyboardStatus();

    const defaultTopMargin = keyboardVisible ? height(12) : topMargin ? (Platform.OS === 'ios' ? topMargin : topMargin + height(5)) : height(12);

    return (
        <Modal
            isVisible={visible}
            style={{ margin: 0 }}
            onSwipeComplete={toggle}
            swipeDirection={disableSwipe ? null : "down"}
            propagateSwipe
            onBackdropPress={disableBackdropPress ? null : toggle}
            backdropOpacity={backdropOpacity ? backdropOpacity : 0}
            backdropColor={backdropColor && backdropColor}
        >
            <Wrapper flex={1} alignItemsCenter isCenter justifyContentFlexend={!keyboardVisible}>
                <TouchableOpacity onPress={disableBackdropPress ? null : toggle} activeOpacity={1} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                    <LinearGradient
                        style={{ flex: 1 }}
                        // colors={['#00000000', '#000000BF']}
                        colors={colorsOpacity}
                    />
                </TouchableOpacity>
                <Wrapper
                    paddingVerticalLarge
                    style={[{
                        //flex: 1,
                        // marginTop: defaultTopMargin,
                        backgroundColor: colors.appBgColor1,
                        borderRadius: width(7),
                        width: width(80)
                        //...appStyles.shadowExtraDark
                    }, containerStyle]}
                >
                    {
                        hideHeader ? null :
                            <Wrapper style={appStyles.rowCompContainer}>
                                <Wrapper style={{ alignItems: 'center', right: 0, left: 0 }}>
                                    <Text isTinyTitle style={[appStyles.headerTitleStyle]}>
                                        {headerTitle ? headerTitle : 'Title'}
                                    </Text>
                                </Wrapper>
                                <Wrapper>
                                    {
                                        headerLeft ? headerLeft :
                                            <Icon
                                                name="x"
                                                type="feather"
                                                size={totalSize(2.5)}
                                                color={colors.appTextColor1}
                                                onPress={toggle}
                                            />
                                    }
                                </Wrapper>
                                <Wrapper>
                                    {headerRight}
                                </Wrapper>
                            </Wrapper>
                    }
                    {children}
                    {!hideContent && (
                        <Wrapper marginVerticalSmall marginHorizontalSmall>
                            <Wrapper isCenter paddingHorizontalLarge>
                                <Images.MainLogo source={appImages.confirm} size={sizes.images.xLSmall} style={{ resizeMode: 'contain' }} />
                            </Wrapper>
                            <Wrapper
                                isCenter
                                paddingHorizontalBase
                                justifyContentCenter
                                marginVerticalBase>
                                <Text
                                    isMediumTitle
                                    style={{
                                        fontFamily: appFonts.appTextBold,
                                        color: colors.appTextColor1,
                                        fontSize: fontSizes.h5,
                                        textAlign: 'center'
                                    }}>
                                    Password Changed!
                                </Text>
                                <Text isMedium
                                    style={{
                                        fontFamily: appFonts.appTextRegular,
                                        color: colors.appTextColor5,
                                        fontSize: fontSizes.regular,
                                        textAlign: 'center',
                                        marginTop: height(1)
                                    }}>
                                    A password reset link has been sent to{'\n'}your email successfully.
                                </Text>
                            </Wrapper>
                            <Wrapper style={{ marginTop: height(2) }} >
                                <Buttons.Colored
                                    gradientColors={[colors.buttonColor1, colors.buttonColor2]}

                                    onPress={onPress}
                                    buttonStyle={{
                                        height: height(6),
                                        borderRadius: width(2),
                                        shadowColor: '#000000',
                                        shadowOffset: { width: 4, height: 4 },
                                        shadowOpacity: 0.1,
                                        shadowRadius: 20,
                                        elevation: 5,
                                    }}
                                    text={'Back to Login'}
                                    textStyle={{
                                        fontFamily: appFonts.appTextBold,
                                        fontSize: fontSizes.regular
                                    }} />
                            </Wrapper>
                        </Wrapper>
                    )}

                </Wrapper>
            </Wrapper>
        </Modal>
    );
};

const styles = StyleSheet.create({
    selectedDay: {
        backgroundColor: 'red',
        borderRadius: 20,
    },
    todayDay: {
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 20,
    },
    dayText: {
        color: 'black',
    },
    selectedDayText: {
        color: 'white',
    },
})

