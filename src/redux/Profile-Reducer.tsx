import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

//CONST
const initialProfileState: ProfilePageType = {
    status: "",
    newPostText: "",
    posts: [
        {message: 'Hey-Hey', likes: 3, id: 1},
        {message: 'Hey-Hoy', likes: 5, id: 2}
    ]
}

const ADD_POST = "ADD_POST";
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

//AC
export const addPostActionCreator = (postText: string) => {
    return {
        type: "ADD_POST",
        postText: postText
    } as const
}
export const newTextChangeHandleActionCreator = (newText: string) => {
    return {
        type: "CHANGE_NEW_TEXT",
        newText: newText
    } as const //либо можно тут написать
}
const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET_USER_PROFILE",
        profile,
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: "SET_STATUS",
        status,
    } as const
}
//thunkCr
export const getUserProfile = (userID: string) => {
    return (dispatch: Dispatch<ProfileActionTypes>) => {
        profileAPI.getProfile(+userID).then(response => {
            // @ts-ignore //что за фигня? в следущем TC я сделал туСтринг, но это же $%#^$#&&$
            //см типизацию в проф контейнере
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getStatus = (userID: string) => {
    return (dispatch: Dispatch<ProfileActionTypes>) => {
        profileAPI.getStatus(+userID).then(res => {
            dispatch(setStatus(res.data))
        })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status))
                //dispatch(setStatus(res.status))
            }
        })
    }
}

export type UST = ReturnType<typeof updateStatus>
export type GST = ReturnType<typeof getStatus>
//REDUCER
export const profileReducer = (state: ProfilePageType = initialProfileState, action: ProfileActionTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likes: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ('')
            };
        }

        case CHANGE_NEW_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

//TYPES
type ProfileReducerType = ProfilePageType | ProfileType

export type ProfileActionTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof newTextChangeHandleActionCreator> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus> |
    ReturnType<typeof setStatus>

export type PostsType = {
    message: string
    likes: number
    id: number
}
export type ProfileType = {
    "aboutMe"?: null | string,
    "contacts"?: {
        "facebook": null | string,
        "website": null | string
        "vk": null | string
        "twitter": null | string
        "instagram": null | string
        "youtube": null | string
        "github": null | string
        "mainLink": null | string
    },
    "lookingForAJob"?: null | boolean
    "lookingForAJobDescription"?: null | string
    "fullName"?: null | string
    "userId"?: number
    "photos"?: {
        "small": null | string
        "large": null | string
    }
}
export type ProfilePageType = {
    status: string
    newPostText: string
    posts: Array<PostsType>
    profile?: ProfileType
}