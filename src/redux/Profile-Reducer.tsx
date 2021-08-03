import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

type ProfileActionTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof newTextChangeHandleActionCreator> |
    ReturnType<typeof setUserProfile>

export type PostsType = {
    message: string
    likes: number
    id: number
}
export type ProfileType = {
    "aboutMe"?: null | string,
    "contacts"?: {
        "facebook": null |string,
        "website": null | string
        "vk": null | string
        "twitter": null | string
        "instagram": null | string
        "youtube": null | string
        "github": null | string
        "mainLink": null | string
    },
    "lookingForAJob"?:  null | boolean
    "lookingForAJobDescription"?:  null | string
    "fullName"?:  null | string
    "userId"?: number
    "photos"?: {
        "small":null | string
        "large": null | string
    }
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
    profile?: ProfileType
}

//AC
export const addPostActionCreator = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}
export const newTextChangeHandleActionCreator = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",//либо тут написать
        newText: newText
    } as const //либо можно тут написать
}
const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET_USER_PROFILE',
        profile,
    } as const
}

//thunkCr
export const getUserProfile = (userID:string) => {
    return (dispatch: Dispatch<ProfileActionTypes>) => {
        usersAPI.getProfile(+userID).then(response => {
            // @ts-ignore
            dispatch(setUserProfile(response.data))
        })
    }
}

const initialProfileState: ProfilePageType = {

    newPostText: "",
    posts: [
        {message: 'Hey-Hey', likes: 3, id: 1},
        {message: 'Hey-Hoy', likes: 5, id: 2}
    ]
}

type ProfileReducerType = ProfilePageType | ProfileType

export const profileReducer = (state: ProfilePageType = initialProfileState, action: ProfileActionTypes) :ProfilePageType  => {

    switch (action.type) {
        case "ADD-POST": {
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

        case "CHANGE-NEW-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        case "SET_USER_PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}