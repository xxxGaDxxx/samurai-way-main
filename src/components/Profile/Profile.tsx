import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileDaTaType} from '../../redux/profileReducer';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    profile: ProfileDaTaType
    status: string
    updateStatus: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

