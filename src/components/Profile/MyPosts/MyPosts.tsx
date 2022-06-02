import React, {LegacyRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostDataType} from '../../../redux/state';


type MyPostsPropsType = {
    postData: PostDataType[]
}


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.postData.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        let text = newPostElement.current?.value
        alert(text)
    }


    return (
        <div className={s.posts_Block}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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



