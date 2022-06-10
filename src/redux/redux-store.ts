import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
})

export let store = createStore(reducers)


export type AppStoreType = typeof  store
export type AppStateType = ReturnType<typeof store.getState>