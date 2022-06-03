import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionPropsType, addPostActionCreator, onPostChangeActionCreator, PostDataType} from '../../../redux/state';


type MyPostsPropsType = {
    postData: PostDataType[]
    newPostText: string
    dispatch: (action: ActionPropsType) => void
}


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.postData.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText))
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(onPostChangeActionCreator(e.currentTarget.value))
    }


    return (
        <div className={s.posts_Block}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};


