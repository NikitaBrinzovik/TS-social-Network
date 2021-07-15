export type DataStateType = {
    id: null | number   //logged user id
    email: null | string   //logged user email
    login: null | string   //user login
}
type AuthStateType = {
    data: DataStateType //if user is authenticated then data contains all this properties
    resultCode: number   //(0 if operation completed sucsesfull, other numbers - some error occured)
    messages: Array<string>   //is empty if resultCode is 0, contains error messages if resultCode is different from 0
    isFetching: boolean
    isAuth: boolean
    login?: string
}

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

export type setUsersDataACType = ReturnType<typeof setAuthUsersData>
export const setAuthUsersData = (data: DataStateType) => {
    return {type: "SET_USERS_DATA", data} as const
}

export type AuthActionTypes =
    setUsersDataACType

export const authReducer = (state: AuthStateType = initialAuthState, action: AuthActionTypes): AuthStateType => {

    switch (action.type) {
        case "SET_USERS_DATA": // подписаться на пользователя
            return {
                ...state,
                data: action.data,
                isAuth:true
            };

        default:
            return state;
    }
}