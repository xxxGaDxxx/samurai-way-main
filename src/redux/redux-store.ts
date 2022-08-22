import {applyMiddleware, combineReducers, createStore} from 'redux';
import {AddPostType, profileReducer} from './profileReducer';
import {AddMessage, dialogsReducer} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';
import {FollowUnfollowType, usersReducer} from './usersReducer';
import {authReducer, AuthUserDateType} from './authReducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {SetAuthUserDateType} from './loginReducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,

})

export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


//общий акшен со всех редюсеров
export  type AppActionType = AddPostType
    | AuthUserDateType
    | AddMessage
    | SetAuthUserDateType
    | FollowUnfollowType


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>


// @ts-ignore
window.store = store


