import React from 'react'
import s from './Profile.module.css'
import {Profile} from "./Profile";
import axios from "axios";
import {GetStateType} from "../Users/UsersContainer";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/Profile-Reducer";
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userID = this.props.match.params.userID //задаём парам. для урла
        if(!userID) {
            userID = 2;
        }
        axios.get<GetStateType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userID).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div className={s.mainContent}>
                ggggg
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

let WithURLDataContainerComponent = withRouter(ProfileContainer) //добавляем к нашей контейнерной комп данные из url
export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent); //оборачиваем в ещё одну компоненту и
//коннект делает дважды вызов: mapStateToProps и mapDispatchToProps