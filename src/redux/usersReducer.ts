import {usersAPI} from '../api/api';

type LocationType = {
    citi: string
    contry: string
}

export type UsersType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean


    /*photoUrl:string*/
    /*fullName: string*/
    location: LocationType
}
export type PhotosType = {
    small: string
    large: string
}


type InitialProfileStateType = {
    users: UsersType[]
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


export const usersReducer = (state: InitialProfileStateType = initialProfileState, action: FollowUnfollowType): InitialProfileStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        }
        case 'UN-FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
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
export const setUser = (users: UsersType[]) => {
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


export const getUserThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUser(data.items))
            dispatch(setTotalUsersCount(data.totalCount))

        })
    }
}
export const follow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, userId))

        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}

