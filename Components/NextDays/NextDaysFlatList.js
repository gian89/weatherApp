import React from 'react';
import {FlatList} from 'react-native';
import {Divider} from 'react-native-elements';
import NextDaysCard from "./NextDaysCard";

export default function NextDaysFlatList(props) {
    return (
        <FlatList
            data={props.data}
            horizontal={true}
            renderItem={({item}) => {
                return (
                    <NextDaysCard
                        item={item}
                    />
                )
            }}
            keyExtractor={(item) => String(item.dt)}
            ItemSeparatorComponent={() => (<Divider style={{width: 10, backgroundColor: 'rgba(0, 0, 0, 0.0)' }}/>)}
        />
    );
}
