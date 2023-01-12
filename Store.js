import {configureStore} from "@reduxjs/toolkit" 
import MutualzpostReducer from "./Slices/MutualzpostReducer";
import { persistStore, persistReducer } from 'redux-persist' 
import storage from "redux-persist/lib/storage";


const persistConfig = {    key: 'persist-store', storage };

const persistedReducer = persistReducer(persistConfig, MutualzpostReducer);


const Store= configureStore({
    reducer : {
        MutualzPost:persistedReducer
    }
})

export default Store;
export const persistor = persistStore(Store)
