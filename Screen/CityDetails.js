import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';

import {LinearGradient} from "expo-linear-gradient";

import {openWeatherApi} from "../src/openWeatherApi";
import {unixConverter} from "../src/utilities";

import {Ionicons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';

import NestHoursFlatList from "../Components/NextHours/NestHoursFlatList";
import NextDaysFlatList from "../Components/NextDays/NextDaysFlatList";

export default function CityDetails({route, navigation}) {
    const {cityName, coordinates,} = route.params;
    const [isLoading, setIsLoading] = useState(true);
    const [cityCurrentInfo, setCityCurrentInfo] = useState({});
    const [cityDailyInfo, setCityDailyInfo] = useState({});
    const [cityHoursInfo, setCityHoursInfo] = useState({});
    const [dateInfo, setDateInfo] = useState({});


    useEffect(() => {
        openWeatherApi.getCityDetails(coordinates.lat, coordinates.lon)
            .then((response) => {
                setCityCurrentInfo(response.current);
                setDateInfo(unixConverter(response.current.dt));
                setCityDailyInfo(response.daily);
                setCityHoursInfo(response.hourly);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    const HeaderComponent = () => {
        return(
            <View
                style={{
                    marginTop: 30,
                    height: 45,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <Ionicons
                        style={{
                            marginLeft:20,
                            marginTop:10
                        }}
                        onPress={() =>{navigation.goBack()}}
                        name="arrow-back-sharp" size={24} color="#FFFFFF"/>
                </View>
                <View
                    style={{
                        flex: 6,
                    }}
                >
                    <Text
                        numberOfLines={1}
                        ellipsizeMode={'tail'}
                        style={{
                            // flex: 1,
                            textAlign: 'center',
                            color: '#FFFFFF',
                            fontSize: 32,
                            fontWeight: 'bold'
                        }}>
                        {cityName}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent:'flex-end'
                    }}
                >
                    <FontAwesome
                        style={{
                            marginRight:20,
                            marginTop:10
                        }}
                        name="plus-square-o" size={24} color="#FFFFFF"/>
                </View>
            </View>
        )
    };

    const TimeInfoComponent = () => {
        return (
            <View
                style={{
                    marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: '#FFFFFF',
                        fontSize: 20,
                        fontWeight: '500'
                    }}>
                    {dateInfo.weekDay} {dateInfo.dayNumber}, {dateInfo.month}
                </Text>
                <Text
                    style={{
                        marginTop: 10,
                        textAlign: 'center',
                        color: '#FFFFFF',
                        fontSize: 20,
                        // lineHeight: 48,
                        fontWeight: '300'
                    }}>
                    {cityCurrentInfo.weather[0].main}
                </Text>
            </View>
        )
    };

    const WeatherComponent = () => {
        return (
            <View
                style={{
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
            >
                <Image
                    style={{
                        width: 110,
                        height: 110
                    }}
                    source={{uri: 'https://openweathermap.org/img/wn/' + cityCurrentInfo.weather[0].icon + '@2x.png'}}
                    resizeMode={'stretch'}
                />
                <Text
                    style={{
                        height: 130,
                        width: 176,
                        textAlign: 'center',
                        color: '#FFFFFF',
                        fontSize: 110,
                        fontWeight: 'bold'
                    }}>
                    {parseInt(cityCurrentInfo.temp)}°
                </Text>
            </View>
        )
    };

    const NextHoursComponent = () => {
        return (
            <View
                style={{
                    height: 70,
                }}
            >
                <NestHoursFlatList
                    data={cityHoursInfo}
                />
            </View>
        )
    };

    const NextDaysComponent = () => {
        return (
            <View
                style={{
                    marginTop: 10
                }}
            >
                <NextDaysFlatList
                    data={cityDailyInfo}
                />
            </View>
        )
    };

    return (
        isLoading ? (
            <LinearGradient
                colors={['#5374E7', '#77B9F5']}
                style={styles.background}
            >
                <ActivityIndicator size="large" color="#FFFFFF"/>
            </LinearGradient>
        ) : (
            <LinearGradient
                colors={['#5374E7', '#77B9F5']}
                style={styles.container}
            >
                <HeaderComponent/>
                <TimeInfoComponent/>
                <WeatherComponent/>
                <NextHoursComponent/>
                <NextDaysComponent/>
            </LinearGradient>
        )
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    background: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    }
});

