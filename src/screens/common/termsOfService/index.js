import React, { Component } from 'react';
import { Wrapper, Text, Headers, Icons, ScrollViews, Buttons, Spacer } from '../../../components';
import { useHooks } from './hooks'
import { totalSize, width, height } from 'react-native-dimension';
import { colors } from '../../../services';
import { color } from '@rneui/base';

export default function Index() {
    const { terms, text } = useHooks()
    return (
        <Wrapper isMain >
            <Headers.Primary showBackArrow iconContainer={{ flexDirection: 'row' }} title={'Terms & Conditions'} tintColor={'black'} containerStyle={{ marginTop: height(5), height: height(10), backgroundColor: colors.appColor11 }} />

            <ScrollViews.WithKeyboardAvoidingView
            >

                <Wrapper marginHorizontalSmall animation={'fadeInUp'}>
                  
                    <Spacer isBasic />
                    {
                        terms?.map((item, index) => {
                            const { label, detail } = item
                            return (
                                <Wrapper>
                                    <Text isMedium  style={{color:colors.appTextColor1}}>{detail}</Text>
                                    <Spacer isBasic />
                                    <Spacer isSmall />
                                </Wrapper>
                            )
                        })
                    }
                </Wrapper>
                <Spacer isBasic />
            </ScrollViews.WithKeyboardAvoidingView>
        </Wrapper>
    );
}

