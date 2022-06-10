import React from 'react';
import {MyPosts} from './MyPosts';

import {addPostAC, onPostChangeAC} from '../../../redux/profileReducer';
import {AppStoreType} from '../../../redux/redux-store';


type MyPostsPropsType = {
    store: AppStoreType
}


export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
const state = props.store.getState().profilePage

    const addPost = () => {
        props.store.dispatch(addPostAC(state.newPostText))
    }

    const onPostChange = (text:string) => {
        props.store.dispatch(onPostChangeAC(text))
    }


    return (
        <MyPosts onPostNewChange={onPostChange} addPost={addPost} newPostText={state.newPostText} postData={state.postData}/>
    );
};


