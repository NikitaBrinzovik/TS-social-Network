import {addPostActionCreator} from "./Profile-Reducer";

export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof sendMessageActionCreator>
export type DialogsReducerType = ReturnType<typeof dialogsReducer>

export type MessagesType = {
    name: string
    message: string
    id: number
}
export type DialogsType = {
    id: number
    name: string
}
export type DialogsPageType = {
    newMessageText: string
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}//альтернативная запись в одну строчку:type InitialDialogsPageType = typeof initialDialogsPage

export const sendMessageActionCreator = (messageText: string) => {
    return {
        type: "ADD-MESSAGE",
        messageText: messageText
    } as const
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
        {name: "Ilya", message: "Oh Yes!", id: 7},
    ] as Array<MessagesType>,
    dialogs: [
        {name: "Nikita", id: 1},
        {name: "Jora", id: 2},
        {name: "Polina", id: 3},
        {name: "Ivan", id: 4},
        {name: "Roma", id: 5},
        {name: "Volodzzzia", id: 6},
        {name: "Ilya", id: 7},
    ] as Array<DialogsType>,
}

export const dialogsReducer = (state: DialogsPageType = initialDialogsPage, action: ActionTypes): DialogsPageType => {

    switch (action.type) {
        case "ADD-MESSAGE": {
            const newMessage: MessagesType = {
                id: new Date().getTime(),
                message: action.messageText,
                name: "New",
            }
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage],
            };
        }
        default:
            return state;
    }
}