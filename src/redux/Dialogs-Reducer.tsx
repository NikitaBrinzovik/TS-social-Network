import {ActionTypes, MessagesType} from "./state";


export const sendMessageActionCreator = (messageText: string) => {
    return {
        type: "ADD-MESSAGE" as const,
        messageText: messageText
    }
}
export const newTextChangeHandlerActionCreator = (newText: string) => {
    return {
        type: "NEW-MESSAGE-TEXT" as const,
        newText: newText
    }
}

export type DialogsReducerType = ReturnType<typeof dialogsReducer>
export const dialogsReducer = (state:any, action:ActionTypes) => {

    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessagesType = {
                id: new Date().getTime(),
                message: action.messageText,
                name: "New",
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            state.rerenderTree(state)
            return state;
        case "NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText;
            state.rerenderTree(state)
            return state;
        default:
            return state;
    }
}