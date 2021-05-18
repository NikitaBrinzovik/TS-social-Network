import {ActionTypes, DialogsPageType, MessagesType} from "./store";


export type DialogsReducerType = ReturnType<typeof dialogsReducer>


export const sendMessageActionCreator = (messageText: string) => {
    return {
        type: "ADD-MESSAGE" ,
        messageText: messageText
    }as const
}
export const newTextChangeHandlerActionCreator = (newText: string) => {
    return {
        type: "NEW-MESSAGE-TEXT" ,
        newText: newText
    }as const
}

const initialDialogsPage = {
    newMessageText: "",
    messages: [
        {name: "Nikita", message: "Hey", id: 1},
        {name: "Jora", message: "Hoy", id: 2},
        {name: "Polina", message: "Lets", id: 3},
        {name: "Ivan", message: "go! Yes, lets go to kill a good people, comrrrrade!", id: 4},
        {name: "Roma", message: "Oh no!", id: 5},
        {name: "Volodzzzia", message: "Oh Yes!", id: 6},
        {name: "Ilya", message: "Oh Yes!", id: 7},],
    dialogs: [
        {name: "Nikita", id: 1},
        {name: "Jora", id: 2},
        {name: "Polina", id: 3},
        {name: "Ivan", id: 4},
        {name: "Roma", id: 5},
        {name: "Volodzzzia", id: 6},
        {name: "Ilya", id: 7},
    ],
}

export const dialogsReducer = (state:DialogsPageType = initialDialogsPage, action:ActionTypes) => {

    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessagesType = {
                id: new Date().getTime(),
                message: action.messageText,
                name: "New",
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            // state.rerenderTree(state)
            return state;
        case "NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText;
            // state.rerenderTree(state)
            return state;
        default:
            return state;
    }
}