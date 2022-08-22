import {authAPI} from '../api/api';
import {Dispatch} from 'redux';

// export type DatePropsType = {
// }
//
// type InitialProfileStateType = {
// }
type InitialProfileStateType = {}


let initialProfileState = {}


export const loginReducer = (state: any, action: any): any => {
    switch (action.type) {

        case '':
            return state
        default:
            return state
    }
}

export type AuthUserDateType =
    SetAuthUserDateType


export type SetAuthUserDateType = ReturnType<typeof setAuthUserDate>

export const setAuthUserDate = () => {
    return {
        type: '',
    } as const
}

// export const getAuthUserDate = () => {
//     return (dispatch: Dispatch<AuthUserDateType>) => {
//         authAPI.me().then(data => {
//             if (data.resultCode === 0) {
//                 let {id, login, email} = data.data
//                 dispatch(setAuthUserDate(id, login, email))
//             }
//         })
//     }
// }
