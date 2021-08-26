import React from "react";
import {addPostActionCreator,  PostsType} from "../../../redux/Profile-Reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPostCallback: (message: string) => {
            dispatch(addPostActionCreator(message))
        },
    }
}
export const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

//---------TYPES----------
type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}
type MapDispatchToPropsType = {
    addPostCallback: (message: string) => void
    //newTextChangeHandlerCallback: (value: string) => void
}
export type MyPostsPropsType = MapDispatchToPropsType & MapStateToPropsType
