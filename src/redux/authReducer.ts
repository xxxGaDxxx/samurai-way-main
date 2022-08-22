import {authAPI} from '../api/api';
import {AppThunk} from './redux-store';

export type DatePropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
//
// type InitialProfileStateType = {
//     data: DatePropsType
//     messages?: Array<string>
//     fieldsErrors?: Array<string>
//     resultCode: number| null
//
// }
type InitialProfileStateType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean

}


let initialProfileState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
}


export const authReducer = (state: InitialProfileStateType = initialProfileState, action: AuthUserDateType): InitialProfileStateType => {
    switch (action.type) {

        case 'SET-USER-DATE':
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
}

export type AuthUserDateType =
    SetAuthUserDateType


type SetAuthUserDateType = ReturnType<typeof setAuthUserDate>

export const setAuthUserDate = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATE' as const,
        payload: {
            userId,
            isAuth,
            login,
            email,
        }
    }
}

export const getAuthUserDate = (): AppThunk => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserDate(id, login, email, true))
            }
        })

}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            console.log('login', response)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDate())
                // {
                //     type: 'SET-USER-DATE' as const,
                //     payload: {
                //         userId: response.data.userId,
                //         isAuth: response.data.isAuth,
                //         login: response.data.login,
                //         email: response.data.email,
                //     }
                // })
            }
        })

}

export const logout = (): AppThunk => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserDate(null, null, null, false))
        }
    })
}
