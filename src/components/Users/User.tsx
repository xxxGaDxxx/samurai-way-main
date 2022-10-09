import React from 'react';
import userPhoto from '../../assets/img/user.jpg';
import {NavLink} from 'react-router-dom';
import {ItemsUsersType} from '../../api/api';


type UserType = {
    user: ItemsUsersType
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: Array<number>
}

export const User: React.FC<UserType> = ({user, followingInProgress, unfollow, follow}: UserType) => {
    return <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt={''}/>
                </NavLink>
            </div>
            <div>
                {
                    user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>
                }
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{'user.location.contry'}</div>
                <div>{'user.location.citi'}</div>
            </span>
        </span>
    </div>

}
