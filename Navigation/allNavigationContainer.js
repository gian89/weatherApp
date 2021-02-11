import React, {useState, useEffect} from 'react';

import tabBarNavigator from "./tabBarNavigator";
import SplashScreen from '../Screen/SplashScreen/SplashScreen'

import {getData, storeData} from "../src/AsyncStorageFunction";

import {useDispatch, useSelector} from "react-redux";
import {setCityList} from "../Redux/Slice/myCitySlice";
import store from "../Redux/Store/store"

import {createStackNavigator} from '@react-navigation/stack';
const allNavigationStackNavigator = createStackNavigator();


export default function allNavigationContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();


    useEffect(() => {
        try {
            fetchData();
        } catch (e) {
            console.log("errore AsyncStorage: " + e);
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 100);
    }, []);

    async function fetchData() {
        try {
            let cityList = await getData('cityList');
            if (cityList === null) {
                cityList = [];
            }
            console.log('cityList', cityList);
            dispatch(setCityList(cityList));
            store.subscribe(() => {
                console.log("store subscribe: " + store.getState().myCity);
                storeData('cityList', store.getState().myCity)
            });
        } catch (e) {
            console.log("errore AsyncStorage: " + e);
        }
    }

    return (
        <allNavigationStackNavigator.Navigator screenOptions={{
            headerShown: false,
        }}>
            {isLoading ? (<allNavigationStackNavigator.Screen name="SplashScreen" component={SplashScreen}/>)
                : (
                    <allNavigationStackNavigator.Screen name="tabBarNavigator" component={tabBarNavigator}/>
                )}

        </allNavigationStackNavigator.Navigator>
    )
}
