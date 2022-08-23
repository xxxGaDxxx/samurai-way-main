import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from './HeaderContainer';


type HeaderType = {
    data: HeaderContainerPropsType
}

export const Header: React.FC<HeaderType> = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxm0c50EV0D57sd7rox7YvNmR-vDDZ-KOtAg&usqp=CAU"
                alt={''}/>
            <div className={s.loginBlock}>
                {props.data.isAuth ? <div>{props.data.login} - <button onClick={props.data.logout}>Log out</button></div> : <NavLink to={'./login'}>Login</NavLink>}

            </div>
        </header>
    );
};

