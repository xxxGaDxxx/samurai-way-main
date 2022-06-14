import React from 'react';
import {MyPosts} from './MyPosts';
import {addPostAC, onPostChangeAC} from '../../../redux/profileReducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {PostDataType} from '../../../redux/TypeRedux';
import {Dispatch} from 'redux';


type mapStateToPropsType={
    newPostText:string
    postData:PostDataType[]
}
type mapDispatchToPropsType={
    addPost:(postPost: string)=>void
    onPostNewChange:(text:string)=>void
}

let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        newPostText:state.profilePage.newPostText,
        postData:state.profilePage.postData,
    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
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


