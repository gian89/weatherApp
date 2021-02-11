import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Provider} from 'react-redux'
import store from "./Redux/Store/store";

import {NavigationContainer} from '@react-navigation/native';
import AllNavigationContainer from "./Navigation/allNavigationContainer";


export default function App() {
    return (
        <Provider store={store}>

            <NavigationContainer>
                <AllNavigationContainer/>
            </NavigationContainer>
        </Provider>
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
