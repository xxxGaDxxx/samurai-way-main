import React from 'react';
import {MyPosts} from './MyPosts';
import {addPostAC, onPostChangeAC, PostDataType} from '../../../redux/profileReducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStateToPropsType ={
    newPostText:string
    postData:PostDataType[]
}
type MapDispatchToPropsType ={
    addPost:(postPost: string)=>void
    onPostNewChange:(text:string)=>void
}

let mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        newPostText:state.profilePage.newPostText,
        postData:state.profilePage.postData,
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        onPostNewChange:(text:string)=>{
            dispatch(onPostChangeAC(text))
        },
        addPost:(postPost: string)=>{
            dispatch(addPostAC(postPost))
        },
    }
}


export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts);


