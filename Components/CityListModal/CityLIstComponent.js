import React, {useState, useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {allCityList} from "../../src/allCityList";

import {addCity} from "../../Redux/Slice/myCitySlice";
import {useDispatch, useSelector} from "react-redux";

import { FontAwesome } from '@expo/vector-icons';


export default function CityLIstComponent() {
    const myCity = useSelector(state => state.myCity);
    const dispatch = useDispatch();

    const [cityList, setCityList,] = useState([]);

    useEffect(() => {
        let filterCity = setFilter();
        setCityList(filterCity)
    }, [myCity]);

    const setFilter = () => {
        let filteredCityList = allCityList;
        if(!myCity){
            return filteredCityList;
        }
        filteredCityList = filteredCityList.filter(function (item) {
            return !myCity.includes(item);
        });
        return filteredCityList;
    };

    return (
        <View style={styles.container}>
            {cityList.map((item) => {
                return (
                    <Pressable
                        key={item}
                        onPress={() =>{
                            dispatch(addCity(item))
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                        <Text
                            style={{
                                fontSize: 30
                            }}>{item}
                        </Text>
                        <FontAwesome name="plus-square-o" size={30} color="#01175F" />
                        </View>
                    </Pressable>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});
