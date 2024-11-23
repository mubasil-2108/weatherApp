import React, { useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput, Animated, Platform } from 'react-native'
import { Icon } from '@rneui/base';
import { height, totalSize, width } from 'react-native-dimension';
import { Dropdown } from 'react-native-element-dropdown';
import PhoneInput from 'react-native-phone-input';
import CountryFlag from 'react-native-country-flag';
import { colors, appStyles, sizes, fontSizes, responsiveHeight, appFonts, appIcons } from '../../services';
import * as Icons from '../icons';
import Wrapper from '../wrapper';
import Text from '../text';
import Spacer from '../spacer';
import { ScrollViews } from '..';
const Colored = ({
    iconNameRight, inputRef, iconTypeRight, returnKeyLabel,
    returnKeyType, onSubmitEditing, onPress, searchButton,
    maxLength, autoFocus, title, isButton,
    duration, titleStyle, placeholder, editable,
    animation, multiline, onFocus, onBlur,
    onChangeText, secureTextEntry, value,
    iconColorRight, iconSizeRight, containerStyle,
    inputContainerStyle, onPressIconRight, inputStyle,
    right, keyboardType, iconStyleRight, customIconRight, error,
    left, customIconLeft, iconNameLeft, iconTypeLeft, iconSizeLeft,
    iconColorLeft, iconStyleLeft, onPressIconLeft, isGradient,
    flagCode, end, start, gradiantColors, iconContainerRight,
    flageSize,
    placeholderTextColor
}) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            disabled={!onPress}
            style={[{ marginHorizontal: sizes.marginHorizontal }, containerStyle]}>
            {
                title ?
                    <Wrapper style={{ marginHorizontal: 0 }}>
                        <Text isInputTitle style={[{}, titleStyle]}>{title}</Text>
                        <Spacer isTiny />
                    </Wrapper>
                    :
                    null
            }
            <Wrapper style={[appStyles.inputContainerColored, {
                borderRadius: sizes.inputRadius,
                borderWidth: responsiveHeight(0.1),
                backgroundColor: colors.inputfieldColor1,
                marginHorizontal: 0
            }, inputContainerStyle]}>
                {
                    left ?
                        left
                        :
                        flagCode ? // Replace icon with CountryFlag if flagCode is provided
                            <Wrapper style={{ alignItems: 'center', marginLeft: sizes.marginHorizontal / 2 }}>
                                <CountryFlag isoCode={flagCode} size={flageSize} style={iconStyleLeft} />
                            </Wrapper>
                            :
                            customIconLeft ?
                                <Wrapper style={{ alignItems: 'center', marginLeft: sizes.marginHorizontal / 2 }}>
                                    <Icons.Custom icon={customIconLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor1} containerStyle={iconStyleLeft} />
                                </Wrapper>
                                :
                                iconNameLeft ?
                                    <Wrapper style={{ alignItems: 'center', marginLeft: sizes.marginHorizontal / 2 }}>
                                        <Icon name={iconNameLeft} type={iconTypeLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor4} iconStyle={iconStyleLeft} onPress={onPressIconLeft} />
                                    </Wrapper>
                                    :
                                    null
                }
                <View style={{ flex: 1 }}>
                    {
                        onPress ?
                            <Wrapper marginHorizontalBase style={{ height: sizes.inputHeight, justifyContent: 'center', }}>
                                <Text isMedium style={value ? null : appStyles.textGray}>{value ? value : placeholder}</Text>
                            </Wrapper>
                            :
                            <TextInput
                                ref={inputRef}
                                onChangeText={onChangeText}
                                value={value}
                                placeholder={placeholder}
                                editable={editable}
                                autoFocus={autoFocus}
                                returnKeyLabel={returnKeyLabel}
                                returnKeyType={returnKeyType}
                                onSubmitEditing={onSubmitEditing}
                                multiline={multiline}
                                placeholderTextColor={placeholderTextColor || '#21212180'}
                                keyboardType={keyboardType}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                secureTextEntry={secureTextEntry}
                                maxLength={maxLength}
                                style={[appStyles.inputField, { width: null, height: sizes.inputHeight, paddingHorizontal: sizes.marginHorizontal }, inputStyle]}
                            />
                    }
                </View>
                <View style={{}}>
                    {
                        right ?
                            right
                            :
                            customIconRight ?
                                <Wrapper style={{ alignItems: 'center', marginLeft: sizes.marginHorizontal / 2, ...iconContainerRight }}>
                                    <Icons.Custom end={end} start={start} gradiantColors={gradiantColors} isGradient={isGradient} icon={customIconRight} size={iconSizeRight ? iconSizeRight : sizes.icons.medium} color={iconColorRight ? iconColorRight : null} containerStyle={iconStyleRight} onPress={onPressIconRight} />
                                </Wrapper>
                                :
                                iconNameRight ?
                                    <Wrapper style={{ alignItems: 'center', marginRight: sizes.marginHorizontal / 2, ...iconContainerRight }}>
                                        <Icon name={iconNameRight} type={iconTypeRight} size={iconSizeRight ? iconSizeRight : sizes.icons.medium} color={iconColorRight ? iconColorRight : colors.appTextColor5} iconStyle={iconStyleRight} onPress={onPressIconRight} />
                                    </Wrapper>
                                    :
                                    null
                    }
                </View>
            </Wrapper>
            {
                error ?
                    <Wrapper animation="shake">
                        <Spacer isTiny />
                        <Text isSmall style={[{ color: colors.error, textAlign: 'right' }]}>{error}</Text>
                    </Wrapper>
                    :
                    null
            }
        </TouchableOpacity>
    );
}

const Counter = ({
    iconNameRight, inputRef, iconTypeRight, returnKeyLabel,
    returnKeyType, onSubmitEditing, onPress,
    maxLength, autoFocus, title, isButton,
    duration, titleStyle, placeholder, editable,
    animation, multiline, onFocus, onBlur,
    onChangeText, secureTextEntry, value,
    iconColorRight, iconSizeRight, containerStyle, right1, iconNameRight1, customIconRight1, Language,
    inputContainerStyle, onPressIconRight, inputStyle,
    right, keyboardType, iconStyleRight, customIconRight, error,
    left, customIconLeft, iconNameLeft, iconTypeLeft, iconSizeLeft, textStyle,
    iconColorLeft, iconStyleLeft, onPressIconLeft, end, start, gradiantColors, isGradient,
    flagCode, increment, decrement, counter,
    flageSize,
    placeholderTextColor
}) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            disabled={!onPress}
            style={[{ marginHorizontal: sizes.marginHorizontal }, containerStyle]}>
            {
                title ?
                    <Wrapper style={{ marginHorizontal: 0 }}>
                        <Text isInputTitle style={[{}, titleStyle]}>{title}</Text>
                        <Spacer isTiny />
                    </Wrapper>
                    :
                    null
            }
            <Wrapper style={[appStyles.inputContainerColored, {
                borderRadius: sizes.inputRadius,
                borderWidth: responsiveHeight(0.1),
                backgroundColor: colors.inputfieldColor1,
                marginHorizontal: 0

            }, inputContainerStyle]}>
                {
                    left ?
                        left
                        :
                        flagCode ? // Replace icon with CountryFlag if flagCode is provided
                            <Wrapper style={{ alignItems: 'center', marginLeft: sizes.marginHorizontal / 2 }}>
                                <CountryFlag isoCode={flagCode ? flagCode : 'US'} size={flageSize} style={iconStyleLeft} />
                            </Wrapper>
                            :
                            customIconLeft ?
                                <Wrapper style={{ alignItems: 'center', marginLeft: sizes.marginHorizontal / 2 }}>
                                    <Icons.Custom icon={customIconLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor1} containerStyle={iconStyleLeft} />
                                </Wrapper>
                                :
                                iconNameLeft ?
                                    <Wrapper style={{ alignItems: 'center', marginLeft: sizes.marginHorizontal / 2 }}>
                                        <Icon name={iconNameLeft} type={iconTypeLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor4} iconStyle={iconStyleLeft} onPress={onPressIconLeft} />
                                    </Wrapper>
                                    :
                                    null
                }
                <View style={{ flex: 1, }}>
                    {
                        onPress ?
                            <Wrapper marginHorizontalBase style={{ height: sizes.inputHeight, justifyContent: 'center', }}>
                                <Text style={textStyle}>{value ? value : placeholder}</Text>
                            </Wrapper>
                            :
                            <ScrollViews.KeyboardAvoiding horizontal contentContainerStyle={{ height: height(4), top: height(1.4) }} style={{ justifyContent: 'center', alignItems: 'center' }} >
                                <Wrapper alignItemsCenter flexDirectionRow marginHorizontalTiny>
                                    {Language && Language.length > 0 ? (
                                        Language.map((lang, index) => (
                                            <Wrapper key={index} style={{ flex: 0, paddingHorizontal: width(4), marginRight: width(2), paddingVertical: height(0.5), borderRadius: sizes.cardRadius }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} isGradient gradiantColors={[colors.appColor2, colors.appColor2, colors.appColor3]}>
                                                <Text style={{ fontFamily: appFonts.interMedium, fontSize: fontSizes.small, color: colors.appTextColor5 }}>{lang}</Text>
                                            </Wrapper>
                                        ))
                                    ) : (
                                        <Text style={{ fontSize: fontSizes.regular, fontFamily: appFonts.interRegular, color: colors.appTextColor1, marginLeft: width(5) }}>{placeholder}</Text>
                                    )}
                                </Wrapper>
                            </ScrollViews.KeyboardAvoiding>
                    }
                </View>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                    {
                        right1 ?
                            right1
                            :
                            customIconRight1 ?
                                <Wrapper style={{ alignItems: 'center', marginLeft: sizes.marginHorizontal / 2 }}>
                                    <Icons.Custom end={end} start={start} gradiantColors={gradiantColors} isGradient={isGradient} icon={customIconRight1} size={iconSizeRight ? iconSizeRight : sizes.icons.medium} color={iconColorRight ? iconColorRight : null} containerStyle={iconStyleRight} onPress={onPressIconRight} />
                                </Wrapper>
                                :
                                iconNameRight1 ?
                                    <Wrapper style={{ alignItems: 'center', marginRight: sizes.marginHorizontal }}>
                                        <Icon name={iconNameRight1} type={iconTypeRight} size={iconSizeRight ? iconSizeRight : sizes.icons.medium} color={iconColorRight ? iconColorRight : colors.appTextColor5} iconStyle={iconStyleRight} onPress={onPressIconRight} />
                                    </Wrapper>
                                    :
                                    null
                    }
                </View>
                {
                    right ?
                        right
                        :
                        customIconRight ?
                            <View style={{ flex: 0.5 }}>
                                <Wrapper style={{ marginLeft: sizes.marginHorizontal / 2, marginRight: sizes.marginHorizontal / 2 }}>
                                    <Wrapper alignItemsCenter justifyContentSpaceBetween flexDirectionRow>
                                        <Icons.CounterButton isRound buttonColor={colors.transparent} buttonSize={sizes.icons.mediumLarge} customIcon={appIcons.minus_1} iconSize={iconSizeRight ? iconSizeRight : sizes.icons.medium} iconColor={iconColorRight ? iconColorRight : colors.appTextColor1} buttonStyle={iconStyleRight} onPress={decrement} />
                                        <Text style={{ fontFamily: appFonts.satoshiRegular, color: colors.appTextColor3, fontSize: fontSizes.medium }}>{counter}</Text>
                                        <Icons.CounterButton isRound buttonColor={colors.transparent} buttonSize={sizes.icons.mediumLarge} customIcon={appIcons.plus_1} iconSize={iconSizeRight ? iconSizeRight : sizes.icons.medium} iconColor={iconColorRight ? iconColorRight : colors.appTextColor1} buttonStyle={iconStyleRight} onPress={increment} />
                                    </Wrapper>

                                </Wrapper>
                            </View>
                            :
                            null

                }

            </Wrapper>
            {
                error ?
                    <Wrapper animation="shake">
                        <Spacer isTiny />
                        <Text isSmall style={[{ color: colors.error, textAlign: 'right' }]}>{error}</Text>
                    </Wrapper>
                    :
                    null
            }
        </TouchableOpacity>
    );
}


export const Phone = ({
    iconNameRight, inputRef, iconTypeRight, returnKeyLabel,
    returnKeyType, onSubmitEditing, onPress,
    maxLength, autoFocus, title, isButton,
    duration, titleStyle, placeholder, editable,
    animation, multiline, onFocus, onBlur,
    onChangeText, secureTextEntry, value,
    iconColorRight, iconSizeRight, containerStyle,
    inputContainerStyle, onPressIconRight, inputStyle,
    right, keyboardType, iconStyleRight, customIconRight, error,
    left, customIconLeft, iconNameLeft, iconTypeLeft, iconSizeLeft,
    iconColorLeft, iconStyleLeft, onPressIconLeft,
    placeholderTextColor, textStyle
}) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            disabled={!onPress}
            style={[{ marginHorizontal: sizes.marginHorizontal }, containerStyle]}>
            {
                title ?
                    <Wrapper style={{ marginHorizontal: 0 }}>
                        <Text isInputTitle style={[{}, titleStyle]}>{title}</Text>
                        <Spacer isTiny />
                    </Wrapper>
                    :
                    null
            }
            <Wrapper style={[appStyles.inputContainerColored, {
                borderRadius: sizes.inputRadius,
                borderWidth: responsiveHeight(0.1),
                backgroundColor: colors.inputfieldColor1,
                marginHorizontal: 0
            }, inputContainerStyle]}>
                {/* <Wrapper style={{width:width(100)}}> */}
                {
                    onPress ?
                        <Wrapper marginHorizontalBase style={{ height: sizes.inputHeight, justifyContent: 'center' }}>
                            <Text isMedium style={value ? null : appStyles.textGray}>{value ? value : placeholder}</Text>
                        </Wrapper>
                        :
                        <PhoneInput

                            ref={inputRef}


                            onChangeFormattedText={onChangeText}
                            textProps={{
                                placeholder: placeholder || '(###) ###-####',
                                placeholderTextColor: colors.placeHolderColor
                            }}
                            autoFormat
                            editable={editable}
                            autoFocus={autoFocus}
                            returnKeyLabel={returnKeyLabel}
                            returnKeyType={returnKeyType}
                            onSubmitEditing={onSubmitEditing}
                            multiline={multiline}
                            placeholderTextColor={placeholderTextColor || '#21212180'}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            secureTextEntry={secureTextEntry}
                            maxLength={maxLength}
                            textStyle={textStyle}
                            flagStyle={{ width: width(6) }}
                            style={[appStyles.inputField, { width: null, height: sizes.inputHeight, paddingHorizontal: sizes.marginHorizontal }, inputStyle]}
                            textContainerStyle={{ borderRadius: sizes.inputRadius, backgroundColor: colors.inputfieldColor1 }}
                        />
                }
                {/* </Wrapper> */}
            </Wrapper>
            {
                error ?
                    <Wrapper animation="shake">
                        <Spacer isTiny />
                        <Text isSmall style={[{ color: colors.error, textAlign: 'right' }]}>{error}</Text>
                    </Wrapper>
                    :
                    null
            }
        </TouchableOpacity>
    );
}
export const DropDown = ({
    onPress, titleStyle, placeholder, containerStyles, placeholderStyle, onChange,
    inputContainerStyle, inputStyle, error, data, title, customIconLeft, iconSizeLeft,
    iconColorLeft, iconNameLeft, iconTypeLeft, itemText, iconStyleLeft, onPressIconLeft, left, values
}) => {
    const [value, setValue] = useState(values || null);
    const [isFocus, setIsFocus] = useState(false);
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            disabled={!onPress}
            style={[{ marginHorizontal: sizes.marginHorizontal }, containerStyles]}>
            {title ?
                <Wrapper style={{ marginHorizontal: 0 }}>
                    <Text style={[{}, titleStyle]}>{title}</Text>
                    <Wrapper style={{ height: 5 }} />
                </Wrapper>
                : null
            }
            <Wrapper style={[appStyles.inputContainerColored, {
                borderRadius: sizes.inputRadius,
                borderWidth: responsiveHeight(0.1),
                borderColor: colors.inputTextBorder,
                backgroundColor: colors.inputfieldColor1,
                marginHorizontal: 0
            }, inputContainerStyle]}>
                {
                    left ?
                        left
                        :
                        customIconLeft ?
                            <Wrapper style={{ alignItems: 'center', marginLeft: sizes.marginHorizontal / 2 }}>
                                <Icons.Custom icon={customIconLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor1} containerStyle={iconStyleLeft} />
                            </Wrapper>
                            :
                            iconNameLeft ?
                                <Wrapper style={{ alignItems: 'center', marginLeft: sizes.marginHorizontal / 2 }}>
                                    <Icon name={iconNameLeft} type={iconTypeLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor4} iconStyle={iconStyleLeft} onPress={onPressIconLeft} />
                                </Wrapper>
                                :
                                null
                }
                {onPress ?
                    <Wrapper style={{ height: sizes.inputHeight, justifyContent: 'center' }}>
                        <Text style={value ? null : appStyles.textGray}>{value ? value : placeholder}</Text>
                    </Wrapper>
                    :
                    <Dropdown
                        data={data}
                        labelField="label"
                        valueField="value"
                        placeholderStyle={[{ color: colors.placeHolderColor, fontFamily: appFonts.satoshiRegular, fontSize: fontSizes.regular }, placeholderStyle]}
                        placeholder={!isFocus ? placeholder : '...'}
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                            if (onChange) onChange(item);
                        }}
                        selectedTextStyle={{ color: colors.appTextColor1, fontFamily: appFonts.satoshiRegular, fontSize: fontSizes.regular }}
                        // placeholderStyle={{color:colors.placeHolderColor}}
                        style={[appStyles.inputField, { width: null, height: sizes.inputHeight, paddingHorizontal: sizes.marginHorizontal }, inputStyle]}
                        containerStyle={{ borderRadius: width(2), backgroundColor: colors.inputfieldColor1 }}
                        itemTextStyle={[{ color: colors.appTextColor1 }, itemText]}
                        itemContainerStyle={{ marginVertical: width(1), borderRadius: width(2), }}
                        renderRightIcon={() => (
                            <Icons.Custom size={sizes.icons.tiny} icon={appIcons.dropDown} />
                        )}
                    />
                }
            </Wrapper>
            {error ?
                <Wrapper style={{ animation: 'shake' }}>
                    <View style={{ height: 5 }} />
                    <Wrapper style={[{ color: colors.error, textAlign: 'right' }]}>{error}</Wrapper>
                </Wrapper>
                : null
            }
        </TouchableOpacity>
    );
};

const Bordered = ({
    onPress, iconContainerStyle, autoFocus,
    //right params
    right, iconNameRight, iconTypeRight, iconSizeRight, iconColorRight, iconStyleRight, onPressIconRight,
    //left params
    left, customIconLeft, iconNameLeft, iconTypeLeft, iconColorLeft, iconSizeLeft, iconStyleLeft, onPressIconLeft,
    //input params
    placeholder, placeholderTextColor, onFocus, onChangeText, secureTextEntry, value, containerStyle, inputStyle }) => {
    return (
        <TouchableOpacity
            disabled={!onPress}
            onPress={onPress}
            activeOpacity={1}
            style={[appStyles.inputContainerBorderd, {
                borderRadius: sizes.inputRadius,
                borderWidth: 1,
                borderColor: colors.appBgColor3
            }, containerStyle]}>
            {
                left ?
                    left
                    :
                    customIconLeft ?
                        <Wrapper style={[{ alignItems: 'center', marginLeft: sizes.marginHorizontal }, iconContainerStyle]}>
                            <Icons.Custom icon={customIconLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor1} containerStyle={iconStyleLeft} />
                        </Wrapper>
                        :
                        iconNameLeft ?
                            <Wrapper style={[{ alignItems: 'center', marginLeft: sizes.marginHorizontal }, iconContainerStyle]}>
                                <Icon name={iconNameLeft} type={iconTypeLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appBgColor3} iconStyle={iconStyleLeft} onPress={onPressIconLeft} />
                            </Wrapper>
                            :
                            null
            }
            <View style={{ flex: 1 }}>
                {
                    onPress ?
                        <Wrapper marginHorizontalBase style={[{ height: sizes.inputHeight, justifyContent: 'center', }, inputStyle]}>
                            <Text isMedium style={value ? null : appStyles.textLightGray}>{value ? value : placeholder}</Text>
                        </Wrapper>
                        :
                        <TextInput
                            onChangeText={onChangeText}
                            value={value}
                            placeholder={placeholder}
                            onFocus={onFocus}
                            autoFocus={autoFocus}
                            placeholderTextColor={placeholderTextColor ? placeholderTextColor : colors.appBgColor3}
                            secureTextEntry={secureTextEntry}
                            style={[appStyles.inputField, { width: null, height: sizes.inputHeight, paddingHorizontal: sizes.marginHorizontal / 2 }, inputStyle]}

                        />
                }
            </View>
            <View style={{}}>
                {
                    right ?
                        right
                        :
                        iconNameRight ?
                            <Wrapper style={{ alignItems: 'center', marginRight: sizes.marginHorizontal }}>
                                <Icon name={iconNameRight} type={iconTypeRight} size={iconSizeRight ? iconSizeRight : sizes.icons.medium} color={iconColorRight ? iconColorRight : colors.appTextColor5} iconStyle={iconStyleRight} onPress={onPressIconRight} />
                            </Wrapper>
                            :
                            null
                }
            </View>
        </TouchableOpacity>
    );
}
const Underlined = ({
    onPress, inputRef, autoFocus, left, keyboardType, right, error,
    editable, titleStyle, title, maxLength, customIconLeft,
    iconNameLeft, multiline, iconNameRight, placeholderTextColor,
    iconTypeLeft, iconTypeRight, iconSizeLeft, iconSizeRight,
    iconColorLeft, iconColorRight, iconStyleLeft, iconStyleRight,
    onPressIconLeft, onPressIconRight, placeholder, onFocus, onBlur,
    onChangeText, secureTextEntry, value, containerStyle, inputContainerStyle,
    inputStyle, titleStatic, autoCapitalize, children, inputBorderStyle }) => {


    const [titleMarginBottom] = useState(new Animated.Value(0))
    //const [titleSize] = useState(new Animated.Value(fontSizes.regular))
    const defaultTitleBottomMargin = height(4.5)
    const FocusedTitleMarginBottom = defaultTitleBottomMargin
    //const [titleMarginBottom, setTitleMarginBottom] = useState(0)
    //const [titleSize, setTitleSize] = useState(fontSizes.input)
    const moveTitleUp = () => {
        Animated.timing(titleMarginBottom, {
            toValue: defaultTitleBottomMargin,
            duration: 250,
            speed: 50,
            useNativeDriver: false
        }).start();
        // Animated.spring(titleSize, {
        //     toValue: fontSizes.small,
        //     duration: 250,
        //    // useNativeDriver: true
        // }).start();
    };
    const moveTitleDown = () => {
        Animated.timing(titleMarginBottom, {
            toValue: 0,
            duration: 250,
            speed: 50,
            useNativeDriver: false
        }).start();
        // Animated.spring(titleSize, {
        //     toValue: fontSizes.regular,
        //     duration: 250,
        //   //  useNativeDriver: true
        // }).start();
    };
    const onFocusInput = () => {
        moveTitleUp()
    }
    const onBlurInput = () => {
        moveTitleDown()
    }

    const styles = StyleSheet.create({
        iconContainer: {
            alignItems: 'flex-end',
            paddingTop: title ? Platform.OS === 'ios' ? height(1.5) : height(2.5) : null,
        }
    })
    const defaultTintColor = colors.appTextColor1
    return (
        <TouchableOpacity disabled={!onPress} activeOpacity={1} onPress={onPress}>
            <Wrapper marginHorizontalBase style={[containerStyle]}>
                {
                    titleStatic ?
                        <>
                            <Text isInputTitle>{titleStatic}</Text>
                        </>

                        :
                        null
                }
                <Wrapper style={[appStyles.inputContainerUnderLined, {
                    //borderRadius: sizes.b,
                    borderBottomWidth: 1,
                    borderBottomColor: defaultTintColor,
                    marginHorizontal: 0
                }, inputBorderStyle]}>
                    {
                        left ?
                            left
                            :
                            customIconLeft ?
                                <Wrapper style={[styles.iconContainer]}>
                                    <Icons.Custom icon={customIconLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor1} containerStyle={iconStyleLeft} />
                                </Wrapper>
                                :
                                iconNameLeft ?
                                    <Wrapper style={[styles.iconContainer]}>
                                        <Icon name={iconNameLeft} type={iconTypeLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor1} iconStyle={iconStyleLeft} onPress={onPressIconLeft} />
                                    </Wrapper>
                                    :
                                    null
                    }
                    <Wrapper style={[{ flex: 7, justifyContent: 'center' }, inputContainerStyle]}>
                        <Wrapper isAbsolute style={{ top: 0, bottom: 0, ...appStyles.center, backgroundColor: 'transparent', }}>
                            <Wrapper style={{ marginBottom: value ? FocusedTitleMarginBottom : titleMarginBottom }}>
                                <Text isInputTitle style={[titleStyle, {}]}>{title}</Text>
                            </Wrapper>
                        </Wrapper>
                        <Wrapper style={{}}>
                            {
                                children ? children :
                                    onPress ?
                                        <Wrapper style={{ height: sizes.inputHeight, justifyContent: 'center' }}>
                                            {
                                                value ?
                                                    <Wrapper>
                                                        <Spacer height={title ? Platform.OS === 'ios' ? height(1.25) : height(1.25) : 0} />
                                                        <Text isMedium numberOfLines={1}>{value}</Text>
                                                    </Wrapper>
                                                    :
                                                    null
                                            }
                                        </Wrapper>
                                        :
                                        <TextInput
                                            ref={inputRef}
                                            onChangeText={onChangeText}
                                            value={value}
                                            keyboardType={keyboardType}
                                            placeholder={placeholder}
                                            autoFocus={autoFocus}
                                            autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
                                            onFocus={() => {
                                                onFocusInput();
                                                onFocus ? onFocus() : null
                                            }}
                                            onBlur={() => {
                                                onBlurInput(),
                                                    onBlur ? onBlur() : null
                                            }}
                                            editable={editable}
                                            underlineColorAndroid="transparent"
                                            maxLength={maxLength}
                                            multiline={multiline}
                                            placeholderTextColor={placeholderTextColor ? placeholderTextColor : colors.appTextColor4}
                                            secureTextEntry={secureTextEntry}
                                            style={[appStyles.inputField, { color: defaultTintColor, width: null, height: sizes.inputHeight, paddingTop: title ? Platform.OS === 'ios' ? height(1.5) : height(2.5) : null, paddingHorizontal: 0 }, inputStyle]}
                                        />
                            }
                        </Wrapper>
                    </Wrapper>

                    {
                        right ?
                            right
                            :
                            iconNameRight ?
                                <Wrapper alignItemsFlexEnd style={[styles.iconContainer]}>
                                    <Icon name={iconNameRight} type={iconTypeRight} size={iconSizeRight ? iconSizeRight : sizes.icons.medium} color={iconColorRight ? iconColorRight : colors.appTextColor1} iconStyle={iconStyleRight} onPress={onPressIconRight} />
                                </Wrapper>
                                :
                                null
                    }
                </Wrapper>
                {
                    error ?
                        <Wrapper style={{}} animation="shake">
                            <Spacer isTiny />
                            <Icons.WithText
                                iconName="alert-circle-outline"
                                //title="New"
                                text={error}

                                tintColor={colors.error}
                                iconSize={sizes.icons.tiny}
                                textStyle={[{ fontSize: fontSizes.small }]}
                            />
                        </Wrapper>
                        :
                        null
                }
            </Wrapper>
        </TouchableOpacity>
    );
}


const SearchBar = ({ value, searchButton, placeholder, iconColorLeft, iconContainerRight, iconStyleLeft, iconSizeRight, iconStyleRight, iconNameRight, customIconRight, iconColorRight, inputContainerStyle, onChangeText, right, onPressCross, ...props }) => {
    return (
        <Colored
            value={value}
            onChangeText={onChangeText}
            customIconLeft={appIcons.search}
            // iconNameLeft='search'
            // iconTypeLeft='Feather'
            iconStyleLeft={iconStyleLeft}
            iconColorLeft={iconColorLeft}
            iconSizeLeft={sizes.icons.mediumSmall}
            placeholder={placeholder ? placeholder : "Search"}
            inputContainerStyle={inputContainerStyle}
            searchButton={searchButton}
            // iconNameRight={(value && onPressCross) && 'close-circle'}
            iconNameRight={iconNameRight}
            customIconRight={customIconRight}
            iconColorRight={iconColorRight}
            iconTypeRight={'material-community'}
            iconStyleRight={iconStyleRight}
            iconSizeRight={iconSizeRight}
            onPressIconRight={onPressCross}
            right={right}
            iconContainerRight={iconContainerRight}
            inputStyle={{ height: responsiveHeight(6), paddingHorizontal: sizes.marginHorizontal / 2 }}
            {...props}
        />
    )
}

export { Colored, Bordered, Underlined, SearchBar, Counter }