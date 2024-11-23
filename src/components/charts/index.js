
import React from 'react'
import { LineChart } from "react-native-gifted-charts";
import { width, height, totalSize } from 'react-native-dimension';
import { Images, Spacer, Text, Wrapper } from '..';
import { Dimensions } from 'react-native';
import { appFonts, appImages, colors, fontSizes, sizes, weatherImages } from '../../services';

export const LineCharts = ({ weatherForecast, timezone }) => {
    const chartData = Array.isArray(weatherForecast) ? weatherForecast.map((data) => {
        const temperatureKelvin = data.main.temp;
        const temperature = (temperatureKelvin - 273.15).toFixed(1);
        const sunriseTimestamp = data.dt;
        const sunriseDate = new Date(sunriseTimestamp * 1000);
        const time = new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit', timeZone: timezone }).format(sunriseDate);

        return {
            main: data.weather[0].main,
            time: time,         // Time in string format
            temperature: parseFloat(temperature), // Temperature value
        }
    }) : [];
    const data = chartData.length > 0 ? chartData.map(item => ({
        value: item.temperature, // Individual temperature value
        customDataPoint: () => customDataPoint(),
        labelComponent: () => customXAxisLabel(item.time,item.main),
        dataPointLabelComponent: () => {
            return (
                <Wrapper flexDirectionRow>
                <Wrapper justifyContentCenter alignItemsCenter style={{ top: height(3), left:width(4) }}>
                    {/* <Images.Simple source={appImages.heavyrain} style={{ width: width(19), height: height(3), resizeMode: 'contain' }} /> */}
                    <Wrapper alignItemsCenter justifyContentCenter >
                        <Text style={[{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.small, color: colors.appTextColor5 }]}>{item.temperature}&#176;</Text>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            )
        }
            // customLabel(item.temperature),
    })) : [];
    const customDataPoint = () => {
        return (
            <Wrapper
                style={{
                    width: sizes.icons.tiny,
                    height: sizes.icons.tiny,
                    backgroundColor: colors.appColor1,
                    borderWidth: width(0.8),
                    borderRadius: sizes.cardRadius,
                    borderColor: colors.appTextColor28,
                }}
            />
        );
    };
    
    const customXAxisLabel = (time,main)=>{
        return(
            <Wrapper alignItemsCenter>
                <Spacer isSmall/>
                <Wrapper justifyContentCenter alignItemsCenter style={{ bottom: height(2), }}>
                    <Images.Simple source={weatherImages[main]} size={sizes.images.small} style={{ resizeMode: 'contain' }} />
                    <Spacer isSmall/>
                    <Wrapper alignItemsCenter justifyContentCenter >
                        <Text style={[{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.small, color: colors.appTextColor5 }]}>{time}</Text>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        )
    }
    return (
        <Wrapper animation={'flipInX'} justifyContentCenter marginVerticalZero  marginHorizontalSmall style={{paddingTop:sizes.baseMargin, paddingBottom:sizes.searchBarHeight, borderRadius: sizes.inputRadius }} alignItemsCenter backgroundColor={colors.appBgColor3}>
            <LineChart
                data={data}
                width={width(85)}
                height={height(20)}
                thickness={width(0.8)}
                color={colors.appTextColor28}
                dashGap={width(4)}
                scrollAnimation={true}
                spacing={65}
                verticalLinesColor={colors.appBgColor4}
                xAxisColor={colors.transparent}
                yAxisColor={colors.transparent}
                yAxisIndicesColor={colors.appTextColor5}
                hideYAxisText
                hideOrigin
                curved />

        </Wrapper>
    )
}