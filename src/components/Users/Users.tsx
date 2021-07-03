import React from "react";
import styles from "./Users.module.css"
import {UsersPropsType} from "./Users-Container";
import axios from "axios";
import userPhoto from "../../assets/images/default-samurai.png";


export const Users = (props: UsersPropsType) => {
    /*let users = [{
        id: 1,
        photoUrl: "http://www.imperskiy-fund.com/images/ryadovoy-rotyu.jpg",
        followed: true,
        fullName: "Nikita",
        status: "Hey",
        location: {city: "Minsk", country: "Belarus}"}
    }, {
        id: 2,
        photoUrl: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AALhSxg.img?h=400&w=267&m=6&q=60&o=f&l=f&x=151&y=240",
        followed: true,
        fullName: "Vika",
        status: "Hoy",
        location: {city: "Minsk", country: "Belarus}"}
    },
        {
            id: 3,
            photoUrl: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AALhSxg.img?h=400&w=267&m=6&q=60&o=f&l=f&x=151&y=240",
            followed: false,
            fullName: "Polina",
            status: "Lets",
            location: {city: "Minsk", country: "Belarus}"}
        },
        {
            id: 4,
            photoUrl: //"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AALhSxg.img?h=400&w=267&m=6&q=60&o=f&l=f&x=151&y=240",
                "http://www.imperskiy-fund.com/images/ryadovoy-rotyu.jpg",
            followed: false,
            fullName: "Ivan",
            status: "lets go to kill a good people",
            location: {city: "Minsk", country: "Belarus"}
        },

    ]*/
    debugger
    if (props.usersPage.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            //props.setUsers({users})
            props.setUsers(
                response.data.items
                /*{users: [{
                    id: 1,
                    photoUrl: "http://www.imperskiy-fund.com/images/ryadovoy-rotyu.jpg",
                    followed: true,
                    fullName: "Nikita",
                    status: "Hey",
                    location: {city: "Minsk", country: "Belarus}"}
                }, {
                id: 2,
                    photoUrl: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AALhSxg.img?h=400&w=267&m=6&q=60&o=f&l=f&x=151&y=240",
                    followed: true,
                    fullName: "Vika",
                    status: "Hoy",
                    location: {city: "Minsk", country: "Belarus}"}
            },
            {
                id: 3,
                    photoUrl: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AALhSxg.img?h=400&w=267&m=6&q=60&o=f&l=f&x=151&y=240",
                followed: false,
                fullName: "Polina",
                status: "Lets",
                location: {city: "Minsk", country: "Belarus}"}
            },
            {
                id: 4,
                    photoUrl: //"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AALhSxg.img?h=400&w=267&m=6&q=60&o=f&l=f&x=151&y=240",
                "http://www.imperskiy-fund.com/images/ryadovoy-rotyu.jpg",
                    followed: false,
                fullName: "Ivan",
                status: "lets go to kill a good people",
                location: {city: "Minsk", country: "Belarus"}
            },

        ]}*/)
        })

    }



    //props.setUsers()
    return (
        <div>
            {
                props.usersPage.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
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