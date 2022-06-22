import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';
import {usersReducer} from './usersReducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage:usersReducer
})

export type AppStoreType = typeof  store
export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)


