import React from 'react';

import {AntDesign} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {AnimatedTabBarNavigator} from "react-native-animated-nav-tab-bar";

import Search from "../Screen/Search";
import Position from "../Screen/Position";

import CityNavigation from "./CityNavigation";

const Tabs = AnimatedTabBarNavigator();

export default function tabBarNavigator() {
    return (
        <Tabs.Navigator
            tabBarOptions={{
                activeTintColor: "#2F7C6E",
                inactiveTintColor: "#222222",
                activeBackgroundColor: 'rgba(0, 0, 0, 0.0)'
            }}
            appearence={{
                floating: true,
                whenActiveShow: 'icon-only',
                dotSize: 'small'
            }}
        >
            <Tabs.Screen
                name="Home"
                component={CityNavigation}
                options={{
                    tabBarIcon: ({focused, color, size}) => (
                        <AntDesign
                            name="home"
                            size={24}
                            color={focused ? '#01175F' : "#787A94"}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({focused, color, size}) => (
                        <AntDesign
                            name="search1"
                            size={24}
                            color={focused ? '#01175F' : "#787A94"}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="Position"
                component={Position}
                options={{
                    tabBarIcon: ({focused, color, size}) => (
                        <Feather
                            name="map-pin"
                            size={24}
                            color={focused ? '#01175F' : "#787A94"}
                        />
                    )
                }}
            />
        </Tabs.Navigator>
    )
};
