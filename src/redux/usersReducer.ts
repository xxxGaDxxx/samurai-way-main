type LocationType = {
    citi: string
    contry: string
}

export type UsersType = {
    id: number
    photoUrl:string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

type InitialProfileStateType = {
    users: UsersType[]
}


let initialProfileState = {
    users: [/*
        {
            id: 1,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKH8Ew3p9hw0I9QKHFDP58aWZ-d6NUfHkA&usqp=CAU',
            followed: false,
            fullName: 'Wlad L.',
            status: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!',
            location: {citi: 'Ozery', contry: 'Belarus'}
        },
        {
            id: 2,
            photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU',
            followed: false,
            fullName: 'Margo B.',
            status: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!',
            location: {citi: 'Skidel', contry: 'Belarus'}
        },
        {
            id: 3,
            photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5VKFOTn-2IxmSp9pcNC_B0PHDDvNQSAeVQ&usqp=CAU',
            followed: true,
            fullName: 'Radic R',
            status: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!',
            location: {citi: 'Grodno', contry: 'Belarus'}
        },
        {
            id: 4,
            photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KjoRsUfR-lyCcHd4_fbLsIDGLrVQKB6Iug&usqp=CAU',
            followed: true,
            fullName: 'Pascha S.',
            status: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!',
            location: {citi: 'Ozery', contry: 'Belarus'}
        },*/
    ],
}


export const usersReducer = (state: InitialProfileStateType = initialProfileState, action: FollowUnfollowType): InitialProfileStateType => {
    switch (action.type) {
        case 'FOLLOW':{
            return{
                ...state,
                users:state.users.map(u=>u.id === action.userId ? {...u,followed: true}:u)
            }
        }
        case 'UN-FOLLOW':{
            return{
                ...state,
                users:state.users.map(u=>u.id === action.userId ? {...u,followed: false}:u)
            }
        }
        case 'SET-USERS':{
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.users
                ]
            }
        }
        default:
            return state
    }
}

export type FollowUnfollowType = FollowACType | UnfollowACType |SetUserACType

type FollowACType = ReturnType<typeof followAC>

export const followAC = (userId:number) => {
    return {
        type: 'FOLLOW',
        userId:userId
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>

export const unfollowAC = (userId:number) => {
    return {
        type: 'UN-FOLLOW',
        userId:userId
    } as const
}


type SetUserACType = ReturnType<typeof setUserAC>

export const setUserAC = (users:UsersType[]) => {
    return {
        type: 'SET-USERS',
        users:users
    } as const
}



