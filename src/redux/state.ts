export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsDataType = {
    id: number
    name: string
    foto: string
}
export type Messagestype = {
    id: number
    message: string
    foto: string
    name: string
}
export type FriendsType = {
    id: number
    name: string
    foto: string
}
export type ProfilePagePropsType = {
    postData: PostDataType[]
}
export type DilogsPagePropsType = {
    dialogsData: DialogsDataType[]
    messages: Messagestype[]
}
export type SidebarPropsType = {
    friends: FriendsType[]
}
export type StatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DilogsPagePropsType
    sidebar: SidebarPropsType
}

export const state: StatePropsType = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi,Pascha', likesCount: 5},
            {id: 2, message: 'Hi, Wlad', likesCount: 15},
            {id: 3, message: 'How are you?', likesCount: 20},
            {id: 4, message: 'YO YO YO!!!', likesCount: 20},
        ],
    },
    dialogsPage: {
        dialogsData: [
            {
                id: 1,
                name: 'Wlad',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKH8Ew3p9hw0I9QKHFDP58aWZ-d6NUfHkA&usqp=CAU'
            },
            {
                id: 2,
                name: 'Margo',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU'
            },
            {
                id: 3,
                name: 'Pascha',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KjoRsUfR-lyCcHd4_fbLsIDGLrVQKB6Iug&usqp=CAU'
            },
            {
                id: 4,
                name: 'Radic',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5VKFOTn-2IxmSp9pcNC_B0PHDDvNQSAeVQ&usqp=CAU'
            },
        ],
        messages: [
            {
                id: 1,
                message: 'Hi',
                name: 'Wlad',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKH8Ew3p9hw0I9QKHFDP58aWZ-d6NUfHkA&usqp=CAU'
            },
            {
                id: 2,
                message: 'How is you',
                name: 'Margo',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU'
            },
            {
                id: 3,
                message: 'Yo',
                name: 'Wlad',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKH8Ew3p9hw0I9QKHFDP58aWZ-d6NUfHkA&usqp=CAU'
            },
        ],
    },
    sidebar: {
        friends: [
            {
                id: 1,
                name: 'Margo',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU'
            },
            {
                id: 2,
                name: 'Pascha',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KjoRsUfR-lyCcHd4_fbLsIDGLrVQKB6Iug&usqp=CAU'
            },
            {
                id: 3,
                name: 'Radic',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5VKFOTn-2IxmSp9pcNC_B0PHDDvNQSAeVQ&usqp=CAU'
            },
        ]
    },

}