import {createSlice} from "@reduxjs/toolkit";

export const myCitySlice = createSlice({
    name: "myCity",
    initialState: [],
    reducers: {
        addCity(state, action){
            state.push(action.payload);
        },
        setCityList(state, action){
            state = action.payload;
            return state;
        },
        flushStore(state){
            state = [];
            return state;
        }
    }
});

export const {addCity, setCityList, flushStore} = myCitySlice.actions;

