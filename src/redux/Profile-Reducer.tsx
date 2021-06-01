import {ActionTypes} from "./store";

export type PostsType = {
    message: string
    likes: number
    id: number
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
}

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

const initialProfileState = {
    newPostText: "",
    posts: [
        {message: 'Hey-Hey', likes: 3, id: 1},
        {message: 'Hey-Hoy', likes: 5, id: 2}
    ] as Array<PostsType>
}


export const profileReducer = (state: ProfilePageType = initialProfileState, action: ActionTypes): ProfilePageType => {

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

        default:
            return state;
    }
}