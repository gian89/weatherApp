import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        console.log("Stored Data: " + jsonValue);
        return jsonValue != null ? JSON.parse(jsonValue) : null;

    } catch (e) {
        console.log("errore AsyncStorage getItem: " + e);
        // error reading value
    }
};

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.log("errore AsyncStorage setItem: " + e);
        // saving error
    }
};

export default {getData, storeData};
