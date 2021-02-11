import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {unixConverter} from "../../src/utilities";

export default function NextDaysCard(props) {
    return (
        <View style={styles.container}>
            <Text
                style={styles.dayText}>
                {unixConverter(props.item.dt).weekDay}
            </Text>
            <Text
                style={styles.tempText}>
                {parseInt(props.item.temp.day)}°
            </Text>
            <Image
                style={{
                    width: 110,
                    height: 110
                }}
                source={{uri: 'https://openweathermap.org/img/wn/' + props.item.weather[0].icon + '@2x.png'}}
                resizeMode={'stretch'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        height: 220,
        width: 148,
        borderRadius: 20
    },
    dayText: {
        height:32,
        width: 104,
        marginTop: 20,
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize:20,
    },
    tempText: {
        height:51,
        width: 71,
        marginTop: 5,
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize:36,
        fontWeight: 'bold'
    }
});
