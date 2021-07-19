import axios from "axios";
import {UsersFromAPIType} from "../components/Users/UsersContainer";

/*type APIPropsType = {
    currentPage: number
    pageSize: number
}*/


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "3f338418-f98d-49bd-8d21-8909cba70bac"
    }
});
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10): Promise<never | UsersFromAPIType> {
        return instance.get<UsersFromAPIType>(`users?=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    }
}
export const getUsers2 = (currentPage: number = 1, pageSize: number = 10) => {
    instance.get<UsersFromAPIType>(`users?=${currentPage}&count=${pageSize}`).then(response => {
        return response.data
    })
}