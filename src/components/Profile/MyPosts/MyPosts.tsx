import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostDataType} from '../../../redux/profileReducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../FormsControls/FormControls';


type MyPostsPropsType = {
    addPost: (postPost: string) => void
    postData: PostDataType[]
}
type FormAddMyPostType = {
    newPostText: string
}


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElement = props.postData.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = (values: FormAddMyPostType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.posts_Block}>
            <h3>My post</h3>
            <AddMyPostFromRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};


const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<FormAddMyPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder="new post"
                       validate={[required, maxLength10]} type="text"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddMyPostFromRedux = reduxForm<FormAddMyPostType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)




