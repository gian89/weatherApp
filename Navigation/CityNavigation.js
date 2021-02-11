import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from "../Screen/Home";
import CityDetails from "../Screen/CityDetails";

const cityStackNavigator = createStackNavigator();


export default function  CityNavigation() {

    return (

        <cityStackNavigator.Navigator
            screenOptions={{headerShown: false,}}>
            <cityStackNavigator.Screen name="HomeScreen" component={Home}/>
            <cityStackNavigator.Screen name="CityDetails" component={CityDetails}/>
        </cityStackNavigator.Navigator>
    )
}
