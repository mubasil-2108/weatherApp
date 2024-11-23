import React, { useState, useCallback, useEffect } from 'react';
import { Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Wrapper, Icons, Headers, Modals, Text, ScrollViews, StatusBars, CategoryList, TextInputs, ProductList, Spacer, LocationLists, Images, Buttons, LocalsList } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons, responsiveWidth, responsiveHeight, appStyles } from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // For unique IDs
import storage from '@react-native-firebase/storage';
import { DrawerActions } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home(props) {

    const { navigate, goBack, dispatch } = props.navigation
    const [showCountdown, setShowCountdown] = useState(true);
    const [timeRemaining, setTimeRemaining] = useState({
        days: 5,
        hours: 0,
        minutes: 0,
        seconds: 10,
    });
    const { days, hours, minutes, seconds } = timeRemaining;

    // Countdown timer logic
    useEffect(() => {
        let timer;

        const updateCountdown = () => {
            setTimeRemaining(prevTime => {
                const { days, hours, minutes, seconds } = prevTime;

                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(timer);
                    return prevTime;
                }

                let newDays = days, newHours = hours, newMinutes = minutes, newSeconds = seconds;

                if (seconds > 0) {
                    newSeconds--;
                } else if (minutes > 0) {
                    newSeconds = 59;
                    newMinutes--;
                } else if (hours > 0) {
                    newMinutes = 59;
                    newSeconds = 59;
                    newHours--;
                } else if (days > 0) {
                    newHours = 23;
                    newMinutes = 59;
                    newSeconds = 59;
                    newDays--;
                }

                return { days: newDays, hours: newHours, minutes: newMinutes, seconds: newSeconds };
            });
        };

        timer = setInterval(updateCountdown, 1000);

        // Cleanup timer when component unmounts
        return () => clearInterval(timer);
    }, []);


    const {
        clickedItems,
        handlePressItem,
        data,
        search,
        setSearch,
        tabs,
        setTabs,
        handleTabPress,
        selectedTab,
        setName,
        name,
        handleProductPressItem,
        dummyProductData,
        categories,
        isDrawerOpen,
        imageData,
        statusBarVisible,
        DrawerActions,
        historyData,
        requestData,
        clickedProductItems
    } = useHooks() || {};

    const renderRequest = ({ item }) => {
        return (
            <>
                <TouchableOpacity key={item.id}  onPress={()=> navigate(routes.travelerProfile)}>
                    <Wrapper marginHorizontalBase>
                        <Wrapper isBorderedWrapper marginHorizontalZero paddingHorizontalSmall>
                            <Wrapper justifyContentSpaceBetween flexDirectionRow>
                                <Wrapper >
                                    <Images.SqareRound style={{ borderRadius: 10, height: sizes.images.logoHeight, width: sizes.images.logoHeight }} source={item.profileImage} />
                                </Wrapper>
                                <Spacer isSmall horizontal />
                                <Wrapper flex={1}>
                                    <Wrapper flex={1} justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                                        <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1, fontSize: fontSizes.mediumSmall }}>{item.name}</Text>
                                        <Wrapper marginHorizontalZero paddingHorizontalSmall paddingVerticalTiny isBorderedWrapper backgroundColor={colors.appColor13} style={{ borderColor: colors.appColor14 }}>
                                            <Text style={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor1, fontSize: fontSizes.small }}>{item.status}</Text>
                                        </Wrapper>
                                    </Wrapper>
                                    <Wrapper flex={1} alignItemsCenter flexDirectionRow>
                                        <Icons.Custom icon={appIcons.star} size={sizes.icons.small} />
                                        <Spacer width={width(1)} />
                                        <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor6, fontSize: fontSizes.regular }}>{item.rating}</Text>
                                    </Wrapper>
                                    <Wrapper flex={1} justifyContentCenter >
                                        <Text style={{ fontFamily: appFonts.baloo2_ExtraBold, color: colors.appTextColor2, fontSize: fontSizes.regular }}>${item.price}{' '}
                                            <Text style={{ fontFamily: appFonts.baloo2_Medium, color: colors.appTextColor7, fontSize: fontSizes.regular }}>/hour</Text></Text>
                                    </Wrapper>

                                    <Wrapper justifyContentFlexend>
                                        <Wrapper flexDirectionRow style={{ flexWrap: 'wrap' }}>
                                            <Text style={{ fontFamily: appFonts.appTextRegular, textAlign: 'justify', color: colors.appTextColor3, fontSize: 14 }}>{item.description}</Text>
                                        </Wrapper>
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                            <Spacer isSmall />
                            <Wrapper style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
                            <Spacer isSmall />
                            <Wrapper style={{ marginRight: width(20) }}>
                                <Wrapper justifyContentSpaceBetween flexDirectionRow>
                                    <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                                        <Icons.Custom icon={appIcons.location_2} color={colors.iconColor6} size={sizes.icons.small} />
                                        <Spacer horizontal isSmall />
                                        <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>{item.location}</Text>
                                    </Wrapper>
                                    <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                                        <Icons.Custom icon={appIcons.adults} color={colors.iconColor6} size={sizes.icons.small} />
                                        <Spacer horizontal isSmall />
                                        <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>{item.guests}</Text>
                                    </Wrapper>
                                </Wrapper>
                                <Spacer isTiny />
                                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                                    <Icons.Custom icon={appIcons.calendar} color={colors.iconColor6} size={sizes.icons.small} />
                                    <Spacer horizontal isSmall />
                                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>{item.stayInfo}</Text>
                                </Wrapper>
                            </Wrapper>
                            <Spacer isSmall />
                            <Wrapper style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
                            <Spacer isSmall />
                            <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                                <Wrapper >
                                    <Text style={{ fontFamily: appFonts.appTextLight, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>Total USD</Text>
                                </Wrapper>
                                <Wrapper alignItemsFlexStart>
                                    <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>${item.total}</Text>
                                </Wrapper>
                            </Wrapper>
                            <Spacer isSmall />
                            <Wrapper style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
                            <Spacer isSmall />
                            <Wrapper justifyContentSpaceBetween flexDirectionRow marginVerticalSmall>
                                <Buttons.Bordered
                                    // onPress={() => handleResetPassword()}
                                    buttonStyle={{ width: width(40), paddingHorizontal: width(3), justifyContent: 'center', alignItems: 'center', borderColor: colors.appTextColor27, marginHorizontal: 0 }}
                                    text={'Cancel'}
                                    iconContainer={{ left: width(34) }}
                                    textStyle={{
                                        color: colors.appTextColor27,
                                        fontFamily: appFonts.interMedium,
                                        fontSize: fontSizes.medium,
                                    }} />
                                <Buttons.ColoredSmall
                                    // onPress={() => navigate(routes.booking)}
                                    gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                    textStyle={{ textAlign: 'justify', fontFamily: appFonts.interSemiBold, color: colors.appTextColor5, fontSize: fontSizes.regular }}
                                    buttonStyle={{ width: width(40), paddingHorizontal: width(3), paddingVertical: height(1.6), justifyContent: 'center', alignItems: 'center' }}
                                    text={'Accept'} />
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </TouchableOpacity>
                <Spacer isSmall />
            </>
        )
    }
    const renderHistory = ({ item }) => {
        return (
            <>
                <Wrapper marginHorizontalBase>
                    <Wrapper isBorderedWrapper marginHorizontalZero paddingHorizontalSmall>
                        <Wrapper justifyContentSpaceBetween flexDirectionRow>
                            <Wrapper >
                                <Images.SqareRound style={{ borderRadius: 10, height: sizes.images.logoHeight, width: sizes.images.logoHeight }} source={item.profileImage} />
                            </Wrapper>
                            <Spacer isSmall horizontal />
                            <Wrapper flex={1}>
                                <Wrapper flex={1} justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                                    <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1, fontSize: fontSizes.mediumSmall }}>{item.name}</Text>
                                    <Wrapper marginHorizontalZero paddingHorizontalSmall paddingVerticalTiny isBorderedWrapper backgroundColor={item.status === 'Completed' ? colors.appColor15 : colors.appColor17} style={{ borderColor: item.status === 'Completed' ? colors.appColor16 : colors.appColor18 }}>
                                        <Text style={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor1, fontSize: fontSizes.small }}>{item.status}</Text>
                                    </Wrapper>
                                </Wrapper>
                                <Wrapper flex={1} alignItemsCenter flexDirectionRow>
                                    <Icons.Custom icon={appIcons.star} size={sizes.icons.small} />
                                    <Spacer width={width(1)} />
                                    <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor6, fontSize: fontSizes.regular }}>{item.rating}</Text>
                                </Wrapper>
                                <Wrapper flex={1} justifyContentCenter >
                                    <Text style={{ fontFamily: appFonts.baloo2_ExtraBold, color: colors.appTextColor2, fontSize: fontSizes.regular }}>${item.price}{' '}
                                        <Text style={{ fontFamily: appFonts.baloo2_Medium, color: colors.appTextColor7, fontSize: fontSizes.regular }}>/hour</Text></Text>
                                </Wrapper>

                                <Wrapper justifyContentFlexend>
                                    <Wrapper flexDirectionRow style={{ flexWrap: 'wrap' }}>
                                        <Text style={{ fontFamily: appFonts.appTextRegular, textAlign: 'justify', color: colors.appTextColor3, fontSize: 14 }}>{item.description}</Text>
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                        <Spacer isSmall />
                        <Wrapper style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
                        <Spacer isSmall />
                        <Wrapper style={{ marginRight: width(20) }}>
                            <Wrapper justifyContentSpaceBetween flexDirectionRow>
                                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                                    <Icons.Custom icon={appIcons.location_2} color={colors.iconColor6} size={sizes.icons.small} />
                                    <Spacer horizontal isSmall />
                                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>{item.location}</Text>
                                </Wrapper>
                                <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                                    <Icons.Custom icon={appIcons.adults} color={colors.iconColor6} size={sizes.icons.small} />
                                    <Spacer horizontal isSmall />
                                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>{item.guests}</Text>
                                </Wrapper>
                            </Wrapper>
                            <Spacer isTiny />
                            <Wrapper marginVerticalTiny flexDirectionRow alignItemsCenter>
                                <Icons.Custom icon={appIcons.calendar} color={colors.iconColor6} size={sizes.icons.small} />
                                <Spacer horizontal isSmall />
                                <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor3, fontSize: fontSizes.regular }}>{item.stayInfo}</Text>
                            </Wrapper>
                        </Wrapper>
                        <Spacer isSmall />
                        <Wrapper style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
                        <Spacer isSmall />
                        <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                            <Wrapper >
                                <Text style={{ fontFamily: appFonts.appTextLight, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>Total USD</Text>
                            </Wrapper>
                            <Wrapper alignItemsFlexStart>
                                <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>${item.total}</Text>
                            </Wrapper>
                        </Wrapper>

                    </Wrapper>
                </Wrapper>
                <Spacer isSmall />
            </>
        )
    }
    const renderTab = ({ item }) => {
        const isSelected = item.id === selectedTab;
        return (
            <>
                <TouchableOpacity
                    key={item.id}
                    onPress={() => { handleTabPress(item.id), setName(item.label) }}  // Add your onPress handler here
                >
                    <Wrapper
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        isGradient={isSelected}
                        backgroundColor={colors.appColor12}
                        gradiantColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                        style={[appStyles.paddingHorizontalBase, appStyles.paddingVerticalTiny, { flex: 0, borderRadius: sizes.inputRadius, borderWidth: isSelected ? null : 1, borderColor: isSelected ? null : colors.appColor5 }]}>
                        <Text style={{ fontFamily: isSelected ? appFonts.baloo2_Medium : appFonts.baloo2_Regular, fontSize: fontSizes.regular, color: isSelected ? colors.appTextColor5 : colors.appTextColor1 }}>
                            {item.label}
                        </Text>
                    </Wrapper>
                </TouchableOpacity>
                <Spacer horizontal isSmall />
            </>
        );
    };
    return (
        <>
            <StatusBars.Dark backgroundColor={colors.appColor1} />
            <Spacer isStatusBarHeigt />
            <Wrapper
                flex={0.915}
                backgroundColor={colors.appColor1}>
                <Wrapper
                    backgroundColor={colors.appColor1}>
                    <Wrapper flexDirectionRow
                        justifyContentSpaceBetween
                        marginHorizontalMedium
                        alignItemsCenter
                        style={{ marginTop: responsiveHeight(4) }}>
                        <Icons.Custom icon={appIcons.drawer} size={sizes.icons.mediumLarge} onPress={() => dispatch(DrawerActions.openDrawer())} />
                        <Text style={{ color: colors.appTextColor6, fontFamily: appFonts.appTextMedium, fontSize: fontSizes.large }}>Home</Text>
                        <Icons.Custom icon={appIcons.notification} size={sizes.icons.mediumLarge} />
                    </Wrapper>
                    <Spacer />
                    <TextInputs.SearchBar
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                        customIconRight={appIcons.equalizer}
                        iconColorRight={colors.iconColor6}
                        iconSizeRight={sizes.icons.mediumSmall}
                        iconStyleRight={{ right: width(4) }}
                        iconStyleLeft={{ marginLeft: width(1) }}
                        keyboardType={'default'}
                        inputContainerStyle={{
                            borderColor:
                                colors.inputTextBorder,
                            borderRadius: totalSize(2.5),
                            backgroundColor: colors.inputfieldColor2,
                        }}
                        inputStyle={{
                            height: height(7),
                            fontSize: fontSizes.small,
                            fontFamily: appFonts.appTextRegular,
                            color: colors.appTextColor1
                        }}
                        placeholder={'Search Country, City, Town'}
                        placeholderTextColor={colors.placeHolderColor2}
                    />
                    <Spacer isSmall />
                </Wrapper>
                <ScrollViews.KeyboardAvoiding>
                    <Spacer />
                    <Wrapper style={{ marginLeft: sizes.marginHorizontal }}>
                        <FlatList
                            data={tabs}
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            renderItem={renderTab}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-between' }}
                        />
                    </Wrapper>
                    <Spacer />
                    {
                        name === 'Active' ?
                            <Wrapper marginHorizontalBase>
                                <Wrapper alignItemsCenter>
                                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.h4_small, color: colors.appTextColor2 }}>TIME REMAINING</Text>
                                </Wrapper>
                                <Spacer isSmall />
                                <Wrapper justifyContentSpaceBetween paddingHorizontalSmall backgroundColor={colors.appColor5} paddingVerticalSmall alignItemsCenter style={{ borderRadius: sizes.cardRadius }} flexDirectionRow>
                                    <Wrapper style={{ width: width(19), }} >
                                        <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexEnd flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                        </Wrapper>
                                        <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexStart flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                        </Wrapper>
                                        <Wrapper alignItemsCenter justifyContentCenter style={{
                                            ...StyleSheet.absoluteFillObject,
                                        }}>
                                            <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor26, fontSize: fontSizes.xL }}>{days}</Text>
                                            <Wrapper backgroundColor={colors.appColor5} style={{ ...StyleSheet.absoluteFillObject, left: width(0.9), top: height(3.9), height: height(0.2), width: width(18.5), }} />
                                        </Wrapper>
                                    </Wrapper>
                                    <Wrapper>
                                        <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                                        <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                                    </Wrapper>
                                    <Wrapper style={{ width: width(19), }} >
                                        <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexEnd flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                        </Wrapper>
                                        <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexStart flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                        </Wrapper>
                                        <Wrapper alignItemsCenter justifyContentCenter style={{
                                            ...StyleSheet.absoluteFillObject,
                                        }}>
                                            <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor26, fontSize: fontSizes.xL }}>{hours}</Text>
                                            <Wrapper backgroundColor={colors.appColor5} style={{ ...StyleSheet.absoluteFillObject, left: width(0.9), top: height(3.9), height: height(0.2), width: width(18.5), }} />
                                        </Wrapper>
                                    </Wrapper>
                                    <Wrapper>
                                        <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                                        <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                                    </Wrapper>
                                    <Wrapper style={{ width: width(19), }} >
                                        <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexEnd flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                        </Wrapper>
                                        <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexStart flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                        </Wrapper>
                                        <Wrapper alignItemsCenter justifyContentCenter style={{
                                            ...StyleSheet.absoluteFillObject,
                                        }}>
                                            <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor26, fontSize: fontSizes.xL }}>{minutes}</Text>
                                            <Wrapper backgroundColor={colors.appColor5} style={{ ...StyleSheet.absoluteFillObject, left: width(0.9), top: height(3.9), height: height(0.2), width: width(18.5), }} />
                                        </Wrapper>
                                    </Wrapper>
                                    <Wrapper>
                                        <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                                        <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                                    </Wrapper>
                                    <Wrapper style={{ width: width(19), }} >
                                        <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexEnd flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                        </Wrapper>
                                        <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexStart flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                            <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                        </Wrapper>
                                        <Wrapper alignItemsCenter justifyContentCenter style={{
                                            ...StyleSheet.absoluteFillObject,
                                        }}>
                                            <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor26, fontSize: fontSizes.xL }}>{seconds}</Text>
                                            <Wrapper backgroundColor={colors.appColor5} style={{ ...StyleSheet.absoluteFillObject, left: width(0.9), top: height(3.9), height: height(0.2), width: width(18.5), }} />
                                        </Wrapper>
                                    </Wrapper>
                                </Wrapper>
                                <Spacer isSmall />
                                <Wrapper marginHorizontalSmall justifyContentSpaceBetween flexDirectionRow>
                                    <Wrapper alignItemsCenter style={{ width: width(19), }} >
                                        <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor2 }}>Days</Text>
                                    </Wrapper>
                                    <Wrapper alignItemsCenter style={{ width: width(19), }} >
                                        <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor2 }}>Hours</Text>
                                    </Wrapper>
                                    <Wrapper alignItemsCenter style={{ width: width(19), }}>
                                        <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor2 }}>Mins</Text>
                                    </Wrapper>
                                    <Wrapper alignItemsCenter style={{ width: width(19), }} >
                                        <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor2 }}>Secs</Text>
                                    </Wrapper>
                                </Wrapper>
                                <Spacer />
                                <Wrapper isBorderedWrapper marginHorizontalZero paddingHorizontalSmall>
                                    <Wrapper justifyContentSpaceBetween flexDirectionRow>
                                        <Wrapper >
                                            <Images.SqareRound style={{ borderRadius: 10, height: sizes.images.logoHeight, width: sizes.images.logoHeight }} source={appImages.profile1} />
                                        </Wrapper>
                                        <Spacer isSmall horizontal />
                                        <Wrapper flex={1}>
                                            <Wrapper flex={1} justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                                                <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1, fontSize: fontSizes.mediumSmall }}>John Doe</Text>
                                                <Wrapper marginHorizontalZero paddingHorizontalSmall paddingVerticalTiny isBorderedWrapper backgroundColor={colors.appColor11} style={{ borderColor: colors.appColor10 }}>
                                                    <Text style={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor1, fontSize: fontSizes.small }}>Active</Text>
                                                </Wrapper>
                                            </Wrapper>
                                            <Wrapper flex={1} alignItemsCenter flexDirectionRow>
                                                <Icons.Custom icon={appIcons.star} size={sizes.icons.small} />
                                                <Spacer width={width(1)} />
                                                <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor6, fontSize: fontSizes.regular }}>5.0</Text>
                                            </Wrapper>
                                            <Wrapper flex={1} justifyContentCenter >
                                                <Text style={{ fontFamily: appFonts.baloo2_ExtraBold, color: colors.appTextColor2, fontSize: fontSizes.regular }}>$13{' '}
                                                    <Text style={{ fontFamily: appFonts.baloo2_Medium, color: colors.appTextColor7, fontSize: fontSizes.regular }}>/hour</Text></Text>
                                            </Wrapper>

                                            <Wrapper justifyContentFlexend>
                                                <Wrapper flexDirectionRow style={{ flexWrap: 'wrap' }}>
                                                    <Text style={{ fontFamily: appFonts.appTextRegular, textAlign: 'justify', color: colors.appTextColor3, fontSize: 14 }}>Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.</Text>
                                                </Wrapper>
                                            </Wrapper>
                                        </Wrapper>
                                    </Wrapper>
                                    <Spacer isSmall />
                                    <Wrapper style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
                                    <Spacer isSmall />
                                    <Wrapper style={{ marginRight: width(20) }}>
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
                                    <Spacer isSmall />
                                    <Wrapper style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
                                    <Spacer isSmall />
                                    <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                                        <Wrapper >
                                            <Text style={{ fontFamily: appFonts.appTextLight, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>Total USD</Text>
                                        </Wrapper>
                                        <Wrapper alignItemsFlexStart>
                                            <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>$74.63</Text>
                                        </Wrapper>
                                    </Wrapper>
                                </Wrapper>
                                <Spacer isSmall />
                                <Wrapper justifyContentSpaceBetween paddingHorizontalSmall flexDirectionRow marginVerticalSmall>
                                    <Buttons.Bordered
                                        // onPress={() => handleResetPassword()}
                                        buttonStyle={{ width: width(40), paddingHorizontal: width(3), justifyContent: 'center', alignItems: 'center', borderColor: colors.appTextColor27, marginHorizontal: 0 }}
                                        text={'Cancel'}
                                        iconContainer={{ left: width(34) }}
                                        textStyle={{
                                            color: colors.appTextColor27,
                                            fontFamily: appFonts.interMedium,
                                            fontSize: fontSizes.medium,
                                        }} />
                                    <Buttons.ColoredSmall
                                        // onPress={() => navigate(routes.booking)}
                                        gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                        textStyle={{ textAlign: 'justify', fontFamily: appFonts.interSemiBold, color: colors.appTextColor5, fontSize: fontSizes.regular }}
                                        buttonStyle={{ width: width(40), paddingHorizontal: width(3), paddingVertical: height(1.6), justifyContent: 'center', alignItems: 'center' }}
                                        text={'Mark Done'} />
                                </Wrapper>
                            </Wrapper>
                            :
                            name === 'Requests' ?
                                <FlatList
                                    data={requestData}
                                    keyExtractor={item => item.id.toString()}
                                    renderItem={renderRequest}
                                    showsVerticalScrollIndicator={false}
                                />
                                :
                                name === 'Scheduled' ?
                                    <Wrapper marginHorizontalBase>
                                        <Wrapper isBorderedWrapper marginHorizontalZero paddingHorizontalSmall>
                                            <Wrapper justifyContentSpaceBetween flexDirectionRow>
                                                <Wrapper >
                                                    <Images.SqareRound style={{ borderRadius: 10, height: sizes.images.logoHeight, width: sizes.images.logoHeight }} source={appImages.profile1} />
                                                </Wrapper>
                                                <Spacer isSmall horizontal />
                                                <Wrapper flex={1}>
                                                    <Wrapper flex={1} justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                                                        <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1, fontSize: fontSizes.mediumSmall }}>John Doe</Text>
                                                        <Wrapper marginHorizontalZero paddingHorizontalSmall paddingVerticalTiny isBorderedWrapper backgroundColor={colors.appColor15} style={{ borderColor: colors.appColor16 }}>
                                                            <Text style={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor1, fontSize: fontSizes.small }}>Upcoming</Text>
                                                        </Wrapper>
                                                    </Wrapper>
                                                    <Wrapper flex={1} alignItemsCenter flexDirectionRow>
                                                        <Icons.Custom icon={appIcons.star} size={sizes.icons.small} />
                                                        <Spacer width={width(1)} />
                                                        <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor6, fontSize: fontSizes.regular }}>5.0</Text>
                                                    </Wrapper>
                                                    <Wrapper flex={1} justifyContentCenter >
                                                        <Text style={{ fontFamily: appFonts.baloo2_ExtraBold, color: colors.appTextColor2, fontSize: fontSizes.regular }}>$13{' '}
                                                            <Text style={{ fontFamily: appFonts.baloo2_Medium, color: colors.appTextColor7, fontSize: fontSizes.regular }}>/hour</Text></Text>
                                                    </Wrapper>

                                                    <Wrapper justifyContentFlexend>
                                                        <Wrapper flexDirectionRow style={{ flexWrap: 'wrap' }}>
                                                            <Text style={{ fontFamily: appFonts.appTextRegular, textAlign: 'justify', color: colors.appTextColor3, fontSize: 14 }}>Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.</Text>
                                                        </Wrapper>
                                                    </Wrapper>
                                                </Wrapper>
                                            </Wrapper>
                                            <Spacer isSmall />
                                            <Wrapper style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
                                            <Spacer isSmall />
                                            <Wrapper style={{ marginRight: width(20) }}>
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
                                            <Spacer isSmall />
                                            <Wrapper style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
                                            <Spacer isSmall />
                                            <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                                                <Wrapper >
                                                    <Text style={{ fontFamily: appFonts.appTextLight, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>Total USD</Text>
                                                </Wrapper>
                                                <Wrapper alignItemsFlexStart>
                                                    <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>$74.63</Text>
                                                </Wrapper>
                                            </Wrapper>
                                        </Wrapper>
                                    </Wrapper>
                                    :
                                    name === 'History' ?
                                        <FlatList
                                            data={historyData}
                                            keyExtractor={item => item.id.toString()}
                                            renderItem={renderHistory}
                                            showsVerticalScrollIndicator={false}
                                        />
                                        :
                                        <Wrapper marginHorizontalBase>
                                            <Wrapper alignItemsCenter>
                                                <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.h4_small, color: colors.appTextColor2 }}>TIME REMAINING</Text>
                                            </Wrapper>
                                            <Spacer isSmall />
                                            <Wrapper justifyContentSpaceBetween paddingHorizontalSmall backgroundColor={colors.appColor5} paddingVerticalSmall alignItemsCenter style={{ borderRadius: sizes.cardRadius }} flexDirectionRow>
                                                <Wrapper style={{ width: width(19), }} >
                                                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexEnd flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                    </Wrapper>
                                                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexStart flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                    </Wrapper>
                                                    <Wrapper alignItemsCenter justifyContentCenter style={{
                                                        ...StyleSheet.absoluteFillObject,
                                                    }}>
                                                        <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor26, fontSize: fontSizes.xL }}>{days}</Text>
                                                        <Wrapper backgroundColor={colors.appColor5} style={{ ...StyleSheet.absoluteFillObject, left: width(0.9), top: height(3.9), height: height(0.2), width: width(18.5), }} />
                                                    </Wrapper>
                                                </Wrapper>
                                                <Wrapper>
                                                    <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                                                    <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                                                </Wrapper>
                                                <Wrapper style={{ width: width(19), }} >
                                                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexEnd flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                    </Wrapper>
                                                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexStart flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                    </Wrapper>
                                                    <Wrapper alignItemsCenter justifyContentCenter style={{
                                                        ...StyleSheet.absoluteFillObject,
                                                    }}>
                                                        <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor26, fontSize: fontSizes.xL }}>{hours}</Text>
                                                        <Wrapper backgroundColor={colors.appColor5} style={{ ...StyleSheet.absoluteFillObject, left: width(0.9), top: height(3.9), height: height(0.2), width: width(18.5), }} />
                                                    </Wrapper>
                                                </Wrapper>
                                                <Wrapper>
                                                    <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                                                    <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                                                </Wrapper>
                                                <Wrapper style={{ width: width(19), }} >
                                                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexEnd flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                    </Wrapper>
                                                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexStart flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                    </Wrapper>
                                                    <Wrapper alignItemsCenter justifyContentCenter style={{
                                                        ...StyleSheet.absoluteFillObject,
                                                    }}>
                                                        <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor26, fontSize: fontSizes.xL }}>{minutes}</Text>
                                                        <Wrapper backgroundColor={colors.appColor5} style={{ ...StyleSheet.absoluteFillObject, left: width(0.9), top: height(3.9), height: height(0.2), width: width(18.5), }} />
                                                    </Wrapper>
                                                </Wrapper>
                                                <Wrapper>
                                                    <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                                                    <Wrapper marginVerticalTiny style={{ borderWidth: width(0.6), borderColor: colors.appColor1, borderRadius: sizes.cardRadius }} />
                                                </Wrapper>
                                                <Wrapper style={{ width: width(19), }} >
                                                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexEnd flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                    </Wrapper>
                                                    <Wrapper backgroundColor={colors.appColor9} justifyContentSpaceBetween paddingVerticalTiny paddingHorizontalTiny alignItemsFlexStart flexDirectionRow style={{ height: height(4), borderRadius: totalSize(0.8) }}>
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                        <Wrapper style={{ borderWidth: width(0.3), borderColor: colors.appColor5, borderRadius: sizes.cardRadius }} />
                                                    </Wrapper>
                                                    <Wrapper alignItemsCenter justifyContentCenter style={{
                                                        ...StyleSheet.absoluteFillObject,
                                                    }}>
                                                        <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor26, fontSize: fontSizes.xL }}>{seconds}</Text>
                                                        <Wrapper backgroundColor={colors.appColor5} style={{ ...StyleSheet.absoluteFillObject, left: width(0.9), top: height(3.9), height: height(0.2), width: width(18.5), }} />
                                                    </Wrapper>
                                                </Wrapper>
                                            </Wrapper>
                                            <Spacer isSmall />
                                            <Wrapper marginHorizontalSmall justifyContentSpaceBetween flexDirectionRow>
                                                <Wrapper alignItemsCenter style={{ width: width(19), }} >
                                                    <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor2 }}>Days</Text>
                                                </Wrapper>
                                                <Wrapper alignItemsCenter style={{ width: width(19), }} >
                                                    <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor2 }}>Hours</Text>
                                                </Wrapper>
                                                <Wrapper alignItemsCenter style={{ width: width(19), }}>
                                                    <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor2 }}>Mins</Text>
                                                </Wrapper>
                                                <Wrapper alignItemsCenter style={{ width: width(19), }} >
                                                    <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor2 }}>Secs</Text>
                                                </Wrapper>
                                            </Wrapper>
                                            <Spacer />
                                            <Wrapper isBorderedWrapper marginHorizontalZero paddingHorizontalSmall>
                                                <Wrapper justifyContentSpaceBetween flexDirectionRow>
                                                    <Wrapper >
                                                        <Images.SqareRound style={{ borderRadius: 10, height: sizes.images.logoHeight, width: sizes.images.logoHeight }} source={appImages.profile1} />
                                                    </Wrapper>
                                                    <Spacer isSmall horizontal />
                                                    <Wrapper flex={1}>
                                                        <Wrapper flex={1} justifyContentSpaceBetween alignItemsCenter flexDirectionRow>
                                                            <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1, fontSize: fontSizes.mediumSmall }}>John Doe</Text>
                                                            <Wrapper marginHorizontalZero paddingHorizontalSmall paddingVerticalTiny isBorderedWrapper backgroundColor={colors.appColor11} style={{ borderColor: colors.appColor10 }}>
                                                                <Text style={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor1, fontSize: fontSizes.small }}>Active</Text>
                                                            </Wrapper>
                                                        </Wrapper>
                                                        <Wrapper flex={1} alignItemsCenter flexDirectionRow>
                                                            <Icons.Custom icon={appIcons.star} size={sizes.icons.small} />
                                                            <Spacer width={width(1)} />
                                                            <Text style={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor6, fontSize: fontSizes.regular }}>5.0</Text>
                                                        </Wrapper>
                                                        <Wrapper flex={1} justifyContentCenter >
                                                            <Text style={{ fontFamily: appFonts.baloo2_ExtraBold, color: colors.appTextColor2, fontSize: fontSizes.regular }}>$13{' '}
                                                                <Text style={{ fontFamily: appFonts.baloo2_Medium, color: colors.appTextColor7, fontSize: fontSizes.regular }}>/hour</Text></Text>
                                                        </Wrapper>

                                                        <Wrapper justifyContentFlexend>
                                                            <Wrapper flexDirectionRow style={{ flexWrap: 'wrap' }}>
                                                                <Text style={{ fontFamily: appFonts.appTextRegular, textAlign: 'justify', color: colors.appTextColor3, fontSize: 14 }}>Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.</Text>
                                                            </Wrapper>
                                                        </Wrapper>
                                                    </Wrapper>
                                                </Wrapper>
                                                <Spacer isSmall />
                                                <Wrapper style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
                                                <Spacer isSmall />
                                                <Wrapper style={{ marginRight: width(20) }}>
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
                                                <Spacer isSmall />
                                                <Wrapper style={{ borderWidth: width(0.1), borderColor: colors.spacerColor3 }} />
                                                <Spacer isSmall />
                                                <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                                                    <Wrapper >
                                                        <Text style={{ fontFamily: appFonts.appTextLight, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>Total USD</Text>
                                                    </Wrapper>
                                                    <Wrapper alignItemsFlexStart>
                                                        <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.regular, color: colors.appTextColor2 }}>$74.63</Text>
                                                    </Wrapper>
                                                </Wrapper>
                                            </Wrapper>
                                            <Spacer isSmall />
                                            <Wrapper justifyContentSpaceBetween paddingHorizontalSmall flexDirectionRow marginVerticalSmall>
                                                <Buttons.Bordered
                                                    // onPress={() => handleResetPassword()}
                                                    buttonStyle={{ width: width(40), paddingHorizontal: width(3), justifyContent: 'center', alignItems: 'center', borderColor: colors.appTextColor27, marginHorizontal: 0 }}
                                                    text={'Cancel'}
                                                    iconContainer={{ left: width(34) }}
                                                    textStyle={{
                                                        color: colors.appTextColor27,
                                                        fontFamily: appFonts.interMedium,
                                                        fontSize: fontSizes.medium,
                                                    }} />
                                                <Buttons.ColoredSmall
                                                    // onPress={() => navigate(routes.booking)}
                                                    gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                                    textStyle={{ textAlign: 'justify', fontFamily: appFonts.interSemiBold, color: colors.appTextColor5, fontSize: fontSizes.regular }}
                                                    buttonStyle={{ width: width(40), paddingHorizontal: width(3), paddingVertical: height(1.6), justifyContent: 'center', alignItems: 'center' }}
                                                    text={'Mark Done'} />
                                            </Wrapper>
                                        </Wrapper>
                    }


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