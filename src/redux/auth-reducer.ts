import {Dispatch} from "redux";
import {authAPI} from "../api/api";


let initialAuthState: AuthStateType = {
    resultCode: 0,
    messages: [],
    data: {
        id: null,
        email: null,
        login: null,
    },
    isFetching: false,
    isAuth: false
}

//AC----------------------------------
export const setAuthUsersData = (data: DataStateType) => {
    return {type: "SET_USERS_DATA", data} as const
}

//TC-----------------------------------
export const getAuthUsersData = () => (dispatch: Dispatch<AuthActionTypes>) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) { //только если прошли проверку
            let {id, login, email} = response.data.data;
            //this.props.setAuthUsersData(response.data.data.login);//одна дата- из axios,  вторая из бека(документация-логин, имаил, юзерID
            dispatch(setAuthUsersData({id, login, email, isAuth: true}));
        }
    })
}

//export const loginTC = (email:string, password: string, rememberMe:boolean) => (dispatch: Dispatch<AuthActionTypes>) => {
export const loginTC = (data: DataStateType) => (dispatch: Dispatch<any>) => {
    authAPI.login(data).then(response => {
        if (response.data.resultCode === 0) { //только если прошли проверку
            dispatch(getAuthUsersData())
        }
    })
}
export const logoutTC = () => (dispatch: Dispatch<any>) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) { //только если прошли проверку
            dispatch(setAuthUsersData({id: null, email: null, login: null, isAuth: false}))
        }
    })
}

//Reducer---------------------------------
export const authReducer = (state: AuthStateType = initialAuthState, action: AuthActionTypes): AuthStateType => {
    switch (action.type) {
        case "SET_USERS_DATA":
            return {
                ...state,
                data: action.data,
                isAuth: true
            };

        default:
            return state;
    }
}

//Types--------------------------------------------
export type DataStateType = {
    id: null | number |string //logged user id
    email: null | string   //logged user email
    login: null | string   //user login
    resultCode?: number
    isAuth?: boolean
}
type AuthStateType = {
    data: DataStateType //if user is authenticated then data contains all this properties
    resultCode: number   //(0 if operation completed sucsesfull, other numbers - some error occured)
    messages: Array<string>   //is empty if resultCode is 0, contains error messages if resultCode is different from 0
    isFetching: boolean
    isAuth: boolean
    login?: string
}

export type setUsersDataACType = ReturnType<typeof setAuthUsersData>
export type getUsersDataACType = ReturnType<typeof getAuthUsersData>

export type AuthActionTypes = setUsersDataACType

