import React, { Component, useState } from 'react';
import { Image, TouchableOpacity, View, } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, StatusBars, Images, Modals } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appFonts, fontSizes, appIcons, appImages } from '../../../services';
import { useHooks } from './hooks';


export default function Index(props) {
    const { navigate, goBack } = props.navigation



    const { modalVisible, selectGender, setSelectGender, truncatedAddress, handleSubmit, profileImage, selectImage, preferencesChunks, displayText, handleAdd, isInputVisible, setIsInputVisible, genderData, preferences, setPreferences, date, handleChangeText, fullName, setFullName } = useHooks()
    return (
        <Wrapper isMain backgroundColor={colors.appBgColor2} style={[{}]}>
            <StatusBars.Dark backgroundColor={colors.statusBarColor1} />
            <ScrollViews.KeyboardAvoiding>

                <Wrapper marginHorizontalBase style={{ marginTop: width(5) }}>
                    <Headers.Primary
                        onBackPress={() => goBack()}
                        showBackArrow
                        rightIconSource={appIcons.chevron_left}
                        allowText
                        textColor={colors.appTextColor9}
                        // iconColor={colors.iconColor1}
                        title={'Complete Your Profile'}
                        titleStyle={{ fontFamily: appFonts.interBold, fontSize: fontSizes.medium }}
                        iconContainer={{ flexDirection: 'row' }}
                        containerStyle={{ backgroundColor: colors.appColor1 }} />

                    <Wrapper justifyContentCenter alignItemsCenter>
                        <Images.Round style={{ resizeMode: 'contain' }} size={sizes.images.profilePic} source={profileImage ? { uri: profileImage } : appImages.dummyProfile} />
                        <Icons.Button
                            isRound
                            onPress={selectImage}
                            buttonStyle={{ bottom: height(4), left: width(9.5) }}
                            buttonSize={width(8)}
                            buttonColor={colors.iconeButtonColor1}
                            customIcon={appIcons.camera}
                            iconSize={sizes.icons.small} />
                    </Wrapper>
                    <Wrapper>
                        <TextInputs.Colored
                            title={'Full Name'}
                            value={fullName}
                            onChangeText={(text) => setFullName(text)}
                            keyboardType={'default'}
                            containerStyle={{ marginHorizontal: 0 }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.user}
                            inputStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            // iconStyleLeft={{  }}
                            placeholder={'John Doe'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.small,
                                fontFamily: appFonts.satoshiMedium,
                                color: colors.appTextColor3
                            }} />
                        <Wrapper flexDirectionRow justifyContentSpaceBetween>

                            <TextInputs.Colored
                                title={'Date of Birth'}
                                value={date}
                                onChangeText={(text) => handleChangeText(text)}
                                keyboardType={'numeric'}
                                maxLength={10}
                                containerStyle={{ width: width(40), marginHorizontal: 0, marginTop: height(1), }}
                                inputContainerStyle={{
                                    backgroundColor: colors.inputfieldColor1,
                                    borderColor: colors.inputTextBorder,
                                    borderRadius: totalSize(2)
                                }}
                                customIconLeft={appIcons.calendar}
                                inputStyle={{
                                    fontSize: fontSizes.regular,
                                    fontFamily: appFonts.satoshiRegular,
                                    color: colors.appTextColor1
                                }}
                                iconColorLeft={colors.iconColor1}
                                // iconStyleLeft={{  }}
                                placeholder={'1990/01/31'}
                                placeholderTextColor={colors.placeHolderColor}
                                titleStyle={{
                                    fontSize: fontSizes.small,
                                    fontFamily: appFonts.satoshiMedium,
                                    color: colors.appTextColor3
                                }} />

                            <TextInputs.DropDown
                                title={'Gender'}
                                data={genderData}
                                values={selectGender}
                                onChange={(text) => setSelectGender(text)}
                                keyboardType={'numeric'}
                                containerStyles={{ width: width(40), marginHorizontal: 0, marginTop: height(1), }}
                                inputContainerStyle={{
                                    borderColor: colors.inputTextBorder,
                                    borderRadius: totalSize(2)
                                }}
                                placeholder={'Select--'}
                                inputStyle={{
                                    width: width(40),
                                }}
                                titleStyle={{
                                    fontSize: fontSizes.small,
                                    fontFamily: appFonts.satoshiMedium,
                                    color: colors.appTextColor3
                                }} />
                        </Wrapper>
                        <TextInputs.Colored
                            editable={false}
                            title={'Home - Address'}
                            value={truncatedAddress}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.location}
                            customIconRight={appIcons.dropDown}
                            iconColorRight={colors.iconColor1}
                            iconSizeRight={sizes.icons.tiny}
                            iconStyleRight={{
                                marginRight: width(5)
                            }}
                            inputStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            onPressIconRight={() => navigate(routes.addAddress)}
                            placeholder={'Add here...'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.small,
                                fontFamily: appFonts.satoshiMedium,

                                color: colors.appTextColor3
                            }} />
                    </Wrapper>
                    {/* <Wrapper marginVerticalSmall style={{ marginBottom: width(15) }}>
                        <Text style={{
                            fontSize: fontSizes.small,
                            fontFamily: appFonts.satoshiMedium,
                            color: colors.appTextColor2
                        }}
                        >Travel Preferences</Text>
                        <Wrapper
                            paddingHorizontalSmall
                            paddingVerticalSmall
                            flexDirectionRow
                            marginVerticalSmall
                            style={{
                                ...appStyles.inputContainerColored1,
                                borderRadius: sizes.inputRadius,
                                borderWidth: responsiveHeight(0.1),
                                borderColor: colors.inputTextBorder,
                                backgroundColor: colors.inputfieldColor1,
                                marginHorizontal: 0,
                                flexWrap: "wrap"
                            }}>
                            {preferencesChunks.map((chunk, chunkIndex) => (
                                <Wrapper key={chunkIndex} style={{ flexDirection: 'row', marginBottom: width(1) }}>
                                    {chunk.map((preference, index) => (
                                        <Wrapper
                                            key={index}
                                            isGradient
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 0 }}
                                            gradiantColors={[colors.buttonColor1, colors.buttonColor2]}
                                            style={{ flex: 0, marginRight: width(2), marginVertical: width(1), paddingVertical: width(1), paddingHorizontal: width(5), borderRadius: width(10), justifyContent: 'center', alignItems: 'center' }}

                                        >
                                            <Text style={{
                                                fontSize: fontSizes.medium,
                                                fontFamily: appFonts.interRegular,
                                                color: colors.appTextColor4
                                            }}>{preference}</Text>
                                        </Wrapper>
                                    ))}
                                </Wrapper>
                            ))}

                            <Wrapper justifyContentCenter marginHorizontalTiny>
                                <TouchableOpacity onPress={() => setIsInputVisible(!isInputVisible)}>
                                    <Images.Simple style={{ height: height(6), resizeMode: 'contain', width: sizes.images.logoButtonWidth }} source={appImages.chip} />
                                </TouchableOpacity>
                            </Wrapper>
                        </Wrapper>
                        {isInputVisible && (
                            <Wrapper>
                                <TextInputs.Colored
                                    title={'Add new'}
                                    value={preferences}
                                    onChangeText={(text) => setPreferences(text)}
                                    keyboardType={'default'}
                                    containerStyle={{ marginHorizontal: 0, marginTop: height(1) }}
                                    inputContainerStyle={{
                                        backgroundColor: colors.inputfieldColor1,
                                        borderColor: colors.inputTextBorder,
                                        borderRadius: totalSize(2)
                                    }}
                                    inputStyle={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.satoshiRegular,
                                        color: colors.appTextColor1
                                    }}
                                    placeholder={'New Preference'}
                                    placeholderTextColor={colors.placeHolderColor}
                                    titleStyle={{
                                        fontSize: fontSizes.small,
                                        fontFamily: appFonts.satoshiMedium,

                                        color: colors.appTextColor2
                                    }} />
                                <Wrapper marginVerticalSmall>
                                    <Buttons.Colored
                                        buttonStyle={{ marginHorizontal: 0 }}
                                        text={'ADD'}
                                        gradientColors={[colors.buttonColor1, colors.buttonColor2]}
                                        onPress={handleAdd}
                                        textStyle={{
                                            color: colors.appTextColor4,
                                            fontFamily: appFonts.interSemiBold,
                                            fontSize: fontSizes.regular,
                                        }} />

                                </Wrapper>
                            </Wrapper>
                        )}
                    </Wrapper> */}
                    <Wrapper style={{marginTop: responsiveHeight(30)}}>
                        <Buttons.Colored
                            onPress={handleSubmit}
                            buttonStyle={{ marginHorizontal: 0 }}
                            text={'Continue'}
                            gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                            textStyle={{
                                color: colors.appTextColor5,
                                fontFamily: appFonts.interSemiBold,
                                fontSize: fontSizes.regular,
                            }} />

                    </Wrapper>

                </Wrapper>
                <Wrapper>
                    <Modals.Swipable
                        hideHeader
                        visible={modalVisible}
                        onPress={() => { navigate(routes.signin) }}
                        data={'Account created successfully'}
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
            </ScrollViews.KeyboardAvoiding>

        </Wrapper>
    );
}

