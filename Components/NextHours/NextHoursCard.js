import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {FontAwesome} from '@expo/vector-icons';
import {unixConverter} from "../../src/utilities";


export default function NextHoursCard(props) {
    return (
        <View style={styles.container}>
            <Text style={{...styles.text, fontSize: 15}}>
                {props.index === 0 ? 'Now' : unixConverter(props.item.dt).hoursAmPm }
            </Text>
                <FontAwesome
                    style={{
                        marginTop: 2
                    }}
                    name="circle" size={20} color='#FFFFFF'/>
            <Text
                style={{...styles.text, fontSize: 20}}>
                {parseInt(props.item.temp)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text :{
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
});
