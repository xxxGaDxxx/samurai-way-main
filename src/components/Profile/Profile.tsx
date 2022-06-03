import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionPropsType, PostDataType} from '../../redux/state';

type ProfilePropsTyp = {
    postData: PostDataType[]
    newPostText: string
    dispatch: (action: ActionPropsType) => void
    /*updateNewPostText: (newText: string) => void
    addPost: (postPost: string) => void*/
}

export const Profile: React.FC<ProfilePropsTyp> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData} newPostText={props.newPostText}
                /*updateNewPostText={props.updateNewPostText}  addPost={props.addPost}*/ dispatch={props.dispatch}/>
        </div>
    );
};

