import React from 'react';
import s from './Users.module.css'

import {UsersType} from '../../redux/usersReducer';


type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (users: UsersType[]) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    if(props.users.length === 0){
        props.setUser([
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
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU',
                followed: false,
                fullName: 'Margo B.',
                status: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!',
                location: {citi: 'Skidel', contry: 'Belarus'}
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5VKFOTn-2IxmSp9pcNC_B0PHDDvNQSAeVQ&usqp=CAU',
                followed: true,
                fullName: 'Radic R',
                status: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!',
                location: {citi: 'Grodno', contry: 'Belarus'}
            },
            {
                id: 4,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KjoRsUfR-lyCcHd4_fbLsIDGLrVQKB6Iug&usqp=CAU',
                followed: true,
                fullName: 'Pascha S.',
                status: 'НЕ СТАВИТЬ НОВЫЕ БИБЛИОТЕКИ!!!!',
                location: {citi: 'Ozery', contry: 'Belarus'}
            },])
    }


    return (
        <div className={s.users}>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.contry}</div>
                            <div>{u.location.citi}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

