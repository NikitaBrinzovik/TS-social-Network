import React from "react";
import {DialogsPageType, MessagesType, newTextChangeHandlerActionCreator} from "../../redux/Dialogs-Reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";


// export type DialogsPropsType = {
//     // changeNewMessageCallback: (newText: string) => void
//     // addMessageCallback: (postText: string) => void
//     message: string
//     dispatch: (action: ActionTypes) => void
//     dialogsPage: DialogsPageType
// }

// export function DialogsContainer(props: DialogsPropsType) {
//
//     const addMessageCallback = () => {
//         // props.dispatch( addMessageCallback(props.message)
//         props.dispatch({type: "ADD-MESSAGE", messageText: props.message})
//
//     }
//     //const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     const changeNewMessageCallback = (value: string) => {
//         // props.changeNewMessageCallback(e.currentTarget.value);
//         props.dispatch(newTextChangeHandlerActionCreator(value))
//     }
//
//     return (
//         <Dialogs
//             message={props.message}
//             dialogsPage={props.dialogsPage}
//             changeNewMessageCallback={changeNewMessageCallback}
//             addMessageCallback={addMessageCallback}/>
//     )
// }

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    messages: Array<MessagesType>
}
let mapStateToProps = (state:AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addMessageCallback: (message:string) => {
            dispatch({type: "ADD-MESSAGE", messageText:message})
        },
        changeNewMessageCallback: (value: string) => {
            dispatch(newTextChangeHandlerActionCreator(value))
        }
    }
}

export const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);