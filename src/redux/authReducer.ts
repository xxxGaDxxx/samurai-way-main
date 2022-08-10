import {authAPI} from '../api/api';

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
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export type AuthUserDateType =
    SetAuthUserDateType


type SetAuthUserDateType = ReturnType<typeof setAuthUserDate>

export const setAuthUserDate = (userId: number, login: string, email: string) => {
    return {
        type: 'SET-USER-DATE',
        data: {
            userId,
            login,
            email,
        }
    } as const
}

export const getAuthUserDate = () => {
    return (dispatch:any)=>{
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserDate(id, login, email))
            }
        })
    }
}
