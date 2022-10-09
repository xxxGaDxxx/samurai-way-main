import {ItemsUsersType, usersAPI} from '../api/api';
import {AppStateType, AppThunk} from './redux-store';
import {AnyAction, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {updateObjectsInArray} from '../utils/objects-helpers/objects-helpers';

// type LocationType = {
//     citi: string
//     contry: string
// }

// export type UsersType = {
//     id: number
//     name: string
//     status: string
//     photos: PhotosType
//     followed: boolean
//
//
//     /*photoUrl:string*/
//     /*fullName: string*/
//     location: LocationType
// }
export type PhotosType = {
    small: string
    large: string
}


export type InitialUsersStateType = {
    users: ItemsUsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}


let initialProfileState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}


export const usersReducer = (state: InitialUsersStateType = initialProfileState, action: FollowUnfollowType): InitialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            // return {
            //     ...state,
            //     users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            // }
            return {
                ...state,
                users : updateObjectsInArray(state.users,action.userId,'id',{followed:true})
            }
        }
        case 'UN-FOLLOW': {
            return {
                ...state,
                users : updateObjectsInArray(state.users,action.userId,'id',{followed:false})
            }
        }
        case 'SET-USERS': {
            return {
                ...state,
                users: [
                    ...action.users,
                    ...state.users
                ]
            }
        }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SET-USERS-TOTAL-COUNT': {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state
    }
}

export type FollowUnfollowType =
    FollowACType
    | UnfollowACType
    | SetUserACType
    | SetCurrentPageACType
    | SetUsersTotalUsersCountAC
    | ToggleIsFetchingAC
    | ToggleIsFollowingProgressAC

type FollowACType = ReturnType<typeof followSuccess>
export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess = (userId: number) => {
    return {
        type: 'UN-FOLLOW',
        userId
    } as const
}


type SetUserACType = ReturnType<typeof setUser>
export const setUser = (users: ItemsUsersType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}

type SetUsersTotalUsersCountAC = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        totalCount
    } as const
}

type ToggleIsFetchingAC = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}

type ToggleIsFollowingProgressAC = ReturnType<typeof toggleIsFollowingProgress>
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching,
        userId,
    } as const
}

export const requestUsers = (page: number, pageSize: number): ThunkAction<Promise<void>, AppStateType, unknown, FollowUnfollowType> => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUser(data.items))
    dispatch(setTotalUsersCount(data.totalCount))

}



const followUnfollowFlow = async (dispatch:Dispatch,userId:number,apiMethod:any,actionCreator:(userId:number)=>AnyAction )=>{
    dispatch(toggleIsFollowingProgress(true, userId))

    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const follow = (userId: number): AppThunk => async (dispatch) => {

    let apiMethod =usersAPI.follow.bind(usersAPI)
    // let actionCreator =followSuccess

    // dispatch(toggleIsFollowingProgress(true, userId))
    //
    // let response = await apiMethod(userId)
    //
    // if (response.data.resultCode === 0) {
    //     dispatch(actionCreator(userId))
    // }
    // dispatch(toggleIsFollowingProgress(false, userId))
    followUnfollowFlow(dispatch,userId,apiMethod,followSuccess)
}
export const unfollow = (userId: number): AppThunk => async (dispatch) => {
    followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unfollowSuccess)
}



//
// export const follow = (userId: number): AppThunk => async (dispatch) => {
//     dispatch(toggleIsFollowingProgress(true, userId))
//    let response =await usersAPI.follow(userId)
//
//             if (response.data.resultCode === 0) {
//                 dispatch(followSuccess(userId))
//             }
//             dispatch(toggleIsFollowingProgress(false, userId))
//
//
// }
// export const unfollow = (userId: number): AppThunk => (dispatch) => {
//     dispatch(toggleIsFollowingProgress(true, userId))
//
//     usersAPI.unfollow(userId)
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(unfollowSuccess(userId))
//             }
//             dispatch(toggleIsFollowingProgress(false, userId))
//         })
// }

