import React, { useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput, Animated, Platform } from 'react-native'
import { Icon } from '@rneui/base';
import { height, totalSize, width } from 'react-native-dimension';
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

export { Colored, SearchBar }