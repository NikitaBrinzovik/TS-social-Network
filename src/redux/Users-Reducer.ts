/*export type LocationType = {
    city: string
    country: string
}*/
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
export type UsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    //followingInProgress: boolean
    /*followingInProgress: (isFetching: boolean, userID: number) => Array<number>*/
    followingInProgress: any
}

export type FollowACType = ReturnType<typeof follow>
export type UnfollowACType = ReturnType<typeof unfollow>
export type SetUsersACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type toggleACACType = ReturnType<typeof toggleIsFetching>
export type followingInProgressACType = ReturnType<typeof toggleFollowingInProgress>

export const follow = (userID: number) => {
    return {type: "FOLLOW", userID} as const
}
export const unfollow = (userID: number) => {
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
export const toggleFollowingInProgress = (isFetching: boolean, userID: number) => {
    return {type: "FOLLOWING_IN_PROGRESS", isFetching, userID} as const
}


export const initialUsersPage: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
    //followingInProgress: (isFetching: boolean, userID: number) =>Array<number>
}


export type UsersActionTypes =
    FollowACType |
    UnfollowACType |
    SetUsersACType |
    setCurrentPageACType |
    setTotalUsersCountACType |
    toggleACACType |
    followingInProgressACType

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
                //users: [...state.users, ...action.users]
                users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "TOTAL-USERS-COUNT": // общее кол-во польз-лей
            return {
                ...state, totalUsersCount: action.count
            }
        case "TOGGLE_IS_FETCHING": //крутилка загрузки
            return {
                ...state, isFetching: action.isFetching
            }
        case "FOLLOWING_IN_PROGRESS":
            return {
                //...state, followingInProgress: action.isFetching
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter((id: number) => id !== action.userID)
            }

        default:
            return state;
    }
}