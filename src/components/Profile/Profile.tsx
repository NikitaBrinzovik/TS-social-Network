import React from 'react'
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {SuperMyPostsContainer} from "./MyPosts/MyPosts-Container";
import {ProfileType, UST} from "../../redux/Profile-Reducer";

type ProfilePropsType = {
    // props: {
        profile: ProfileType | null | undefined
        status: string
        updateStatus: (status: string) => UST
    // }
}

export function Profile(props: ProfilePropsType) {
// export function Profile(props: any) {

    return (
        <div className={s.mainContent}>
            {/*<ProfileInfo profile={props.profile}/>*/}
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <SuperMyPostsContainer/>
        </div>
    )
}