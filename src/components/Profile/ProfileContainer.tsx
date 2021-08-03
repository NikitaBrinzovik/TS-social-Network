import React from 'react'
import s from './Profile.module.css'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/Profile-Reducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {AppStateType} from "../../redux/redux-store";


type PathParamsType = {
    userID: string | undefined//- RouteComponentProps<PathParamsType> руагается и говорит, что должна быть string
}
type MSTPType = {
    profile: ProfileType | undefined
    isAuth: boolean
}
type MDTPType = {
    getUserProfile: (userID: string) => void
    profile: ProfileType | undefined
}
type OwnPropsType = MSTPType & MDTPType
type CommonPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<CommonPropsType, any> {

    componentDidMount() {
        let userID = this.props.match.params.userID //задаём парам. для урла
        if (!userID) {
            userID = "17171";
        }
        this.props.getUserProfile(userID);

    }

    render() {
        //if (this.props.isAuth === false) return <Redirect to={"/Login"}/>; //защита от незалогиненого пользователя
        if (!this.props.isAuth) return <Redirect to={"/Login"}/>; //короткая запись "!"
        return (
            <div className={s.mainContent}>
                ggggg
                <Profile profile={this.props.profile}/>
            </div>
        )
    }

}

let mapStateToProps = (state: AppStateType): MSTPType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithURLDataContainerComponent = withRouter(ProfileContainer) //добавляем к нашей контейнерной комп данные из url
export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent); //оборачиваем в ещё одну компоненту и
//коннект делает дважды вызов: mapStateToProps и mapDispatchToProps