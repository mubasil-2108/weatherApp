import React from 'react';
import { height, width } from 'react-native-dimension'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import Wrapper from '../../wrapper';
import Text from '../../text';
import { appFonts, appIcons, appImages, colors, fontSizes, responsiveHeight, responsiveWidth, routes, sizes } from '../../../services';
import Spacer from '../../spacer';
import { Buttons, Icons, Images } from '../..';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export const Places = ({ item }) => {
    const navigation = useNavigation();
    return (
        <Wrapper marginVerticalTiny flexDirectionRow>
            <Wrapper>
                <Images.SqareRound style={{ height: sizes.images.placeHeight, width: sizes.images.placeWidth }} source={item.source} />
            </Wrapper>
            <Spacer width={width(1)} />
        </Wrapper>
    );
};
