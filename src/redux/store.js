import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import countReducer from './Slices/counterSlice'
import sidebarReducer from './Slices/sidebarSlice'
import userReducer from './Slices/userSlice'

const reducers = combineReducers({
  counter:countReducer,
  sidebar:sidebarReducer,
  user:userReducer
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export default store
