import {configureStore,combineReducers} from "@reduxjs/toolkit";
import {myCitySlice} from "../Slice/myCitySlice";

const reducer = combineReducers({
    myCity: myCitySlice.reducer
});

const store = configureStore({
    reducer
});

export default store;
