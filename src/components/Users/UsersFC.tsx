import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/def-samurai2.jpg";
import {NavLink} from "react-router-dom";


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
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}> unfollow </button>
                                : <button onClick={() => props.follow(u.id)}> follow </button>
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