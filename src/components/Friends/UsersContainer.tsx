import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {followAC, setUserAC, unfollowAC, UsersType} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStateToPropsType = {
    users: UsersType[]
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (users: UsersType[]) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUser: (users: UsersType[]) => {
            dispatch(setUserAC(users))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
