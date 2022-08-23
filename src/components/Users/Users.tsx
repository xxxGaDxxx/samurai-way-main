import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.jpg';
import {NavLink} from 'react-router-dom';
import {ItemsUsersType} from '../../api/api';


type UsersTypeProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: ItemsUsersType[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
}


let Users: React.FC<UsersTypeProps> = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let peges = []

    for (let i = 0; i <= pageCount; i++) {
        if (i <= 0) {
        } else {
            peges.push(i)
        }
    }

    return <div className={s.users}>
        <div>
            {peges.map(p => {

                return <span key={Math.random()} className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={() => props.onPageChanged(p)}>{p}</span>

            })}

        </div>

        {
            props.users.map((u) => {

                return <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt={''}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {
                                        u.followed
                                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}}>Follow</button>
                                    }

                                </div>
                            </span>
                    <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{'u.location.contry'}</div>
                                    <div>{'u.location.citi'}</div>
                                </span>
                            </span>
                </div>
            })
        }
    </div>
}

export default Users;