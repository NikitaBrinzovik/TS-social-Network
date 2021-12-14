import s from "./ProfileInfo.module.css"
import React from "react";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import userPhoto from "../../../assets/images/def-samurai2.jpg";
/*import {ProfileType, UST} from "../../../redux/Profile-Reducer";


type ProfileInfoPropsType = {
    // props: {
        profile: ProfileType | null | undefined
        status: string
        updateStatus: (status: string) => UST
    // }
}*/

export function ProfileInfo(props: any) {

    if (!props.profile) {
        return <Preloader/>
    }
    if(!props.profile.photos.large){
        props.profile.photos.large = "https://avatars.mds.yandex.net/get-zen_doc/1875669/pub_5fabf36dffb0f80585cd5927_5fabf37c377524252459fe42/scale_1200"
    }
    return (
        <div>
            {/*<div>
                <img src='https://to-name.ru/images/historical-events/white-movement.jpg'/>
            </div>*/}
            <div>

            </div>
            <div className={s.profileInfoBlock}>
                <img src={props.profile.photos.large} alt={'profile'}/>
                {/*<img src={props.profile.photos.small} />*/}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}