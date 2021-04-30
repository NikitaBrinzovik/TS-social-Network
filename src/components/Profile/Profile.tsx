import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, RootStateType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (newText: string) => void
    message: string
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={s.mainContent}>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                addPostCallback={props.addPostCallback}
                changeNewTextCallback={props.changeNewTextCallback}
                message={props.message}
            />
        </div>
    )
}