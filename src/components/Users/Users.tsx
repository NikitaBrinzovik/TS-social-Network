import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/def-samurai2.jpg";
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/Users-Reducer";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    usersPage: Array<UserType>

    follow: (userID: number) => void
    unfollow: (userID: number) => void

    followingInProgress: Array<number>
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    //let pagesCount = 15;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span
                        className={props.currentPage === page ? styles.selectedPage : ""}
                        onClick={() => {
                            props.onPageChanged(page)
                        }}> {page} </span>
                })}
            </div>

            {
                props.usersPage.map((user: UserType) =>
                    <div key={user.id}>

                        <div>
                            <NavLink to={"/Profile/" + user.id}>
                                <img alt={'hey'}
                                     src={user.photos.small !== null ? user.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                            </NavLink>
                        </div>

                        <div>
                            {user.followed
                                //? <button disabled={ props.followingInProgress} onClick={() => {
                                ? <button
                                    disabled={props.followingInProgress.some((id: number) => id === user.id)}
                                    onClick={() => {
                                        props.unfollow(user.id)
                                    }}> unfollow </button>

                                //: <button disabled={ props.followingInProgress} onClick={() => {
                                : <button
                                    disabled={props.followingInProgress.some((id: number) => id === user.id)}
                                    onClick={() => {
                                        props.follow(user.id)
                                    }}> follow </button>
                            }
                        </div>

                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        <span>{"user.location.country"}</span>
                        <span>{"user.location.city"}</span>
                        <br/>

                    </div>)
            }
        </div>
    )
};