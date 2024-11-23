import React from 'react'
import { StatusBar } from 'react-native'
import { colors } from '../../services'


export const Dark = ({backgroundColor,hidden}) => {
    return (
        <StatusBar
            translucent
            hidden={hidden}
            barStyle="dark-content"
            backgroundColor={backgroundColor}
        />
    )
}

export const Light = ({backgroundColor, hidden}) => {
    return (
        <StatusBar
            translucent
            hidden={hidden}
            barStyle="light-content"
           // backgroundColor={colors.appBgColor6 + '40'}
            backgroundColor={backgroundColor}
        />
    )
}