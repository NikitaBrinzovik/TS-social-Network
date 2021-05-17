import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionTypes, addPostActionCreator, newTextChangeHandleActionCreator, PostsType} from "../../../redux/state";
import React, {ChangeEvent} from "react";


type MyPostsPropsType = {
    // addPostCallback: (postText: string) => void
    // changeNewTextCallback: (newText: string) => void
    posts: Array<PostsType>
    message: string
    dispatch: (action:ActionTypes) => void
}




export function MyPosts(props: MyPostsPropsType) {

    let post = props.posts.map(p => <Post message={p.message} id={p.id} numb={p.likes} key={p.id}/>)

    const addPost = () => {
        //props.addPostCallback(props.message)
        props.dispatch(addPostActionCreator( props.message ))
        // props.dispatch({ addPostActionCreator()})
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.changeNewTextCallback(e.currentTarget.value);
        //props.dispatch({ type: 'CHANGE-NEW-TEXT', newText: props.message});
        props.dispatch(newTextChangeHandleActionCreator(e.currentTarget.value));
    }

    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            {post}
            <div>
                <h4>new post: </h4>
                <textarea
                    placeholder={'Write new post here'}
                    value={props.message}
                    onChange={newTextChangeHandler}/>
                <button onClick={addPost}>add post</button>
                <button>remove post</button>
            </div>
        </div>
    );
}