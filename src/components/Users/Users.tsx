import React from 'react';
import s from './Users.module.css'
import {UsersType} from '../../redux/usersReducer';
import axios from 'axios';
import userPhoto from '../../assets/img/user.jpg'

type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (users: UsersType[]) => void
}

export class Users extends React.Component<UsersPropsType> {/////////////////////////

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUser(response.data.items)
        })
    }

    render() {
        return (
            <div className={s.users}>
                {/*<button onClick={this.getUssers}>Get Users</button>*/}
                {
                    this.props.users.map((u:UsersType) =>/////////////////////
                        <div key={u.id}>
                    <span>
                        <div>
                            <img src={userPhoto} alt={''}/> {/*u.photo.small !== null ? u.photo.small :userPhoto*/}
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow</button>
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
                        </div>)
                }
            </div>
        );
    }
}


