import React from 'react'
import { View, Text, Image, StyleSheet, } from 'react-native'
import { colors, sizes, appStyles } from '../../services';
import * as Icons from '../icons';

export const Primary = ({
     textStyle, containerStyle, text, checked, 
     onPress,checkedIconName,uncheckedIconName,
     checkIconType,uncheckIconType,checkIconsize, customCheckIcon,customUnCheckIcon,
     checkedIconColor,uncheckedIconColor
    }) => {
    const defaultCheckedIconName =checkedIconName?checkedIconName: ''
    const defaultUncheckedIconName =uncheckedIconName?uncheckedIconName: 'checkbox-blank-outline'
    const defaultcheckIconType =checkIconType?checkIconType: 'material-community'
    const defaultUncheckIconType =uncheckIconType?uncheckIconType: 'material-community'
    const defaultCheckIconsize =checkIconsize?checkIconsize: sizes.icons.medium
    const defaultCheckedIconColor =checkedIconColor?checkedIconColor: null
    const defaultUncheckedIconColor =uncheckedIconColor?uncheckedIconColor: null
    const customBlank = customUnCheckIcon? customUnCheckIcon:null
    const customChecked= customCheckIcon? customCheckIcon:null
    return (
        <Icons.WithText
        customIcon={checked? customChecked:customBlank}
            text={text}
            iconName={checked ? defaultCheckedIconName : defaultUncheckedIconName}
            iconType={checked ? defaultcheckIconType : defaultUncheckIconType}
            iconSize={defaultCheckIconsize}
            tintColor={checked ? defaultCheckedIconColor : defaultUncheckedIconColor}
            onPress={onPress}
            textStyle={[styles.checkboxText, textStyle]}
            containerStyle={containerStyle}
        />
    );
}

const styles = StyleSheet.create({
    checkboxText: {
        ...appStyles.textRegular,
        // ...appStyles.textGray
    }
})
