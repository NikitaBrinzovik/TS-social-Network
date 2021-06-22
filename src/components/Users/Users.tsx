import React from "react";
import styles from "./Users.module.css"
import {UsersPropsType} from "./Users-Container";


export const Users = (props: UsersPropsType) => {

    //props.setUsers()
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed === true
                                ? <button onClick={() => {props.unfollow(u.id)}}> unfollow </button>
                                : <button onClick={() => props.follow(u.id)}> follow </button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>{u.location.country}</span>
                        <span>{u.location.city}</span>
                    </span>
                </div>)
            }

        </div>
    )
};