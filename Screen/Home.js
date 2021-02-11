import React, {useRef} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {useSelector} from "react-redux";

import CityFlatList from "../Components/CityList/CityFlatList";
import {SwipeableCityListModal} from "../Components/CityListModal/SwipeableModal";

import { FontAwesome } from '@expo/vector-icons';


export default function Home({navigation}) {
    const modalSwipeableCityListModalRef = useRef(null);

    const insets = useSafeAreaInsets();

    const myCity = useSelector(state => state.myCity);

    const HeaderComponent = () => {
        return (
            <View
                style={{
                    width: 215,
                    height: 78,
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: '#01175F',
                        fontSize:28
                    }}>
                    Good morning! {"\n"} Mario
                </Text>
            </View>
        )
    };

    const AddCityComponent = () => {
        return (
            <View
                style={{
                    top: 30,
                    width: 158,
                    height: 30,
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}
            >
                <Pressable
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                    onPress={()=>{
                        modalSwipeableCityListModalRef.current.showModal()
                    }}
                >
                    <FontAwesome name="plus-square-o" size={30} color="#01175F" />
                    <Text
                        style={{
                            marginLeft: 20,
                            fontWeight:'600',
                            fontSize: 20,
                            color: '#01175F'
                        }}
                    >Aggiungi città</Text>
                </Pressable>
            </View>
        )
    };

    const CityListComponent = () => {
        return (
            <View
                style={{
                    marginTop: 50,
                    flexGrow: 1,
                    addingBottom: insets.bottom,
                    marginBottom: 160
                }}
            >
                <CityFlatList
                    data={myCity}
                    navigation={navigation}
                />
            </View>
        )
    };

    return (
        <View style={styles.container}>
            <HeaderComponent/>
            <AddCityComponent/>
            <CityListComponent/>
            <SwipeableCityListModal ref={modalSwipeableCityListModalRef}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        top: 50
    },
});
