import React from "react";
import styles from "./Users.module.css"
import {UsersPropsType} from "./Users-Container";
import axios from "axios";
import userPhoto from "../../assets/images/default-samurai.png";
import {UserType} from "../../redux/Users-Reducer";

export type GetStateType = {
    items: Array<UserType>
}

export class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        axios.get<GetStateType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    //getUsers = () => {}

    render () {
        return (
            <div>
                {/*<button onClick={this.getUsers}>Get users</button>*/}
                {
                    this.props.usersPage.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed === true
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}> unfollow </button>
                                : <button onClick={() => this.props.follow(u.id)}> follow </button>
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
    }
}