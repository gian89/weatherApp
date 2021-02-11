import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import logo from '../../assets/Logo/logo.png'

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Image
                resizeMethod={"resize"}
                source={logo}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
