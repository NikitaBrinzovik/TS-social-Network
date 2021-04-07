import s from "./ProfileInfo.module.css"
import React from "react";


type ProfileInfoPropsType = {}

export function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div className={s.profileInfoBlock}>
            <img src='https://to-name.ru/images/historical-events/white-movement.jpg'/>
        </div>
    )
}