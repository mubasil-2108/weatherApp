import { FlatList, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { totalSize, width, height } from 'react-native-dimension';
import { Images, ScrollViews, Spacer, StatusBars, Text, Wrapper } from '../../../components'
import { appFonts, appImages, colors, fontSizes, routes, sizes } from '../../../services'
import { useHooks } from './hooks';

export default function Index(props) {
    const { navigate, goBack } = props.navigation
    const { chatData } = useHooks();
    const renderItem = ({ item }) => (
        <TouchableOpacity key={item.id} onPress={() => navigate(routes.chatScreen, { locale: 'locale' })}>
            <Wrapper paddingVerticalBase marginHorizontalBase>
                <Wrapper flexDirectionRow>
                    <Images.SqareRound source={item.image} size={sizes.images.large1} style={{ borderRadius: 10 }} />
                    <Spacer horizontal />
                    <Wrapper flex={1} >
                        <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>{item.name}</Text>
                        <Wrapper flex={1} flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
                            <Wrapper>
                                <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.small, color: colors.appTextColor6 }}>{item.message}</Text>
                            </Wrapper>
                            <Wrapper>
                                <Text style={{ fontFamily: appFonts.appTextRegular, fontSize: fontSizes.tiny, color: colors.appTextColor6 }}>{item.time}</Text>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </TouchableOpacity>
    );
    return (
        <Wrapper flex={0.915} backgroundColor={colors.appColor1} >
            <StatusBars.Dark backgroundColor={colors.appColor1} />
            <Spacer isDoubleBase />
            <Wrapper>
                <Wrapper paddingVerticalSmall justifyContentCenter alignItemsCenter>
                    <Text style={{ fontFamily: appFonts.appTextMedium, fontSize: fontSizes.medium, color: colors.appTextColor6 }}>Chats</Text>
                </Wrapper>

                <FlatList
                    data={chatData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <Wrapper style={{ borderWidth: 0.5, opacity: 0.2, color: colors.appTextColor6 }} />}
                    contentContainerStyle={{ paddingBottom: sizes.baseMargin }}
                    showsVerticalScrollIndicator={false}
                />
            </Wrapper>
        </Wrapper>
    )
}

