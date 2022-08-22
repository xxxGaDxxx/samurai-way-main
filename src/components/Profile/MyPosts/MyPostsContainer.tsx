import React from 'react';
import {MyPosts} from './MyPosts';
import {addPostAC, PostDataType} from '../../../redux/profileReducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStateToPropsType ={
    postData:PostDataType[]
}
type MapDispatchToPropsType ={
    addPost:(postPost: string)=>void
}

let mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        postData:state.profilePage.postData,
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {

        addPost:(newPostText: string)=>{
            dispatch(addPostAC(newPostText))
        },
    }
}


export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts);


