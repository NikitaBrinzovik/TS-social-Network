import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/Users-Reducer";
import React from "react";
import axios from "axios";
import {UsersFC} from "./UsersFC";

export type GetStateType = {
    items: Array<UserType>
    totalCount:number
}

type MSTPType =  {
    usersPage: Array<UserType>
    pageSize:number
    tottalUsersCount: number
    currentPage: number

}
type MDTPType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (pageNumber: number) => void
}

export type UsersPropsType = MSTPType & MDTPType

class UsersContainer extends React.Component<UsersPropsType> {
    /*constructor(props: UsersPropsType) {
        super(props);
        //если тут только super-можно удалить, так как это по умолчанию происходит
    }*/
    componentDidMount() {
        axios.get<GetStateType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get<GetStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    }
    render() {
        return <UsersFC
            tottalUsersCount ={this.props.tottalUsersCount}
            pageSize ={this.props.pageSize}
            currentPage ={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            usersPage={this.props.usersPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

const mapStateToProps = (state: AppStateType & any): MSTPType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        tottalUsersCount: state.usersPage.tottalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}


//export default connect(mapStateToProps, mapDispatchToProps)(Users)
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)


/*
type UsersType = {}

export const UsersContainer = () => {
    return (
        <Users/>
        )
}*/
