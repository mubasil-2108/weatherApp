import React from 'react'
import Wrapper from '../wrapper';
import { Pressable, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { colors, responsiveHeight, responsiveWidth, sizes } from '../../services';
import * as Icons from '../icons';
import Text from '../text';
import { Icon } from '@rneui/base';

export const IconTitleArrow = ({ iconImage, iconName, iconType, iconSvg, title, onPress, left, right, invertColors, titleStyle, containerStyle, disableIconColor, arrowColor, iconContainerColor, ...props }) => {
    const defaulTintColor = !invertColors ? colors.appTextColor2 : colors.appTextColor6
    const defaulArrowColor = arrowColor || (!invertColors ? colors.appTextColor4 : colors.appTextColor6)
    const defaulBackgroundColor = iconContainerColor || (!invertColors ? colors.appBgColor1 : colors.appBgColor6)
    return (
        <Pressable
            activeOpacity={1}
            onPress={onPress}
        >
            <Wrapper flexDirectionRow justifyContentSpaceBetween marginHorizontalBase alignItemsCenter style={containerStyle} {...props}>
                <Wrapper flexDirectionRow alignItemsCenter>
                    {
                        left ? left :
                            iconImage || iconName || iconSvg ?
                                <Icons.Button
                                    customIcon={iconImage}
                                    iconName={iconName}
                                    iconType={iconType}
                                    svgIcon={iconSvg}
                                    iconColor={!disableIconColor && defaulTintColor}
                                    iconSize={responsiveWidth(5)}
                                    buttonColor={defaulBackgroundColor}
                                    buttonSize={responsiveWidth(10)}
                                    isRound
                                //buttonStyle={{ marginRight: sizes.marginHorizontal }}
                                />
                                :
                                null
                    }
                    <Text isMedium style={[{ color: defaulTintColor }, titleStyle]}>{title}</Text>
                </Wrapper>
                {
                    right ?
                        right :
                        <Icon
                            name='chevron-right'
                            type='feather'
                            color={defaulArrowColor}
                            size={sizes.icons.medium}
                        />
                }
            </Wrapper>
        </Pressable>
    )
}

export const CardView = ({ size, imageSource, title, onPress, titleStyle, invertColors, subContainerStyle, containerStyle, ...props }) => {
    const defaulTintColor = !invertColors ? colors.appTextColor2 : colors.appTextColor6
    return (
        <Pressable
            activeOpacity={1}
            onPress={onPress}
        >
            <Wrapper justifyContentSpaceBetween marginHorizontalSmall alignItemsCenter style={{ ...containerStyle }} {...props}>
                <Wrapper alignItemsCenter style={{ ...styles.subContainer, ...subContainerStyle }}>
                    <Wrapper >
                        <Icons.Custom
                            containerStyle={{ backgroundColo: colors.transparent }}
                            icon={imageSource}
                            size={size}
                            imageBGColor={colors.transparent}
                        />
                    </Wrapper>
                </Wrapper>

                <Text isMedium style={[{ color: defaulTintColor, marginTop: totalSize(1.5) }, titleStyle]}>{title}</Text>

            </Wrapper>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    subContainer: {
        borderColor: 'black',
        borderWidth: 1,
        width: responsiveWidth(40),
        height: responsiveHeight(12),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.borderColor3,
        borderRadius: totalSize(1),
        shadowColor: colors.shadowColor2,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 30,
        elevation: 8,
    }
})