import React from 'react'
import s from './Profile.module.css'
import {Profile} from "./Profile";
import axios from "axios";
import {GetStateType} from "../Users/UsersContainer";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/Profile-Reducer";


class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        //пока будем получать всегда второго пользователя
        axios.get<GetStateType>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div className={s.mainContent}>
                <Profile
                    //{...this.props}
                    profile={this.props.profile}
                />
            </div>
        )
    }

}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);