import React from 'react'
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {SuperMyPostsContainer} from "./MyPosts/MyPosts-Container";
import {ProfileType} from "../../redux/Profile-Reducer";

type ProfilePropsType = {
    profile: ProfileType
}

export function Profile(props: ProfilePropsType) {

    return (
        <div className={s.mainContent}>
            <ProfileInfo profile={props.profile}/>
            <SuperMyPostsContainer
            />
        </div>
    )
}