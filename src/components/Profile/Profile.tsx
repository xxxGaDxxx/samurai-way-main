import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType} from '../../redux/state';

type ProfilePropsTyp = {
    postData: PostDataType[]
    addPost: (postPost: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const Profile: React.FC<ProfilePropsTyp> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData} addPost={props.addPost} newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

