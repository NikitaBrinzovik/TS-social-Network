export type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
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
export const setUsersAC = (users:UsersPageType) => {
    return{type:"SET-USERS", users} as const
}


export const initialUsersPage = {
    users: [
        {id: 1, followed: true, fullName: "Nikita", status: "Hey", location: {city: "Minsk", country: "Belarus}"}},
        {id: 2, followed: true, fullName: "Jora", status: "Hoy", location: {city: "Minsk", country: "Belarus}"}},
        {id: 3, followed: false, fullName: "Polina", status: "Lets", location: {city: "Minsk", country: "Belarus}"}},
        {
            id: 4,
            followed: false,
            fullName: "Ivan",
            status: "lets go to kill a good people",
            location: {city: "Minsk", country: "Belarus"}
        },

    ] as Array<UserType>,
}


export type UsersActionTypes = FollowACType | UnfollowACType | SetUsersACType
export const usersReducer = (state: UsersPageType = initialUsersPage, action: UsersActionTypes): UsersPageType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
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
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET-USERS":
            return {
                ...state,
                // users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
}