import s from "./ProfileInfo.module.css"
import React from "react";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../../redux/Profile-Reducer";


type ProfileInfoPropsType = {
    profile: any
}

export function ProfileInfo(props: ProfileInfoPropsType) {

    if(!props.profile) { //если у нас профайл false или undefined:
        return <Preloader />
    }

    return (
        <div>
            {/*<div>
                <img src='https://to-name.ru/images/historical-events/white-movement.jpg'/>
            </div>*/}
            <div>

            </div>
            <div className={s.profileInfoBlock}>
               <img src={props.profile.photos.large} />
               {/*<img src={props.profile.photos.small} />*/}
                <ProfileStatus status={"Hello"} />
            </div>
        </div>
    )
}