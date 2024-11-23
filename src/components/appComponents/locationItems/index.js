import React, { useEffect, useState } from 'react';
import { height, width } from 'react-native-dimension'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import Wrapper from '../../wrapper';
import Text from '../../text';
import { appFonts, colors, fontSizes, responsiveHeight, responsiveWidth, sizes } from '../../../services';
import Spacer from '../../spacer';
import { Images } from '../..';

export const LocationItems = ({ item }) => {
    return (
        <TouchableOpacity >
        {/* <Spacer/> */}
        <Wrapper alignItemsCenter>
          <Wrapper
            backgroundColor={item.isNearby ? colors.appColor5 : colors.transparent}
            // paddingHorizontalSmall
            justifyContentCenter
            alignItemsCenter
            // paddingVerticalSmall
            style={[
              { height: sizes.images.large1, width: sizes.images.large1, borderRadius: 50 },
              item.isNearby && { borderRadius: 50 },
            ]}>
            <Images.Round
              size={item.isNearby ? sizes.images.smallLarge : sizes.images.large1}
              style={item.isNearby ? { borderRadius: 0, resizeMode: 'contain' } : {}}
              source={item.source}
            />
          </Wrapper>
          <Wrapper marginVerticalTiny>
            <Text style={{ fontFamily: appFonts.appTextRegular, color: colors.appTextColor7, fontSize: fontSizes.regular }}>{item.text}</Text>
          </Wrapper>
        </Wrapper>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
   
   
});
