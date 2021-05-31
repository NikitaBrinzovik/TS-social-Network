import {ActionTypes, PostsType} from "../../../redux/store";
import React from "react";
import {addPostActionCreator, newTextChangeHandleActionCreator} from "../../../redux/Profile-Reducer";
import {MyPosts} from "./MyPosts";


type MyPostsPropsType = {
    // addPostCallback: (postText: string) => void
    // changeNewTextCallback: (newText: string) => void
    posts: Array<PostsType>
    message: string
    dispatch: (action: ActionTypes) => void
}


export function MyPostsContainer(props: MyPostsPropsType) {

    const addPostCallback = () => {
        //props.addPostCallback(props.message)
        props.dispatch(addPostActionCreator(props.message))
        // props.dispatch({ addPostActionCreator()})
    }

    const newTextChangeHandlerCallback = (value: string) => {
        //const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.changeNewTextCallback(e.currentTarget.value);
        //props.dispatch({ type: 'CHANGE-NEW-TEXT', newText: props.message});
        props.dispatch(newTextChangeHandleActionCreator(value));
    }

    return (
        <MyPosts addPostCallback={addPostCallback}
                 changeNewTextCallback={newTextChangeHandlerCallback}
                 posts={props.posts}
                 message={props.message}
            //dispatch={props.dispatch}
        />
    );
}