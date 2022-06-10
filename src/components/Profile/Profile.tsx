import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionPropsType, PostDataType} from '../../redux/store2';

type ProfilePropsTyp = {
    postData: PostDataType[]
    newPostText: string
    dispatch: (action: ActionPropsType) => void
}

export const Profile: React.FC<ProfilePropsTyp> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData} newPostText={props.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );
};

