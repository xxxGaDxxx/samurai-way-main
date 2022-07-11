import axios from 'axios';

let instanceUsers = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '488c5e6a-adac-41ee-8371-dbe45d10120a'
    },
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instanceUsers.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)//что бы не передовать весь респонс педедаём после запроса дата
    }
}


let instanceHeaderProfile = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})

export const headersAPI = {
    getHeader() {
        return instanceHeaderProfile.get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instanceHeaderProfile.get(`profile/` + userId)
            .then(response => response.data)
    }
}


