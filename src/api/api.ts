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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)//что бы не передовать весь респонс педедаём после запроса дата
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)

    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.warn('Obsolete metod. Please profileAPI obj.')
        return profileAPI.getProfile(userId)
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
}


export const profileAPI = {

    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)

    },
    getStatus(userId: number) {
        return instance.get('profile/status/' + userId)


    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})

    }

}

// let instanceHeaderProfile = axios.create({
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     withCredentials: true,
// })
//
// export const headersAPI = {
//     getHeader() {
//         return instanceHeaderProfile.get(`auth/me`)
//             .then(response => response.data)
//     }
// }
//
// export const profileAPI = {
//     getProfile(userId: string) {
//         return instanceHeaderProfile.get(`profile/` + userId)
//             .then(response => response.data)
//     }
// }


