export type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
export type UsersPageType = {
    users: Array<UserType>
}

export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unfollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>

export const followAC = (userID: number) => {
    return {type: "FOLLOW", userID} as const
}
export const unfollowAC = (userID: number) => {
    return {type: "UNFOLLOW", userID} as const
}
export const setUsersAC = (users: UsersPageType) => {
    return {type: "SET-USERS", users} as const
}


export const initialUsersPage = {
    users: [],
}


export type UsersActionTypes = FollowACType | UnfollowACType | SetUsersACType
export const usersReducer = (state: UsersPageType = initialUsersPage, action: UsersActionTypes): UsersPageType => {

    switch (action.type) {
        case "FOLLOW":
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
                //users: [...state.users, ...action.users.users]
                users: [...state.users, ...action.users.users]
            }

        default:
            return state;
    }
}