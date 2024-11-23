import React from 'react'
import MapView, { Marker, OverlayComponent, PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';
import { Buttons, Headers, Icons, Spacer, StatusBars, Text, TextInputs, Wrapper } from '../../../components';
import { appFonts, appIcons, colors, fontSizes, sizes } from '../../../services';
import { totalSize, width, height } from 'react-native-dimension';
import { useHooks } from './hooks';
import { StyleSheet } from 'react-native';

export default function Index(props) {
  const { navigate, goBack, dispatch } = props.navigation

  const { handleMapPress, markerCoordinates } = useHooks() || {};

  const mapStyles = [

    {
      "featureType": "poi.business",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#cc6529"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#70757a"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    }

  ]
  return (
    <>
      <StatusBars.Dark backgroundColor={colors.transparent} />
      <Wrapper flex={0.915}
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
        backgroundColor={colors.appColor1}>
        <Wrapper marginHorizontalBase style={{
          // ...StyleSheet.absoluteFillObject,
          zIndex: 1,
        }}>
          <Headers.Primary
            onBackPress={() => goBack()}
            showBackArrow
            rightIconSource={appIcons.chevron_left}
            leftIconSource={appIcons.equalizer}
            leftIconSource2={appIcons.sort}

            rightButtonStyle={{ borderColor: colors.buttonBorder4 }}
            title={'LocalPin'}
            titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
            iconContainer={{ flexDirection: 'row' }}
            containerStyle={{ backgroundColor: colors.transparent, marginTop: sizes.marginTop, height: height(11) }} />
          <Wrapper marginHorizontalSmall>
            <TextInputs.Colored
              editable={false}
              title={'City Selected'}
              // value={truncatedAddress}
              containerStyle={{ marginHorizontal: 0, }}
              inputContainerStyle={{
                backgroundColor: colors.inputfieldColor1,
                borderColor: colors.inputfieldColor1,
                borderRadius: totalSize(2)
              }}
              customIconRight={appIcons.dropDown}
              iconColorRight={colors.iconColor1}
              iconSizeRight={sizes.icons.tiny}
              iconStyleRight={{
                marginRight: width(5)
              }}
              inputStyle={{
                fontSize: fontSizes.medium,
                fontFamily: appFonts.baloo2_Regular,
                color: colors.appTextColor3
              }}
              // onPressIconRight={() => navigate(routes.addAddress)}
              placeholder={'Select here'}
              placeholderTextColor={colors.placeHolderColor}
              titleStyle={{
                fontSize: fontSizes.regular,
                fontFamily: appFonts.satoshiBold,
                color: colors.appTextColor1
              }} />
            <Spacer />
            <Wrapper backgroundColor={colors.appColor1} paddingHorizontalBase paddingVerticalBase style={{ borderRadius: sizes.cardRadius }}>
              <Text style={{ fontFamily: appFonts.interBold, fontSize: fontSizes.h5_small, color: colors.appTextColor9 }}>Select a meetup point pin</Text>
              <Spacer isSmall />
              <Wrapper alignItemsCenter flexDirectionRow>
                <Icons.Custom size={sizes.icons.medium} icon={appIcons.pin} />
                <Spacer horizontal isSmall />
                <Wrapper isGradient style={{ flex: 0, paddingHorizontal: width(1), paddingVertical: height(0.3), borderRadius: sizes.cardRadius, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} gradiantColors={[colors.appColor2, colors.appColor2, colors.appColor3]}>
                  <Spacer horizontal isTiny />
                  <Text style={{ fontFamily: appFonts.interMedium, fontSize: fontSizes.small, color: colors.appTextColor5 }}>Maldives</Text>
                  <Icons.Button isRound buttonColor={colors.transparent} buttonSize={sizes.icons.small} iconSize={sizes.icons.tiny} customIcon={appIcons.close} />
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            // backgroundColor:'red',
            // marginTop: sizes.statusBarHeight,
            marginBottom: sizes.tabBarHeight,
            ...StyleSheet.absoluteFillObject,
          }}

          // mapType='standard'
          customMapStyle={mapStyles}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}

          howsUserLocation={false}  // Disable the user location indicator
          followsUserLocation={true}
          onMapLoaded={() => console.log('Map is load')}
          onError={(error) => console.log('Map error:', error)}
          onMapReady={() => console.log('Map is ready')}
          onPress={handleMapPress}
        >

          {/* <Headers.Primary
                onBackPress={() => goBack()}
                showBackArrow
                rightIconSource={appIcons.chevron_left}
                leftIconSource={appIcons.equalizer}
                leftIconSource2={appIcons.sort}

                leftButtonStyle2={{ borderColor: colors.transparent }}
                title={'Matching Result'}
                titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor6, fontSize: fontSizes.medium }}
                iconContainer={{ flexDirection: 'row' }}
                containerStyle={{ backgroundColor: colors.appColor1, marginTop: sizes.marginTop, height: height(11) }} /> */}

          {markerCoordinates && markerCoordinates.map((coordinate, index) => (
            <Marker coordinate={coordinate}
              key={index}
              style={{
                justifyContent: 'center',
                alignItems: 'center',

              }}
            >
              <Wrapper isGradient style={{
                flex: 0, justifyContent: 'center',
                borderRadius: sizes.cardRadius
              }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} gradiantColors={[colors.appColor2, colors.appColor2, colors.appColor3]}>
                <Spacer isTiny />
                <Wrapper alignItemsCenter flexDirectionRow>
                  <Spacer horizontal isTiny />
                  <Spacer horizontal isTiny />
                  <Icons.Custom color={colors.iconColor3} size={sizes.icons.tiny} icon={appIcons.pin} />
                  <Spacer horizontal isTiny />
                  <Text style={{ fontFamily: appFonts.interMedium, fontSize: fontSizes.small, color: colors.appTextColor5 }}>Location {index + 1}</Text>
                  <Spacer horizontal isTiny />
                  <Spacer horizontal isTiny />
                  <Spacer horizontal isTiny />

                </Wrapper>
                <Spacer isTiny />
              </Wrapper>
            </Marker>
          ))}
        </MapView>
        <Wrapper  marginHorizontalSmall style={{
          marginTop:height(50),
          zIndex: 1,
        }}>
          <Buttons.Colored
            // onPress={() => handlePayNow()}
            text={'Select'}
            gradientColors={[colors.buttonColor1, colors.buttonColor1, colors.buttonColor2]}
            textStyle={{
              color: colors.appTextColor5,
              fontFamily: appFonts.appTextMedium,
              fontSize: fontSizes.regular,
            }} />
        </Wrapper>
      </Wrapper>

    </>
  )
}

