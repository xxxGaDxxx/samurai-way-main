import React from 'react';

import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType} from '../../App';


type ProfilePropsTyp={
    postData: PostDataType[]
}

export const Profile = (props: ProfilePropsTyp) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    );
};

