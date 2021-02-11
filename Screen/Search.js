import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {storeData} from "../src/AsyncStorageFunction";
import {flushStore} from "../Redux/Slice/myCitySlice"
import {useDispatch, useSelector} from "react-redux";

export default function Search() {
    const dispatch = useDispatch();
    function flushAllStore() {
        storeData('cityList', []);
        dispatch(flushStore());
    }

    return (
        <View style={styles.container}>
            <Text>Search</Text>
            <Button title={'Flush Store'} onPress={
                ()=>{flushAllStore()}
            }/>
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
