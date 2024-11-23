import React from 'react';
import { height, width, totalSize } from 'react-native-dimension'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import Wrapper from '../../wrapper';
import Text from '../../text';
import { appFonts, appIcons, colors, fontSizes, routes, sizes } from '../../../services';
import Spacer from '../../spacer';
import { Icons, TextInputs } from '../..';
import { useNavigation } from '@react-navigation/native';

const PaymentCard = ({ item, toggle, selected, editCard }) => {
    const navigation = useNavigation();
    const isSelected = selected.includes(item.id);
    console.log(isSelected)
    // const truncatedUserName = userName.length > 50 ? `${userName.substring(0, 50)}...` : userName;
    // const truncatedNotificationText = notificationText.length > 110 ? `${notificationText.substring(0, 110)}...` : notificationText;
    // console.log(isSelect);
    return (
        <>
            <TouchableOpacity onPress={editCard}>
                <Wrapper alignItemsCenter flexDirectionRow>
                    <Wrapper style={{ marginTop: height(4) }}>
                        <Icons.Button onPress={() => toggle(item.id)} iconName={isSelected ? 'radio-btn-active' : 'radio-btn-passive'} isRound buttonColor={colors.transparent} iconColor={colors.iconColor6} buttonSize={sizes.icons.largeTiny} iconSize={sizes.icons.medium} iconType={'fontisto'} />
                    </Wrapper>
                    <Spacer horizontal isSmall />
                    <Wrapper flex={1}>
                        <TextInputs.Colored
                            editable={false}
                            title={item.title}
                            // value={truncatedAddress}
                            containerStyle={{ marginHorizontal: 0, marginTop: height(1), }}
                            inputContainerStyle={{
                                backgroundColor: colors.inputfieldColor1,
                                borderColor: colors.inputTextBorder,
                                borderRadius: totalSize(2)
                            }}
                            customIconLeft={appIcons.card}
                            customIconRight={appIcons.chevron_right}
                            iconColorRight={colors.iconColor1}
                            iconSizeRight={sizes.icons.tiny}
                            iconStyleRight={{
                                marginRight: width(5)
                            }}
                            inputStyle={{
                                fontSize: fontSizes.medium,
                                fontFamily: appFonts.appTextRegular,
                                color: colors.appTextColor1
                            }}
                            iconColorLeft={colors.iconColor1}
                            placeholder={item.placeholder}
                            placeholderTextColor={colors.placeHolderColor}
                            titleStyle={{
                                fontSize: fontSizes.regular,
                                fontFamily: appFonts.appTextBold,
                                color: colors.appTextColor3
                            }}
                        />
                    </Wrapper>

                </Wrapper>
            </TouchableOpacity>
            <Spacer isTiny />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        // padding: 10,
        // alignItems: 'center',

        backgroundColor: colors.notificationColor1,
        // borderBottomColor:colors.notificationBorder,
        // borderTopColor:colors.notificationBorder,
        // borderLeftColor: colors.transparent,
        // borderRightColor: colors.transparent,
        // borderWidth: height(0.1)
    },
    selected: {
        backgroundColor: colors.notificationColor2
    },
    userName: {
        color: colors.appTextColor1,
        fontFamily: appFonts.appTextBold,
        fontSize: fontSizes.regular
    },
    notificationText: {
        opacity: 0.75,
        color: colors.appTextColor1,
        fontFamily: appFonts.appTextRegular,
        fontSize: fontSizes.regular
    },
    timeStamp: {
        opacity: 0.5,
        color: colors.appTextColor1,
        fontFamily: appFonts.appTextRegular,
        fontSize: fontSizes.small

    },
});

export default PaymentCard;
