import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostDataType} from '../../../redux/TypeRedux';




type MyPostsPropsType = {
    onPostNewChange:(text:string)=>void
    addPost:(postPost: string)=>void
    newPostText: string
    postData: PostDataType[]

}


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.postData.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = () => {
        props.addPost(props.newPostText)
        /*props.dispatch(addPostAC(props.newPostText))*/
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onPostNewChange(text)
    }


    return (
        <div className={s.posts_Block}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};


