import { TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { width, height, totalSize } from 'react-native-dimension';
import { Icons, Spacer, Text, Wrapper } from '..'
import { appFonts, appIcons, colors, fontSizes, sizes } from '../../services'

const SearchResult = ({ search, searchButton, weatherCheck, getCurentLocation }) => {
    const updatedSearch = [
        { name: 'Get Current Location', country: '' }, // Custom entry for current location
        ...search
    ];
    return (
        <>
            {
                updatedSearch.length > 0 && searchButton ? (
                    <Wrapper
                        animation={searchButton ? 'fadeIn' : 'fadeOut'}
                        justifyContentCenter
                        backgroundColor={colors.appTextColor5}
                        //  paddingVerticalSmall 
                        marginHorizontalSmall

                        style={{ borderRadius: totalSize(2) }}
                    >
                        {
                            updatedSearch.map((item, index) => {
                                let shadowBottomColor = index + 1 !== updatedSearch.length;
                                return (
                                    <TouchableOpacity key={index}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            paddingVertical: width(3.5),
                                            paddingHorizontal: sizes.marginHorizontal,
                                            borderBottomWidth: shadowBottomColor ? height(0.1) : null,
                                            borderBottomColor: shadowBottomColor ? colors.borderColor1 : ''
                                        }}
                                        onPress={index === 0 ? ()=> getCurentLocation() : () => weatherCheck(index-1)}
                                    >
                                        <Icons.Custom icon={index === 0 ? appIcons.locationTag : appIcons.location} size={sizes.icons.mediumSmall} color={colors.iconColor11} />
                                        <Spacer isSmall horizontal />
                                        <Text style={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor1, fontSize: fontSizes.regular }}>{item.name}{index === 0 ? '':','} {item.country || ''}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </Wrapper>
                )
                    :
                    null
            }
        </>
    )
}

export default SearchResult