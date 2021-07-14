import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggle,
    unfollow,
    UserType
} from "../../redux/Users-Reducer";
import React from "react";
import axios from "axios";
import {UsersFC} from "./UsersFC";
import  preloader from "../../assets/images/Ripple-2s-200px.svg"
import {Preloader} from "../common/preloader/Preloader";

export type GetStateType = {
    items: Array<UserType>
    totalCount: number
}

type MSTPType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
}
type MDTPType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (pageNumber: number) => void
    toggle: (isFetching:boolean) => void
}

export type UsersPropsType = MSTPType & MDTPType

class UsersContainer extends React.Component<UsersPropsType> {
    /*constructor(props: UsersPropsType) {
        super(props);
        //если тут только super-можно удалить, так как это по умолчанию происходит
    }*/
    componentDidMount() {
        this.props.toggle(true) //крутилка загрузки
        axios.get<GetStateType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.toggle(false)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get<GetStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggle(false)
            })

    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null}
            <UsersFC
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            usersPage={this.props.usersPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
        </>
    }
}

const mapStateToProps = (state: AppStateType & any): MSTPType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

/*const mapDispatchToProps = (dispatch: Dispatch): MDTPType => {
    return {
        follow: (userID: number) => {dispatch(followAC(userID))},
        unfollow: (userID: number) => {dispatch(unfollowAC(userID))},
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {dispatch(setTotalUsersCountAC(totalCount))},
        toggle: (isFetching) => {
            dispatch(toggleAC(isFetching))
        },
    }
}*/

export default connect(mapStateToProps, {
    //Упрощаем запись. Connect  сам вызовет АС и задиспатчит их
    //Теперь переименовываем  АС в то-же самое, но убираем в конце "АС" и получаем еще боллее короткую запись
    // А:A это тоже самое, что просто А
    follow, //follow:followAC еще более полная запись: follow: (userID: number) => {dispatch(followAC(userID))},
    unfollow,// unfollow: (userID: number) => {dispatch(unfollowAC(userID))},
    setUsers, //follow:followAC
    setCurrentPage,
    setTotalUsersCount, // setTotalUsersCount: (totalCount: number) => {dispatch(setTotalUsersCountAC(totalCount))},
    toggle,
})(UsersContainer)


/*
type UsersType = {}

export const UsersContainer = () => {
    return (
        <Users/>
        )
}*/
