import React, { Component } from 'react';
import { Wrapper, Text, Headers, ChatMessagesListVertical, PostsListVerticalPrimary, UsersListVerticalPrimary, NotificationsList } from '../../../components';
import { useHooks } from './hooks'
import { totalSize, width, height } from 'react-native-dimension';
import { animations, colors } from '../../../services';

export default function Index(props) {
    const { navigate } = props.navigation

    const { dummyData, handlePressItem, clickedItems } = useHooks()
    return (
        <Wrapper animation={animations.bounceInRight}>
            <Headers.Primary showBackArrow iconContainer={{ flexDirection: 'row' }} title={'Notifications'} tintColor={'black'} containerStyle={{ marginTop: height(5), height: height(10), backgroundColor: colors.appColor11 }} />
            <Wrapper isCenter>
                <NotificationsList  clickedItems={clickedItems} handlePressItem={handlePressItem} data={dummyData}/>
            </Wrapper>
        </Wrapper>
    );
    // isSelect={isSelected}  onPressItem={handlePress}
}

