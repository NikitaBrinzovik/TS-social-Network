import s from "./ProfileInfo.module.css"
import React from "react";
import {Preloader} from "../../common/preloader/Preloader";


type ProfileInfoPropsType = {
    profile: any
}

export function ProfileInfo(props: ProfileInfoPropsType) {

    if(!props.profile) { //если у нас профайл тру или undefined:
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://to-name.ru/images/historical-events/white-movement.jpg'/>
            </div>
            <div className={s.profileInfoBlock}>
               <img src={props.profile.photos.large} />
            </div>
        </div>
    )
}