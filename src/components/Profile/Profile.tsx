import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes,ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    // addPostCallback: (postText: string) => void
    // changeNewTextCallback: (newText: string) => void
    message: string
    dispatch: (action: ActionTypes) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={s.mainContent}>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                // addPostCallback={props.addPostCallback}
                // changeNewTextCallback={props.changeNewTextCallback}
                message={props.message}
                dispatch={props.dispatch}
            />
        </div>
    )
}