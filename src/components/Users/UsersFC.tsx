import React from "react";
import {GetStateType, UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/def-samurai2.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {toggleFollowingInProgress} from "../../redux/Users-Reducer";


export const UsersFC = (props: UsersPropsType & any): any => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
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
                props.usersPage.map((u: any) => <div key={u.id}>
                    <span>
                        <div>

                            <NavLink to={"/Profile" + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                            </NavLink>

                        </div>
                        <div>
                            {u.followed === true
                                //? <button disabled={ props.followingInProgress} onClick={() => {
                                ? <button disabled={ props.followingInProgress.some( (id):any => id===u.id)} onClick={() => {
                                    props.toggleFollowingInProgress(true, u.id);
                                    axios.delete<any>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "3f338418-f98d-49bd-8d21-8909cba70bac"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingInProgress(false, u.id)
                                        })
                                }}> unfollow </button>
                                //: <button disabled={ props.followingInProgress} onClick={() => {
                                : <button disabled={ props.followingInProgress.some( (id):any => id===u.id)} onClick={() => {
                                    props.toggleFollowingInProgress(true, u.id);
                                    axios.post<any>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "3f338418-f98d-49bd-8d21-8909cba70bac"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingInProgress(false, u.id)
                                        })
                                }


                                }> follow </button>
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