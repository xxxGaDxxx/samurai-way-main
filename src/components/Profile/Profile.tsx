import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType} from '../../redux/state';

type ProfilePropsTyp = {
    postData: PostDataType[]
}

export const Profile: React.FC<ProfilePropsTyp> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    );
};

