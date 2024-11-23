import { useState } from "react";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { width, height, totalSize } from 'react-native-dimension';
import { Text, Wrapper } from "..";
import { StyleSheet } from "react-native";
import { appFonts, colors, fontSizes } from "../../services";

const TimePicker = () => {
    // Helper function to format hours and minutes
    const formatTimeUnit = (unit) => (unit < 10 ? `0${unit}` : unit.toString());

    const now = new Date();
    const currentHour = formatTimeUnit(now.getHours() % 12 || 12);
    const currentMinute = formatTimeUnit(now.getMinutes());
    const currentPeriod = now.getHours() >= 12 ? 'PM' : 'AM';

    const [selectedHour, setSelectedHour] = useState(currentHour);
    const [selectedMinute, setSelectedMinute] = useState(currentMinute);
    const [selectedPeriod, setSelectedPeriod] = useState(currentPeriod);

    // Generate hours, minutes, and periods options
    const hours = Array.from({ length: 12 }, (_, i) => formatTimeUnit(i + 1));
    const minutes = Array.from({ length: 60 }, (_, i) => formatTimeUnit(i));
    const periods = ['PM', 'AM'];
    const handleHourChange = (data) => {
        setSelectedHour(data);
    };

    const handleMinuteChange = (data) => {
        setSelectedMinute(data);
    };

    const handlePeriodChange = (data) => {
        setSelectedPeriod(data);
    };
    const getItemTextStyle = (item, selectedValue) => {
        return item === selectedValue
            ? styles.selectedText
            : styles.unSelectedText;
    };
    return (
        <Wrapper alignItemsCenter flexDirectionRow>
        <ScrollPicker    
            dataSource={hours}
            selectedIndex={periods.indexOf(selectedHour)}
            onValueChange={handleHourChange}
            wrapperHeight={180}
            wrapperBackground={colors.appColor1}
            itemHeight={60}
            renderItem={(item) => (
                <Text style={getItemTextStyle(item, selectedHour)}>
                    {item}
                </Text>
            )}
            highlightColor={colors.borderColor5}
            highlightBorderWidth={width(0.2)}
        />
    <ScrollPicker
        dataSource={minutes}
        selectedIndex={periods.indexOf(selectedMinute)}
        onValueChange={handleMinuteChange}
        wrapperHeight={180}
        renderItem={(item) => (
            <Text style={getItemTextStyle(item, selectedMinute)}>
                {item}
            </Text>
        )}
        wrapperBackground={colors.appColor1}
        itemHeight={60}   
        itemTextStyle={{ fontFamily: appFonts.interMedium, color: colors.appTextColor19, fontSize: fontSizes.h6 }}
        highlightColor={colors.borderColor5}
        highlightBorderWidth={width(0.2)}
    />
    <Wrapper isAbsolute style={{left:width(23)}}>
        <Text style={{ fontFamily: appFonts.interMedium, fontSize: fontSizes.h6, color: colors.appTextColor18 }}>:</Text>
    </Wrapper>
    <ScrollPicker
        dataSource={periods}
        selectedIndex={periods.indexOf(selectedPeriod)}
        onValueChange={handlePeriodChange}
        wrapperHeight={180}
        wrapperBackground={colors.appColor1}
        itemHeight={60}
        renderItem={(item) => (
            <Text style={getItemTextStyle(item, selectedPeriod)}>
                {item}
            </Text>
        )}
        style={{ fontFamily: appFonts.interMedium }}
        itemTextStyle={{ fontFamily: appFonts.interMedium, color: colors.appTextColor19, fontSize: fontSizes.h6 }}
        highlightColor={colors.borderColor5}
        highlightBorderWidth={width(0.2)}
    />
</Wrapper>
    )
}

const styles = StyleSheet.create({
    selectedText: {
        
        color: colors.appTextColor18,
        fontFamily: appFonts.interMedium,
        fontSize: fontSizes.h6
    },
    unSelectedText: {
        color: colors.appTextColor19,
        fontFamily: appFonts.interMedium,
        fontSize: fontSizes.h6
    },
})

export default TimePicker