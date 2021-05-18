import {ActionTypes, PostsType, ProfilePageType,} from "./store";


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
export type ProfileReducerType = ReturnType<typeof profileReducer>
export const profileReducer = (state:ProfilePageType, action:ActionTypes) => {

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