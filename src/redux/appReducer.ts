import {AppThunk} from './redux-store';
import {getAuthUserDate,} from './authReducer';


type InitialProfileStateType = {
    initialized: boolean

}
let initialProfileState = {
    initialized: false
}


export const appReducer = (state: InitialProfileStateType = initialProfileState, action: AuthUserDateType): InitialProfileStateType => {
    switch (action.type) {
        case 'SET-INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export type AuthUserDateType = InitializedSuccessType

type InitializedSuccessType = ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => {
    return {
        type: 'SET-INITIALIZED' as const,
    }
}

export const initializeApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuthUserDate())
    Promise.all([promise])
        .then((res)=>{
        console.log('res',res)
        dispatch(initializedSuccess())
    })

}


