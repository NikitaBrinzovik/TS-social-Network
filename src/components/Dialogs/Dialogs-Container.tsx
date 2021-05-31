import React, {ChangeEvent} from "react";
import {ActionTypes, DialogsPageType, StoreType,} from "../../redux/store";
import {newTextChangeHandlerActionCreator} from "../../redux/Dialogs-Reducer";
import {Dialogs} from "./Dialogs";


export type DialogsPropsType = {
    // changeNewMessageCallback: (newText: string) => void
    // addMessageCallback: (postText: string) => void
    message: string
    dispatch: (action: ActionTypes) => void
    dialogsPage: DialogsPageType
}

export function DialogsContainer(props: DialogsPropsType) {

    const addMessageCallback = () => {
        // props.dispatch( addMessageCallback(props.message)
        props.dispatch({type: "ADD-MESSAGE", messageText: props.message})

    }
    //const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const changeNewMessageCallback = (value: string) => {
        // props.changeNewMessageCallback(e.currentTarget.value);
        props.dispatch(newTextChangeHandlerActionCreator(value))
    }

    return (
        <Dialogs
            message={props.message}
            dialogsPage={props.dialogsPage}
            changeNewMessageCallback={changeNewMessageCallback}
            addMessageCallback={addMessageCallback}/>
    )
}