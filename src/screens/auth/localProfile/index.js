import React, { Component, useState } from 'react';
import { Image, TouchableOpacity, View, } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, StatusBars, Images, Modals, Pickers } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appFonts, fontSizes, appIcons, appImages } from '../../../services';
import { useHooks } from './hooks';
import LinearGradient from 'react-native-linear-gradient';


export default function Index(props) {
    const { navigate, goBack } = props.navigation
    const { modalVisible, getGradiantColors, handleNext, currentWrapper, setCameraPressed, cameraPressed, idCard, handleIDCard, increment, pressed, setPressed, decrement, counter, selectGender, setSelectGender, truncatedAddress, handleSubmit, profileImage, selectImage, preferencesChunks, displayText, handleAdd, isInputVisible, setIsInputVisible, genderData, preferences, setPreferences, date, handleChangeText, fullName, setFullName } = useHooks()
    return (
        <Wrapper isMain backgroundColor={colors.appBgColor2} style={[{}]}>
            <StatusBars.Dark backgroundColor={colors.statusBarColor1} />
            <Wrapper marginHorizontalSmall style={{ marginTop: width(5) }}>
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

            </Wrapper>
            <Wrapper alignItemsCenter justifyContentCenter>
                <Wrapper alignItemsCenter flexDirectionRow>
                    <Wrapper style={{ flex: 0.2, borderRadius: 20, height: height(0.7), marginHorizontal: sizes.horizontalLineHeight }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} isGradient gradiantColors={getGradiantColors(0)} />
                    <Wrapper style={{ flex: 0.2, borderRadius: 20, height: height(0.7), marginHorizontal: sizes.horizontalLineHeight }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} isGradient gradiantColors={getGradiantColors(1)} />
                    <Wrapper style={{ flex: 0.2, borderRadius: 20, height: height(0.7), marginHorizontal: sizes.horizontalLineHeight }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} isGradient gradiantColors={getGradiantColors(2)} />
                </Wrapper>
            </Wrapper>
            <Spacer />
            <ScrollViews.KeyboardAvoiding>
                {currentWrapper === 0 && (
                    <Wrapper paddingVerticalTiny marginHorizontalBase style={{ marginTop: width(5) }}>
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
                                placeholder={'Select here...'}
                                placeholderTextColor={colors.placeHolderColor}
                                titleStyle={{
                                    fontSize: fontSizes.small,
                                    fontFamily: appFonts.satoshiMedium,

                                    color: colors.appTextColor3
                                }} />
                            <TextInputs.Colored
                                editable={false}
                                title={'Lived in City - Years'}
                                value={truncatedAddress}
                                containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                                inputContainerStyle={{
                                    backgroundColor: colors.inputfieldColor1,
                                    borderColor: colors.inputTextBorder,
                                    borderRadius: totalSize(2)
                                }}
                                customIconLeft={appIcons.time}
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
                                placeholder={'Select here...'}
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

                    </Wrapper>
                )}
                {currentWrapper === 1 && (
                    <Wrapper paddingVerticalTiny marginHorizontalBase style={{ marginTop: width(5) }}>
                        <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.h5, color: colors.appTextColor9 }}>Add Your Preferences</Text>
                        <TextInputs.Colored
                            editable={false}
                            title={'Map Pins'}
                            value={truncatedAddress}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.pin}
                            customIconRight={appIcons.chevron_right}
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
                            placeholder={'Select here...'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                        <Wrapper marginVerticalTiny>
                            <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.small, color: colors.appTextColor9 }}>Pin locations where you are willing to be local.</Text>
                        </Wrapper>
                        <TextInputs.Colored
                            editable={false}
                            title={'Language'}
                            value={truncatedAddress}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            flagCode='US'
                            flageSize={sizes.icons.medium}
                            iconStyleLeft={{ width: width(7), borderRadius: 4 }}
                            customIconRight={appIcons.dropDown}
                            iconColorRight={colors.iconColor1}
                            iconSizeRight={sizes.icons.tiny}
                            iconStyleRight={{
                                marginRight: width(5)
                            }}
                            inputStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiRegular,
                                color: colors.appTextColor1,
                                right: width(1)
                            }}
                            iconColorLeft={colors.iconColor1}
                            onPressIconRight={() => navigate(routes.addAddress)}
                            placeholder={'Select here...'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                        <TextInputs.Colored
                            title={'Bio'}
                            value={truncatedAddress}
                            multiline
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2),
                                height: height(10),
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start'
                            }}
                            inputStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiRegular,
                                color: colors.appTextColor1,
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                height: height(10)
                            }}
                            placeholder={'Add biography'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                        <TextInputs.Colored
                            editable={false}
                            title={'Experience Preferences'}
                            value={truncatedAddress}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.time}
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
                            placeholder={'Select here...'}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                        <TextInputs.Counter
                            title={'Adults'}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2),
                                height: sizes.inputHeight
                            }}
                            counter={counter.adults}
                            increment={() => increment('adults')}
                            decrement={() => decrement('adults')}
                            customIconLeft={appIcons.adults}
                            customIconRight
                            iconColorRight={colors.iconColor3}
                            iconSizeRight={sizes.icons.small}
                            inputStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                        <TextInputs.Counter
                            title={'Toddler'}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2),
                                height: sizes.inputHeight
                            }}
                            counter={counter.toddler}
                            increment={() => increment('toddler')}
                            decrement={() => decrement('toddler')}
                            customIconLeft={appIcons.young}
                            customIconRight
                            iconColorRight={colors.iconColor3}
                            iconSizeRight={sizes.icons.small}
                            inputStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                        <TextInputs.Counter
                            title={'Infant'}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2),
                                height: sizes.inputHeight
                            }}
                            counter={counter.infant}
                            increment={() => increment('infant')}
                            decrement={() => decrement('infant')}
                            customIconLeft={appIcons.baby}
                            customIconRight
                            iconColorRight={colors.iconColor3}
                            iconSizeRight={sizes.icons.small}
                            inputStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.satoshiRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }} />
                    </Wrapper>
                )}
                {/* <Wrapper>
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
                </Wrapper> */}
                {currentWrapper === 2 && (
                    <Wrapper paddingVerticalTiny marginHorizontalBase style={{ marginTop: width(5) }}>
                        <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.h5, color: colors.appTextColor9 }}>Upload Drivers License or{'\n'}National ID Card </Text>
                        <Wrapper marginVerticalTiny>
                            <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor9 }}>We do a compulsory background check on all{'\n'}Locals for safety. Your data will be stored{'\n'}safely and privately according to regulations</Text>
                        </Wrapper>
                        <Spacer isDoubleBase />

                        <LinearGradient
                            colors={pressed ? [colors.transparent, colors.transparent] : [colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{
                                borderRadius: 50,
                                padding: 1,
                            }}
                        >
                            <TouchableOpacity
                                onPressIn={() => {
                                    setPressed(true);
                                    handleIDCard()
                                }}
                                onPressOut={() => setPressed(false)}
                            >
                                <Wrapper paddingVerticalLarge justifyContentCenter alignItemsCenter style={{ borderRadius: 50, height: sizes.images.logoHeightLarge }} backgroundColor={colors.appColor6}>
                                    {idCard ? (
                                        <Images.MainLogo
                                            style={{ borderRadius: 50, height: sizes.images.logoHeightLarge, width: '100%' }}
                                            source={{ uri: idCard }}
                                        />
                                    ) : (
                                        <>
                                            <Icons.Custom icon={appIcons.picker} size={sizes.icons.large} />
                                            <Spacer />
                                            <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor10, fontSize: fontSizes.medium }}>
                                                Select file
                                            </Text>
                                        </>
                                    )}
                                </Wrapper>
                            </TouchableOpacity>
                        </LinearGradient>
                        <Spacer isMedium />
                        <Wrapper marginHorizontalMedium>
                            <Wrapper justifyContentCenter flexDirectionRow >
                                <Wrapper justifyContentCenter alignItemsCenter flex={1} >
                                    <Image style={{ width: width(40), tintColor: colors.appTextColor7 }} source={appIcons.vector} />
                                </Wrapper>
                                <Wrapper flex={1} justifyContentCenter alignItemsCenter>
                                    <Text style={{ color: colors.appTextColor7, fontFamily: appFonts.interRegular, fontSize: fontSizes.regular }}>Or</Text>
                                </Wrapper>
                                <Wrapper flex={1} justifyContentCenter alignItemsCenter>
                                    <Image style={{ width: width(40), tintColor: colors.appTextColor7 }} source={appIcons.vector} />
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>

                        <Spacer isMedium />
                        <Wrapper >
                            <LinearGradient
                                // colors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                colors={cameraPressed ? [colors.transparent, colors.transparent] : [colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{
                                    borderRadius: 28,
                                    padding: 1,
                                }}
                            >
                                <Buttons.ColoredSmall

                                    onPressIn={() => setCameraPressed(true)}
                                    onPressOut={() => setCameraPressed(false)}
                                    customIcon={appIcons.camera}
                                    gradientColors={[colors.buttonColor3, colors.buttonColor3]}
                                    textStyle={{ textAlign: 'center', fontFamily: appFonts.appTextBold, color: colors.appTextColor2, fontSize: fontSizes.medium }}
                                    buttonStyle={{ justifyContent: 'center', alignItems: 'center' }}
                                    text={'Open Camera & Take Photo'} />
                            </LinearGradient>
                        </Wrapper>
                    </Wrapper>
                )}
            </ScrollViews.KeyboardAvoiding>
            <Wrapper paddingVerticalBase marginHorizontalBase >
                <Buttons.Colored
                    onPress={handleNext}
                    buttonStyle={{ marginHorizontal: 0 }}
                    text={'Next'}
                    gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
                    textStyle={{
                        color: colors.appTextColor5,
                        fontFamily: appFonts.interSemiBold,
                        fontSize: fontSizes.regular,
                    }} />

            </Wrapper>
        </Wrapper>
    );
}