import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    message: string
    numb: number
    id: number
}

export function Profile() {
    return (
        <div className={s.mainContent}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}