import React, { Component } from 'react';
import { Wrapper, Text, Logos, Icons, Images } from '../../../components';
import { totalSize, width, height } from 'react-native-dimension';
import { appFonts, appIcons, appImages, appStyles, appSvgs, colors, fontSizes, responsiveFontSize, responsiveHeight, responsiveWidth, sizes } from '../../../services';
import { color } from '@rneui/base';
import { useHooks } from './hooks';


function Splash() {
  const { showZoomIn } = useHooks()
  return (
    <Wrapper isMain isCenter backgroundColor={colors.appColor1}>
      <Wrapper justifyContentCenter alignItemsCenter flexDirectionRow>
        {/* <Wrapper animation={'fadeInLeftBig'} style={{}} >
          <Images.Simple  source={appIcons.localEyesLeft} style={{ left: sizes.doubleBaseMargin1, height: sizes.icons.xl1, width: sizes.icons.xxl,resizeMode:'contain' }} />
        </Wrapper> */}
        {!showZoomIn && (
          <Wrapper alignItemsCenter justifyContentCenter>
            <Images.Simple style={{ resizeMode: 'contain' }} source={appImages.mainLogo} size={sizes.icons.large} />
          </Wrapper>
        )}
        {showZoomIn && (
          <Wrapper alignItemsCenter justifyContentCenter>
            <Wrapper animation={'zoomIn'} alignItemsCenter justifyContentCenter>
              <Images.Simple style={{ resizeMode: 'contain' }} source={appImages.mainLogo} size={sizes.images.largeXLarge} />
            </Wrapper>
            <Wrapper duration={2000} animation={'fadeIn'} marginVerticalSmall>
              <Text style={{ fontFamily: appFonts.appTextBold, fontSize: fontSizes.medium, color: colors.appTextColor2 }}>LOCAL EYES</Text>
            </Wrapper>
          </Wrapper>
        )}
        {/* <Wrapper animation={'fadeInRightBig'} >
          <Images.Simple source={appIcons.localEyesRight} style={{ right: sizes.doubleBaseMargin, top: responsiveFontSize(5), height: sizes.icons.xl1, width: sizes.icons.xxl1, resizeMode:'contain' }} />
        </Wrapper> */}
      </Wrapper>

    </Wrapper>
  );
}

export default Splash;
