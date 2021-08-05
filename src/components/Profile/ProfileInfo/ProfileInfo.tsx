import s from "./ProfileInfo.module.css"
import React from "react";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {UST} from "../../../redux/Profile-Reducer";


type ProfileInfoPropsType = {
    //profile: any
    props: {
        //profile: ProfileType | undefined
        profile: any
        status: string
        updateStatus: (status: string) => UST
    }
}

export function ProfileInfo(props: ProfileInfoPropsType) {

    if (!props.props.profile) { //если у нас профайл false или undefined:
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>
                <img src='https://to-name.ru/images/historical-events/white-movement.jpg'/>
            </div>*/}
            <div>

            </div>
            <div className={s.profileInfoBlock}>
                <img src={props.props.profile.photos.large}/>
                {/*<img src={props.profile.photos.small} />*/}
                <ProfileStatus status={props.props.status} updateStatus={props.props.updateStatus}/>
            </div>
        </div>
    )
}