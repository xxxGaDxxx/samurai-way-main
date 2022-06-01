import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostDataType} from '../../../App';


type MyPostsPropsType = {
    postData: PostDataType[]
}


export const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.postData.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.posts_Block}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};



