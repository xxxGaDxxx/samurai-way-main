type LocationType = {
    citi: string
    contry: string
}

export type UsersType = {
    id: number
    name: string
    status: string
    photo: PhotoType
    followed: boolean


    /*photoUrl:string*/
    /*fullName: string*/
    location: LocationType
}
type PhotoType = {
    small: string
    large: string
}


type InitialProfileStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


let initialProfileState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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

type FollowACType = ReturnType<typeof followAC>

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>

export const unfollowAC = (userId: number) => {
    return {
        type: 'UN-FOLLOW',
        userId
    } as const
}


type SetUserACType = ReturnType<typeof setUserAC>

export const setUserAC = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}

type SetUsersTotalUsersCountAC = ReturnType<typeof setUsersTotalUsersCountAC>

export const setUsersTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'SET-USERS-TOTAL-COUNT',
        totalCount
    } as const
}

type ToggleIsFetchingAC = ReturnType<typeof toggleIsFetchingAC>

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}

