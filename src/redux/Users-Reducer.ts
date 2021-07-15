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
export type UsersPageType = {
    users: Array<UserType>
    pageSize?: number | undefined
    totalUsersCount?: number | undefined
    currentPage: number
    isFetching: boolean
}

export type FollowACType = ReturnType<typeof follow>
export type UnfollowACType = ReturnType<typeof unfollow>
export type SetUsersACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type toggleACACType = ReturnType<typeof toggle>

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
export const toggle = (isFetching: boolean) => {
    return {type: "TOGGLE_IS_FETCHING", isFetching} as const
}


export const initialUsersPage = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}


export type UsersActionTypes =
    FollowACType |
    UnfollowACType |
    SetUsersACType |
    setCurrentPageACType |
    setTotalUsersCountACType |
    toggleACACType
export const usersReducer = (state: UsersPageType = initialUsersPage, action: UsersActionTypes): UsersPageType => {

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

        default:
            return state;
    }
}