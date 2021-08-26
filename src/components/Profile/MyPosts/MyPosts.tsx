import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React from "react";
import {MyPostsPropsType} from "./MyPosts-Container";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from '../../../utils/validators';
import {Textarea} from "../../common/FormsControls/FormsControl";

export function MyPosts(props: MyPostsPropsType) {

    let post = props.posts.map(p => <Post message={p.message} id={p.id} numb={p.likes} key={p.id}/>)
    const addPost = (value: any) => (props.addPostCallback(value.newPostText))

    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <AddNewPostFormRedux onSubmit={addPost}/>
            {post}
        </div>
    );
}

const postMaxLength = maxLengthCreator(15)
const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <h4>new post: </h4>
                <Field
                    name='newPostText'
                    component={Textarea}//моя кастомная текстаоия
                    placeholder="Write new post here"
                    validate={[requiredField, postMaxLength]}
                />
                <button>add post</button>
                <button>remove post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

