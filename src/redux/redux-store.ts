import {Action, applyMiddleware, combineReducers, createStore} from 'redux';
import {AddPostType, profileReducer} from './profileReducer';
import {AddMessage, dialogsReducer} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';
import {FollowUnfollowType, usersReducer} from './usersReducer';
import {authReducer, AuthUserDateType} from './authReducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {FormAction, reducer as formReducer, StopSubmitAction} from 'redux-form'

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


//общий екшен со всех редюсеров
export  type AppActionType = AddPostType
    | AuthUserDateType
    | AddMessage
    | FollowUnfollowType

//типизация сатки(в санки добавили екшен редаксовский , что бы можно было диспачить в санке в форм-редас stopSubmit)
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, Action >

// @ts-ignore
window.store = store


