import {ActionTypes, PostsType, ProfilePageType,} from "./store";

export type ProfileReducerType = ReturnType<typeof profileReducer>



export const addPostActionCreator = (postText: string) => {
    return {
        type: 'ADD-POST' ,
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
    ]
}
export const profileReducer = (state:ProfilePageType = initialProfileState, action:ActionTypes) => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likes: 0,
            }
            state.posts.push(newPost);
            state.newPostText = ('');
            //state.rerenderTree(state)
            //break;
            return state;
        case "CHANGE-NEW-TEXT":
            state.newPostText = action.newText;
            //state.rerenderTree(state)
            //break;
            return state;
        default:
            return state;
    }
}