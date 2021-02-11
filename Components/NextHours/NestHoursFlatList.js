import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {LinearGradient} from "expo-linear-gradient";
import NextHoursCard from "./NextHoursCard";
import {Divider} from "react-native-elements";

export default function NestHoursFlatList(props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={props.data}
                horizontal={true}
                renderItem={({item, index}) => {
                    return (
                        <NextHoursCard
                            item={item}
                            index={index}
                        />
                    )
                }}
                keyExtractor={(item) => String(item.dt)}
                ItemSeparatorComponent={() => (<Divider style={{width: 30, backgroundColor: 'rgba(0, 0, 0, 0.0)' }}/>)}
            />
            <LinearGradient
                colors={['#FFFFFF', 'rgba(0, 0, 0, 0.0)']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.background}
            >
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flex: 1,
    },
    background: {
        marginTop: 30,
        height:5,
        width:'100%',
        justifyContent: 'center',
        position: 'absolute',
        marginLeft:20

    }
});
