import React from 'react'
import s from './Profile.module.css'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/Profile-Reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateType} from "../../redux/store";
import {usersAPI} from "../../api/api";


type PathParamsType = {
    userID: string
}
type MSTPType = {
    profile: ProfileType | undefined
}
type MDTPType = {
    setUserProfile: (profile:ProfileType) => void
}
type OwnPropsType = MSTPType & MDTPType
type CommonPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userID = this.props.match.params.userID //задаём парам. для урла
        if(!userID) {
            userID = 2;
        }
        usersAPI.getProfile(userID).then(response => {
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

let mapStateToProps = (state: RootStateType):MSTPType => ({
    profile: state.profilePage.profile
})

let WithURLDataContainerComponent = withRouter(ProfileContainer) //добавляем к нашей контейнерной комп данные из url
export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent); //оборачиваем в ещё одну компоненту и
//коннект делает дважды вызов: mapStateToProps и mapDispatchToProps