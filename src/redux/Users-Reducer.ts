import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

type PhotoType = {
    small: null | string
    large: null | string
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotoType
    status: string
    followed: boolean
}
/*export type UsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    toggleFollowingInProgress:Array<number>
}*/

export type FollowACType = ReturnType<typeof followSuccess>
export type UnfollowACType = ReturnType<typeof unfollowSuccess>
export type SetUsersACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type toggleACACType = ReturnType<typeof toggleIsFetching>
export type followingInProgressACType = ReturnType<typeof changeFollowingInProgress>


export const initialUsersPage = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}
export type UsersStateType = typeof initialUsersPage

export type UsersActionTypes =
    FollowACType |
    UnfollowACType |
    SetUsersACType |
    setCurrentPageACType |
    setTotalUsersCountACType |
    toggleACACType |
    followingInProgressACType
//GetUsersTCType//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const usersReducer = (state: UsersStateType = initialUsersPage, action: UsersActionTypes): UsersStateType => {

    switch (action.type) {
        case "FOLLOW": // подписаться на пользователя
            return {
                ...state,
                users: state.users.map(u => {
                    //state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    //state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "TOTAL-USERS-COUNT":
            return {
                ...state, totalUsersCount: action.count
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "FOLLOWING_IN_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter((id: number) => id !== action.userID)
            }

        default:
            return state;
    }
}

//actions
export const followSuccess = (userID: number) => {
    return {type: "FOLLOW", userID} as const
}
export const unfollowSuccess = (userID: number) => {
    return {type: "UNFOLLOW", userID} as const
}
export const setUsers = (users: Array<UserType>) => {
    return {type: "SET-USERS", users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: "SET-CURRENT-PAGE", currentPage} as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {type: "TOTAL-USERS-COUNT", count: totalUsersCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: "TOGGLE_IS_FETCHING", isFetching} as const
}
export const changeFollowingInProgress = (isFetching: boolean, userID: number) => {
    return {type: "FOLLOWING_IN_PROGRESS", isFetching, userID} as const
}

//thunkCreators with thunk inside

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {

    //thunk:
    return (dispatch: Dispatch<UsersActionTypes>) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setCurrentPage(currentPage))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(toggleIsFetching(false))
        })
    }
}

export const follow = (userID:number) => { //TCreator
    return (dispatch: Dispatch<UsersActionTypes>)=>{ //Thunk
        dispatch(changeFollowingInProgress(true, userID));
        usersAPI.follow(userID)//это промис
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userID))
                }
                dispatch(changeFollowingInProgress(false, userID))
            })

    }
}
export const unfollow = (userID:number) => {
    return (dispatch: Dispatch<UsersActionTypes>)=>{
        dispatch(changeFollowingInProgress(true, userID));
        usersAPI.follow(userID)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userID))
                }
                dispatch(changeFollowingInProgress(false, userID))
            })

    }
}


//thunkAC types
export type GetUsersTCType = ReturnType<typeof getUsersThunkCreator>