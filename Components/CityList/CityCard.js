import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator, Pressable} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

import {openWeatherApi} from "../../src/openWeatherApi";
import {unixConverter} from "../../src/utilities";


export default function CityCard(props) {
    const [cityCurrentInfo, setCityCurrentInfo] = useState({});
    const [dateInfo, setDateInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        openWeatherApi.getCityCurrentDetails(props.cityName)
            .then((response) => {
                setCityCurrentInfo(response);
                setDateInfo(unixConverter(response.dt));
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, [props]);

    const IsLoadingComponent = () => {
        return (
            <LinearGradient
                // Background Linear Gradient
                colors={['#5374E7', '#77B9F5']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.background}
            >
                <ActivityIndicator size="large" color="#FFFFFF"/>
            </LinearGradient>
        )
    };

    const CityInfoComponent = () => {
        return (
            <View
                style={{
                    flex: 1,
                    marginLeft: 20
                }}
            >
                <Text
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={{
                        color: '#FFFFFF',
                        fontSize: 26,
                    }}
                >
                    {cityCurrentInfo.name}
                </Text>
                <Text
                    style={{
                        color: '#FFFFFF',
                        fontSize: 15
                    }}
                >{dateInfo.weekDay} {dateInfo.dayNumber},{'\n'}{dateInfo.month}
                </Text>
                <Text
                    style={{
                        color: '#FFFFFF',
                        fontSize: 12
                    }}
                >
                    {dateInfo.hourMinuteAmPm}
                </Text>
            </View>
        )
    };

    const IconComponent = () => {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center'
                }}
            >
                <View>
                    <Image
                        style={{
                            width: 84,
                            height: 84
                        }}
                        source={{uri: 'https://openweathermap.org/img/wn/' + cityCurrentInfo.weather[0].icon + '@2x.png'}}
                        resizeMode={'stretch'}
                    />
                </View>
            </View>
        )
    };

    const TemperatureComponent = () => {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    marginRight: 25
                }}
            >
                <Text
                    style={{
                        color: '#FFFFFF',
                        fontSize: 50,
                        fontWeight: 'bold',
                        lineHeight: 76
                    }}
                >{parseInt(cityCurrentInfo.main.temp)}°
                </Text>
            </View>
        )
    };

    return (
        isLoading ? (
            <IsLoadingComponent/>
        ) : (
            <Pressable
                onPress={() => {
                    props.navigation.navigate('CityDetails', {
                        cityName: cityCurrentInfo.name,
                        coordinates: cityCurrentInfo.coord
                    })
                }}
            >
                <LinearGradient
                    colors={['#5374E7', '#77B9F5']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.container}
                >
                    <CityInfoComponent/>
                    <IconComponent/>
                    <TemperatureComponent/>
                </LinearGradient>
            </Pressable>
        )

    );
}

const styles = StyleSheet.create({
    container: {

        height: 140,
        width: 340,
        borderRadius: 25,
        justifyContent: 'space-between',
        // flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
    },
    background: {
        height: 140,
        width: 340,
        borderRadius: 25,
        justifyContent: 'center',
        // flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        // flexDirection: 'row',
    }
});
