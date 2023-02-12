
import { configureStore } from "@reduxjs/toolkit"

import reducersData from "../Redux/Reducer"

import {persistStore,persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"



 
const persistConfig ={

    key: "root" ,

    storage,

    // blacklist:["tickects", "users"]

    //  blacklist:["progress" , "complete" ,"tickects" ]

    //  blacklist:["progress" , "complete" ,"tickects" ]

}


const persistedReducer = persistReducer(persistConfig , reducersData)



const Store = configureStore({



    reducer: {

        // assignee: reducersData,

        assignee: persistedReducer

    }



})


export default Store


export const persist = persistStore(Store)