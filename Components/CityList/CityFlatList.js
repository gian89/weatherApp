import React from 'react';
import {FlatList} from 'react-native';

import {Divider} from 'react-native-elements';

import CityCard from "./CityCard";


export default function CityFlatList(props) {
    return (
        <FlatList
            data={props.data}
            renderItem={({item}) => {
                return (
                    <CityCard
                        cityName={item}
                        navigation={props.navigation}
                    />
                )
            }}
            keyExtractor={(item) => item}
            ItemSeparatorComponent={() => (<Divider style={{height: 20, backgroundColor: 'rgba(0, 0, 0, 0.0)' }}/>)}
        />
    );
}
