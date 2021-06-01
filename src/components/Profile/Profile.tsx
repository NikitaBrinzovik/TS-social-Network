import React from 'react'
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {SuperMyPostsContainer} from "./MyPosts/MyPosts-Container";
import {ProfilePageType} from "../../redux/Profile-Reducer";
import {ActionTypes, RootStateType} from "../../redux/store";


// type ProfilePropsType = {
//     //profilePage: ProfilePageType
//     // addPostCallback: (postText: string) => void
//     // changeNewTextCallback: (newText: string) => void
//     // message: string
//     state: RootStateType
//     dispatch: (action: ActionTypes) => void
// }

export function Profile() {
    return (
        <div className={s.mainContent}>
            <ProfileInfo/>
            <SuperMyPostsContainer
                //posts={props.state.profilePage.posts}
                // addPostCallback={props.addPostCallback}
                //changeNewTextCallback={props.changeNewTextCallback}
                //message={props.state.profilePage.newPostText}
                //dispatch={props.dispatch}
             />
        </div>
    )
}