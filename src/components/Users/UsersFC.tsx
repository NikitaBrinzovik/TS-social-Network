import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/def-samurai2.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {UserType} from "../../redux/Users-Reducer";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged:(pageNumber: number) => void
    usersPage: Array<UserType>

    follow: (userID: number) => void
    unfollow: (userID: number) => void

    followingInProgress: Array<number>
    isFetching: boolean
    toggle: (isFetching: boolean) => void
    changeFollowingInProgress:(isFetching:boolean, userID:number) => void

}

export const UsersFC = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    //let pagesCount = 15;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const followCallback = (u: UserType) => {
        props.changeFollowingInProgress(true, u.id);
        axios.post<any>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "3f338418-f98d-49bd-8d21-8909cba70bac"
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.follow(u.id)
                }
                props.changeFollowingInProgress(false, u.id)
            })
    }
    const unfollowCallback = (u: UserType) => {
            props.changeFollowingInProgress(true, u.id);
            axios.delete<any>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "3f338418-f98d-49bd-8d21-8909cba70bac"
                }
            })
                .then(response => {

                    if (response.data.resultCode === 0) {
                        props.unfollow(u.id)
                    }
                    props.changeFollowingInProgress(false, u.id)
                })
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? styles.selectedPage : ""}
                        onClick={(e) => {
                            props.onPageChanged(p);
                        }}>{p}</span>
                })}
            </div>


            {
                props.usersPage.map((u: UserType) => <div key={u.id}>
                    <span>
                        <div>

                            <NavLink to={"/Profile" + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                            </NavLink>

                        </div>
                        <div>
                            {u.followed
                                //? <button disabled={ props.followingInProgress} onClick={() => {


                                ? <button disabled={props.followingInProgress.some((id: number) => id === u.id)}
                                          onClick={()=>{unfollowCallback(u)}}> unfollow </button>
                                //: <button disabled={ props.followingInProgress} onClick={() => {
                                : <button disabled={props.followingInProgress.some((id: number) => id === u.id)}
                                          onClick={()=>{followCallback(u)}}> follow </button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>{"u.location.country"}</span>
                        <span>{"u.location.city"}</span>
                    </span>
                </div>)
            }
        </div>
    )
};