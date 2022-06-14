import React from 'react';
import { FriendsType} from '../../redux/TypeRedux';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Friends} from './Friends';


type mapStateToPropsType = {
    friends:FriendsType[]
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        friends: state.sidebarPage.friends
    }
}

export const FriendsContainer = connect(mapStateToProps)(Friends);
