import axios from "axios";
import {UserType} from "../redux/Users-Reducer";
import {DataStateType} from "../redux/auth-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "3f338418-f98d-49bd-8d21-8909cba70bac"
    }
});


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10): Promise<GetUsersAPIType> {
        return instance.get<GetUsersAPIType>(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow(userID: number) {
        return instance.post<FollowResponseType>(`follow/${userID}`)
    },
    unfollow(userID: number) {
        return instance.delete<FollowResponseType>(`follow/${userID}`)
    },
}

export const profileAPI = {
    getProfile(userID: number) {
        return instance.get<GetUsersAPIType>(`profile/` + userID)
    },

    getStatus(userID: number) {
        return instance.get(`profile/status/` + userID)
    },
    updateStatus(status: string) {
        return instance.put<ProfileStatusType>(`profile/status/`, {status: status})
    },
}

export const authAPI = {
    me() {
        return instance.get<GetStateType>(`auth/me`)
    },
    login(data: DataStateType) {//Дима сделал изначально заглушку ремберМи = фалс
        return instance.post<DataStateType>(`auth/login`, {data: data})
    },
    logout() {//Дима сделал изначально заглушку ремберМи = фалс
        return instance.delete(`auth/login`)
    },
}

export type ProfileStatusType = {
    resultCode: number//(0 if opearation completed successfullt, other numbers - some error occured)
    messages: Array<string>//empty if resultCode is 0, contains error messages if resultCode is not a 0
    data: object//    some additional data
}

export type FollowResponseType = {
    resultCode: number //(0 if operation completed successfully, other numbers - some error occurred)
    messages: string //is empty if resultCode is 0, contains error messages if resultCode is different from 0
    data: {}
}

export type GetUsersAPIType = {
    items: UserType[]
    totalCount: number //total amount of registered users matching criteria
    error: string //if result can't be returned this field will contain error message

}

type GetStateType = {
    data: DataStateType
    resultCode: number
}

type UserAPIType = {//=UserType почти)
    id: number
    name: string
    status: (string)
    followed: boolean
    photos: {
        small: string | null
        large: string | null
    }
}
//export type UsersFromAPIType = {
//     items: Array<UserType>
//     totalCount: number
// }
