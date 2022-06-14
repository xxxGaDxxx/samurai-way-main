import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';


import {FriendsType} from '../../redux/TypeRedux';


type FriendsPropsType = {
    friends: FriendsType[]
}

export const Navbar= () => {

    /*let friendsElement = props.friends.map((p) => <Friend key={p.id} name={p.name} foto={p.foto}/>)*/

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <div>
                    <NavLink to="/friends" activeClassName={s.active} >Friends</NavLink>
                    <div className={s.friends}>
                        {/*{friendsElement}*/}
                    </div>
                </div>

            </div>
        </nav>
    );
};

