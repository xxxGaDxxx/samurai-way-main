import axios from 'axios';


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '488c5e6a-adac-41ee-8371-dbe45d10120a'
    },
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UserApiResponseType>(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })//что бы не передовать весь респонс педедаём после запроса дата
    },
    unfollow(userId: number) {
        return instance.delete<ResponseLoginFollowType>(`follow/${userId}`)

    },
    follow(userId: number) {
        return instance.post<ResponseLoginFollowType>(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.warn('Obsolete metod. Please profileAPI obj.')
        return profileAPI.getProfile(userId)
    },
}


export const authAPI = {
    me() {
        return instance.get<LoginResponseType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<ResponseLoginFollowType<{ userId: number }>>(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}


export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileUserStatusType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get<string | null>('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put<ResponseLoginFollowType>(`profile/status`, {status: status})
    }
}


export type UserApiResponseType = {
    items: ItemsUsersType[]
    totalCount: number
    error: string | null
}

export type ItemsUsersType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}

export type ResponseLoginFollowType<D = {}> = {
    data: D
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}

export type LoginResponseType = {
    data: {
        id: number
        login: string
        email: string
    }
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}

export type ProfileUserStatusType = {
    aboutMe: string | null
    contacts: SocialNetworks
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: PhotosType
}

export type SocialNetworks = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type PhotosType = {
    small: string | null
    large: string | null
}