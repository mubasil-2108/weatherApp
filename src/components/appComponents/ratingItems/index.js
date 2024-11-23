import React, { useEffect, useState } from 'react';
import { height, width } from 'react-native-dimension'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import Wrapper from '../../wrapper';
import Text from '../../text';
import { appFonts, appImages, colors, fontSizes, responsiveHeight, responsiveWidth, sizes } from '../../../services';
import Spacer from '../../spacer';
import { Images, Rating } from '../..';

export const RatingItems = ({ item }) => {
    return (
        <>
        <Wrapper marginHorizontalZero isBorderedWrapper style={{ width: width(70) }}>
            <Wrapper flexDirectionRow alignItemsCenter>
                <Images.Round size={sizes.images.medium} source={appImages.review} />
                <Spacer horizontal />
                <Wrapper>
                    <Text style={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor14, fontSize: fontSizes.small }}>{item.name}</Text>
                    <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor14, fontSize: fontSizes.tiny }}> {item.date}</Text>
                </Wrapper>
            </Wrapper>
            <Spacer isSmall />
            <Wrapper flex={1} flexDirectionRow style={{ flexWrap: 'wrap' }} >
                <Text style={{ textAlign: 'left', fontFamily: appFonts.appTextRegular, color: colors.appTextColor14, fontSize: fontSizes.small }}>{item.review}</Text>
            </Wrapper>
            <Spacer />
            <Wrapper>
                <Rating.Primary value={item.rating} iconType={'material-community'} />
            </Wrapper>
        </Wrapper>
        <Spacer horizontal isSmall/>
        </>
    );
};

const styles = StyleSheet.create({


});
