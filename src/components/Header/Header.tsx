import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {DatePropsType} from '../../redux/authReducer';

type HeaderType={
data:DatePropsType
}

export const Header:React.FC<HeaderType> = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxm0c50EV0D57sd7rox7YvNmR-vDDZ-KOtAg&usqp=CAU" alt={''}/>
            <div className={s.loginBlock}>
                {props.data.isAuth ? props.data.login: <NavLink to={'./login'}>Login</NavLink> }

            </div>
        </header>
    );
};

