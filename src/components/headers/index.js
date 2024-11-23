import React from 'react'
import { appIcons, appStyles, appSvgs, colors, fontSize, responsiveFontSize, responsiveHeight, responsiveWidth, sizes, useSizes } from '../../services'
//import {Icons, Wrapper, Text } from '..'
import { goBack } from '../../navigation/rootNavigation'
import * as Icons from '../icons';
import Wrapper from '../wrapper';
import Text from '../text';
import { height, totalSize, width } from 'react-native-dimension'
import { Pressable } from 'react-native';
import Spacer from '../spacer';
import * as StatusBars from '../statusBars';
import { Images } from '..';


// export const Primary = ({ onBackPress, title, right, left, showBackArrow,shadow,titleStyle,titleContainerStyle,containerStyle }) => {
//     return (
//         <Wrapper style={[appStyles.headerStyle,appStyles.justifyContentFlexstart, {  paddingTop: sizes.statusBarHeight*1.25,backgroundColor:'red' },shadow&&appStyles.shadow,containerStyle]}>
//             <Wrapper flexDirectionRow justifyContentSpaceBetween>
//                 <Wrapper isAbsolute style={[appStyles.center, { right: 0, left: 0, },titleContainerStyle]}>
//                     <Text style={[appStyles.headerTitleStyle,appStyles.textCenter,titleStyle]}>{title}</Text>
//                 </Wrapper>
//                 {
//                     left ? left :
//                         showBackArrow ?
//                             <Icons.Back
//                                 onPress={onBackPress ?onBackPress : goBack}
//                                 style={[appStyles.paddingHorizontalSmall,appStyles.paddingVerticalTiny,]}
//                             />
//                             :
//                             null
//                 }
//                 {right ? right : null}
//             </Wrapper>
//         </Wrapper>
//     )
// }

export const Primary = ({
    onBackPress, search, title, profilePic, right, searchPress,rightIconOnPress2,rightIconOnPress, rightIcon, leftIconSource, leftIconName,
    left, titleContainerStyle, centerTitle, tintColor, rightIconName, rightIconSource,
    containerStyle, headerTitle, alignTitleLeft, showBackArrow, leftButtonStyle, leftIconTintColor, leftIconSize,
    invertColors, titleStyle, leftContainerStyle,rightButtonStyle, rightIcon2, leftIconSource2, leftIconSize2, leftButtonStyle2, leftIconTintColor2, leftIconName2, iconColor2, iconContainer, iconColor, textColor, allowText, rightContainerStyle, textStyle, shadow, auth }) => {

    const { statusBarHeight, headerHeight, } = useSizes()
    const defaultTintColor = !invertColors ? colors.appTextColor6 : colors.appColor1
    const defaultBackgroundColor = !invertColors ? colors.appColor1 : colors.appBgColor1
    return (
        <Wrapper  style={[
            appStyles.headerStyle,
            {
                height: headerHeight,
                backgroundColor: defaultBackgroundColor, borderBottomWidth: 0,
            }, shadow && appStyles.shadowLight, containerStyle]}>
            {/* <StatusBars.Light /> */}
            <Wrapper flex={1} style={iconContainer} >
                {/* <Wrapper isAbsolute
                    style={[
                        { right: 0, left: 0, backgroundColor: 'green', },
                        alignTitleLeft ?
                            {
                                paddingLeft: width(17.5),
                                paddingRight: sizes.marginHorizontal
                            }
                            :
                            appStyles.center,
                        titleContainerStyle]}>
                    {
                        headerTitle ? headerTitle :
                            <Text isTinyTitle numberOfLines={1} style={{ color: tintColor ? tintColor : defaultTintColor }}>{title}</Text>
                    }
                </Wrapper> */}
                <Wrapper flex={1.5} alignItemsCenter style={[
                    // { backgroundColor: 'red' },

                    leftContainerStyle]}>
                    {
                        left ? left :
                            showBackArrow ?
                                <Pressable
                                    style={[{ flex: 1 }, appStyles.center]}
                                    onPress={onBackPress ? onBackPress : goBack}
                                >
                                    {/* <Wrapper > */}
                                    <Icons.Button
                                        customIcon={rightIconSource}
                                        iconName={rightIconName}
                                        iconColor={iconColor}
                                        iconSize={sizes.icons.tiny}
                                        buttonStyle={[{ backgroundColor: colors.buttonColor3, borderRadius: width(50), borderColor: colors.buttonBorder4, borderWidth: width(0.4) },  rightButtonStyle]}

                                        buttonSize={width(9)}
                                        //onPress={onBackPress}
                                        //onPress={onBackPress ? onBackPress : goBack}
                                        // style={{ marginLeft: sizes.marginHorizontal }}
                                        color={tintColor ? tintColor : defaultTintColor}
                                    />

                                    {/* </Wrapper> */}


                                </Pressable>
                                :
                                null
                    }
                </Wrapper>

                <Wrapper flex={7}
                    justifyContentCenter
                    flexDirectionRow
                    alignItemsCenter
                    style={[
                        // { backgroundColor: 'green', },
                        alignTitleLeft ?
                            appStyles.alignItemsFlexStart
                            :
                            appStyles.alignItemsCenter,
                        titleContainerStyle]}>
                    {
                        profilePic ?
                            <Wrapper justifyContentCenter alignItemsCenter marginHorizontalSmall>
                                <Images.SqareRound source={profilePic} size={sizes.images.mediumLarge} style={{ borderRadius: 10 }} />
                            </Wrapper>
                            :
                            null
                    }
                    {
                        headerTitle ? headerTitle :
                            <Text alignTextCenter style={[appStyles.headerTitleStyle, { color: tintColor ? tintColor : defaultTintColor, fontSize: !auth ? responsiveFontSize(18) : responsiveFontSize(18) }, titleStyle]}>{title}</Text>
                    }
                </Wrapper>

                {/* {right ?
                    right
                    :
                    <Wrapper flex={1.5}></Wrapper>
                } */}
                <Wrapper flex={1.5} flexDirectionRow style={rightContainerStyle}>
                    {
                        rightIcon ?
                            <Pressable
                                style={[{ flex: 1 }, appStyles.center]}
                                onPress={rightIconOnPress}
                            >
                                <Icons.Button
                                    customIcon={leftIconSource}
                                    iconName={leftIconName}
                                    iconColor={iconColor}
                                    iconSize={leftIconSize ? leftIconSize : sizes.icons.medium}
                                    buttonStyle={[{ backgroundColor: colors.buttonColor3, borderRadius: width(50), borderColor: colors.buttonBorder1, borderWidth: width(0.4) }, leftButtonStyle]}
                                    buttonSize={width(9)}
                                    color={leftIconTintColor ? leftIconTintColor : defaultTintColor}
                                />
                            </Pressable>
                            :
                            null
                    }
                    
                    {
                        rightIcon2 ?
                            <Pressable
                                style={[{ flex: 1 }, appStyles.center]}
                                onPress={rightIconOnPress2}
                            >
                                <Icons.Button
                                    customIcon={leftIconSource2}
                                    iconName={leftIconName2}
                                    iconColor={iconColor2}
                                    iconSize={leftIconSize2 ? leftIconSize : sizes.icons.medium}
                                    buttonStyle={[{ backgroundColor: colors.buttonColor3, borderRadius: width(50), borderColor: colors.buttonBorder1, borderWidth: width(0.4) }, leftButtonStyle2]}
                                    buttonSize={width(9)}
                                    color={leftIconTintColor2 ? leftIconTintColor : defaultTintColor}
                                />
                            </Pressable>
                            :
                            null
                    }
                </Wrapper>

            </Wrapper>
        </Wrapper>
    )
}

export const Auth = ({ ...PrimaryProps }) => {
    return (
        <Wrapper animation={'slideInDown'}>
            <Primary
                showBackArrow
                {...PrimaryProps}
            />
            <Wrapper alignItemsCenter backgroundColor={colors.appColor1} style={{ borderBottomRightRadius: 40, borderBottomLeftRadius: 40 }}>
                <Spacer isBasic />
                {/* <appSvgs.logo_white height={responsiveHeight(10)} width={responsiveWidth(80)} /> */}
                <Spacer isDoubleBase />
                <Spacer isBasic />
            </Wrapper>
        </Wrapper>
    )
}