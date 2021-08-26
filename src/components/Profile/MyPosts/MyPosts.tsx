import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React from "react";
import {MyPostsPropsType} from "./MyPosts-Container";
import {Field, reduxForm} from "redux-form";

export function MyPosts(props: MyPostsPropsType) {

    let post = props.posts.map(p => <Post message={p.message} id={p.id} numb={p.likes} key={p.id}/>)
    const addPost = (value: any) => (props.addPostCallback(value.newPostText))

    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <AddNewPostFormRedux onSubmit={addPost}></AddNewPostFormRedux>
            {post}
        </div>
    );
}

const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <h4>new post: </h4>
                <Field name='newPostText' component="textarea" placeholder="Write new post here"/>
                <button>add post</button>
                <button>remove post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

