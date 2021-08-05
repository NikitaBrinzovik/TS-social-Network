import React from 'react'
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {SuperMyPostsContainer} from "./MyPosts/MyPosts-Container";
import {ProfileType, UST} from "../../redux/Profile-Reducer";

type ProfilePropsType = {
    //profile: ProfileType | undefined
    props: {
        profile: ProfileType | undefined
        status: string
        updateStatus: (status: string) => UST
    }
}

//export function Profile(props: ProfilePropsType) {
export function Profile(props: any) {

    return (
        <div className={s.mainContent}>
            {/*<ProfileInfo profile={props.profile}/>*/}
            <ProfileInfo props={props}/>
            <SuperMyPostsContainer
            />
        </div>
    )
}