import React from 'react'
import s from './Profile.module.css'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    ProfileActionTypes,
    ProfileType,
    updateStatus,
    UST
} from "../../redux/Profile-Reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";


class ProfileContainer extends React.Component<CommonPropsType, any> {
    componentDidMount() {
        let userID =  this.props.match.params.userID //задаём парам. для урла

        if (!userID) {
            userID = "17171";
        }

        this.props.getUserProfile(userID);
        this.props.getStatus(userID);
    }

    render() {
        return (
            <div className={s.mainContent}>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MSTPType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
    //isAuth: state.auth.isAuth
})

const mapDispatchToProps: MDTPType = {
    getUserProfile,
    getStatus,
    updateStatus
}

/*//создаём свой HOC
let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

let WithURLDataContainerComponent = withRouter(AuthRedirectComponent) //добавляем к нашей контейнерной комп данные из url
export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent); //оборачиваем в ещё одну компоненту и
//коннект делает дважды вызов: mapStateToProps и mapDispatchToProps*/

//compose
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileContainer)

//=========Types===========
type PathParamsType = {
    userID: string | undefined
}
type MSTPType = {
    profile?: ProfileType | null | undefined
    status: string
    //isAuth: boolean
}
type MDTPType = {
    getUserProfile: (userID: string) => (dispatch: Dispatch<ProfileActionTypes>) => void
    getStatus: (userID: string) => (dispatch: Dispatch<ProfileActionTypes>) => void
    updateStatus: (status: string) => UST
}
type OwnPropsType = MSTPType & MDTPType
type CommonPropsType = RouteComponentProps<PathParamsType> & OwnPropsType
