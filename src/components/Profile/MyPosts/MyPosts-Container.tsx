import React from "react";
import {addPostActionCreator, newTextChangeHandleActionCreator, PostsType} from "../../../redux/Profile-Reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";


// type MyPostsPropsType = {
//     // addPostCallback: (postText: string) => void
//     // changeNewTextCallback: (newText: string) => void
//     posts: Array<PostsType>
//     message: string
//     dispatch: (action: ActionTypes) => void
// }


// export function MyPostsContainer(props: MyPostsPropsType) {
//
//     const addPostCallback = () => {
//         //props.addPostCallback(props.message)
//         props.dispatch(addPostActionCreator(props.message))
//         // props.dispatch({ addPostActionCreator()})
//     }
//
//     const newTextChangeHandlerCallback = (value: string) => {
//         //const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         //props.changeNewTextCallback(e.currentTarget.value);
//         //props.dispatch({ type: 'CHANGE-NEW-TEXT', newText: props.message});
//         props.dispatch(newTextChangeHandleActionCreator(value));
//     }
//
//     return (
//         <MyPosts addPostCallback={addPostCallback}
//                  changeNewTextCallback={newTextChangeHandlerCallback}
//                  posts={props.posts}
//                  message={props.message}
//             //dispatch={props.dispatch}
//         />
//     );
// }
type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string

}
type MapDispatchToPropsType = {
    addPostCallback: (message: string) => void
    newTextChangeHandlerCallback: (value: string) => void
}

export type MyPostsPropsType = MapDispatchToPropsType & MapStateToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        addPostCallback: (message: string) => {
            dispatch(addPostActionCreator(message))
        },
        newTextChangeHandlerCallback: (value: string) => {
            dispatch(newTextChangeHandleActionCreator(value));
        }
    }
}
export const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);