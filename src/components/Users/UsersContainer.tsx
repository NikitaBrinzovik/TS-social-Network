import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    changeFollowingInProgress,
    follow,
    getUsersThunkCreator,
    setCurrentPage,
    unfollow,
    UserType
} from "../../redux/Users-Reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";


type MSTPType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number

    isFetching: boolean
    followingInProgress: Array<number>
}
type MDTPType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (pageNumber: number) => void
    changeFollowingInProgress: (isFetching: boolean, userID: number) => void
    //setUsers: (users: Array<UserType>) => void
    //setTotalUsersCount: (pageNumber: number) => void

    //thunk
    getUsers: (currentPage: number, pageSize: number) => void//(currentPage:number, pageSize:number) =>GetUsersTCType

}

export type UsersPropsType = MSTPType & MDTPType

class UsersContainer extends React.Component<UsersPropsType> {
    /*constructor(props: UsersPropsType) {
        super(props);
        //если тут только super-можно удалить, так как это по умолчанию происходит
    }*/
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        debugger
        this.props.getUsers(pageNumber, this.props.pageSize);
        /*   this.props.toggle(true)
           this.props.setCurrentPage(pageNumber);

           /!*axios.get<GetStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
               withCredentials: true,
           })
               *!/
           usersAPI.getUsers(pageNumber, this.props.pageSize)
               .then(data => {
                   this.props.setUsers(data.items)
                   this.props.toggle(false)
               })
   */
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                usersPage={this.props.usersPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}

                followingInProgress={this.props.followingInProgress}
                //isFetching={this.props.isFetching}
                //toggle={this.props.toggle}
                //changeFollowingInProgress={this.props.changeFollowingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

const mapDispatchToProps: MDTPType = {
    follow,
    unfollow,
    setCurrentPage,
    //setUsers,
    //setTotalUsersCount,
    changeFollowingInProgress,//у диы toggleFollowingInProgress
    getUsers: getUsersThunkCreator,

}

export default connect(mapStateToProps, mapDispatchToProps
    /*
    //Упрощаем запись. Connect  сам вызовет АС и задиспатчит их
    //Теперь переименовываем  АС в то-же самое, но убираем в конце "АС" и получаем еще боллее короткую запись
    // А:A это тоже самое, что просто А
    follow, //follow:followAC еще более полная запись: follow: (userID: number) => {dispatch(followAC(userID))},
    unfollow,// unfollow: (userID: number) => {dispatch(unfollowAC(userID))},
    setUsers,
    setCurrentPage,
    setTotalUsersCount, // setTotalUsersCount: (totalCount: number) => {dispatch(setTotalUsersCountAC(totalCount))},
    toggle: toggleIsFetching,
    changeFollowingInProgress,*/
)(UsersContainer)

