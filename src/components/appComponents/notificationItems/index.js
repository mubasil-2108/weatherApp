import React from 'react';
import {height, width} from 'react-native-dimension'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import Wrapper from '../../wrapper';
import Text from '../../text';
import { appFonts, colors, fontSizes } from '../../../services';
import Spacer from '../../spacer';

const NotificationItem = ({id,isSelect,onPress, onHandlePress, userImage, userName, timeStamp, notificationText }) => {
    const truncatedUserName = userName.length > 50 ? `${userName.substring(0, 50)}...` : userName;
    const truncatedNotificationText = notificationText.length > 110 ? `${notificationText.substring(0, 110)}...` : notificationText;
    console.log(isSelect);
    return (
        <>
        <Wrapper paddingVerticalTiny>
            
            <TouchableOpacity onPress={() => onPress(id)} style={[styles.container, isSelect && styles.selected]}>
                <Wrapper paddingHorizontalSmall paddingVerticalTiny>
                    <Text style={styles.userName}>{truncatedUserName}</Text>
                    <Text style={styles.notificationText}>{truncatedNotificationText}</Text>
                    <Text style={styles.timeStamp}>{timeStamp}</Text>
                </Wrapper>
            </TouchableOpacity>
        </Wrapper>
        <Spacer isSmall height={height(0.1)} width={width(100)} style={{
            backgroundColor:colors.notificationBorder,
        }} />
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
        backgroundColor:colors.notificationColor2
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
        opacity:0.5,
        color: colors.appTextColor1,
        fontFamily: appFonts.appTextRegular,
        fontSize: fontSizes.small

    },
});

export default NotificationItem;
