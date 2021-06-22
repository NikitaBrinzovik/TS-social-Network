import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersPageType, UserType} from "../../redux/Users-Reducer";


type MSTPType = {
    users: Array<UserType>
}
type MDTPType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersPageType) => void
}

export type UsersPropsType = MSTPType & MDTPType


const mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MDTPType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UsersPageType) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)


/*
type UsersType = {}

export const UsersContainer = () => {
    return (
        <Users/>
        )
}*/
