import { useState, useEffect, useCallback } from 'react';
import { BackHandler, StatusBar } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { width, height, totalSize } from 'react-native-dimension';
import { navigate, goBack } from '../../../../navigation/rootNavigation';
import { appFonts, appIcons, appImages, colors, fontSizes, routes, sizes } from '../../../../services';
import firestore from '@react-native-firebase/firestore';
import { DrawerActions } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { Images, Text, Wrapper } from '../../../../components';

export function useHooks() {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState('daily');

    const handleSelect = (option) => {
        setSelected(option);
    };

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);

    const handleBackPress = () => {
        navigate(routes.auth);
        return true;
    };
    const data = [
        { value: 50, customDataPoint: () => customDataPoint(), dataPointLabelComponent: () => customLabel('$221.00'), },
        { value: 80, customDataPoint: () => customDataPoint(), dataPointLabelComponent: () => customLabel('$221.00'), },
        { value: 20, customDataPoint: () => customDataPoint(), dataPointLabelComponent: () => customLabel('$221.00'), },
        { value: 70, customDataPoint: () => customDataPoint(), dataPointLabelComponent: () => customLabel('$221.00'), },
        { value: 25, customDataPoint: () => customDataPoint(), dataPointLabelComponent: () => customLabel('$221.00'), },
        { value: 60, customDataPoint: () => customDataPoint(), dataPointLabelComponent: () => customLabel('$221.00'), },
        { value: 40, customDataPoint: () => customDataPoint(), dataPointLabelComponent: () => customLabel('$221.00'), },
        { value: 30, customDataPoint: () => customDataPoint(), dataPointLabelComponent: () => customLabel('$221.00'), },
        { value: 90, customDataPoint: () => customDataPoint(), dataPointLabelComponent: () => customLabel('$221.00'), },
        { value: 60, customDataPoint: () => customDataPoint(), dataPointLabelComponent: () => customLabel('$221.00'), },
    ]
    const data2 = [
        { value: 20, customDataPoint: () => customDataPoint(), },
        { value: 40, customDataPoint: () => customDataPoint(), },
        { value: 60, customDataPoint: () => customDataPoint(), },
        { value: 20, customDataPoint: () => customDataPoint(), },
        { value: 65, customDataPoint: () => customDataPoint(), },
        { value: 20, customDataPoint: () => customDataPoint(), },
        { value: 90, customDataPoint: () => customDataPoint(), },
        { value: 60, customDataPoint: () => customDataPoint(), },
        { value: 80, customDataPoint: () => customDataPoint(), },
        { value: 20, customDataPoint: () => customDataPoint(), },
    ]

    const customDataPoint = () => {
        return (
            <Wrapper
                style={{
                    width: sizes.icons.tiny,
                    height: sizes.icons.tiny,
                    backgroundColor: colors.appColor1,
                    borderWidth: width(0.8),
                    borderRadius: sizes.cardRadius,
                    borderColor: colors.appColor5,
                }}
            />
        );
    };
    const customLabel = val => {
        return (
            <Wrapper flexDirectionRow>
                <Wrapper justifyContentCenter alignItemsCenter style={{ bottom: height(3), right: width(3.8) }}>
                    <Images.Simple source={appImages.withDraw} style={{ width: width(19), height: height(3), resizeMode: 'contain' }} />
                    <Wrapper alignItemsCenter justifyContentCenter isAbsoluteFill>
                        <Text style={[{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.tiny, color: colors.appTextColor5 }]}>{val}</Text>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        );
    };

    const historyData = [
        { id: '1', name: 'John Doe', status: 'Withdrawn', date: '19/03/2024', amount: '$26.82', image: appImages.profile1 },
        { id: '2', name: 'Jane Smith', status: 'Withdrawn', date: '20/03/2024', amount: '$34.50', image: appImages.profile2 },
        // Add more data as needed
      ];
      const generateMonths = (startMonth, numMonths) => {
        const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        const monthsArray = [];
    
        for (let i = 0; i < numMonths; i++) {
          monthsArray.push(monthNames[(startMonth + i) % 12]); // Loop through months
        }
    
        return monthsArray;
      };
    
      // Generate months dynamically based on data length
      const months = generateMonths(0, data.length);

    return {
        goBack,
        search,
        setSearch,
        // isDrawerOpen,
        // statusBarVisible,
        DrawerActions,
        handleSelect,
        selected,
        data,
        data2,
        historyData,
        months
    }
}