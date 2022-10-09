import React from 'react';
import s from './Users.module.css';
import {ItemsUsersType} from '../../api/api';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';



export type UsersTypeProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: ItemsUsersType[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
}


let Users: React.FC<UsersTypeProps> = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {

    return <div className={s.users}>
        <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
        />

        {
            props.users.map((u) =>  <User user={u}
                                          key={u.id}
                                          follow={props.follow}
                                          unfollow={props.unfollow}
                                          followingInProgress={props.followingInProgress}
                />
            )
        }
    </div>
}

export default Users;