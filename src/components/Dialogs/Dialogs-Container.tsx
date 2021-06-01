import React from "react";
import {DialogsPageType, MessagesType, newTextChangeHandlerActionCreator} from "../../redux/Dialogs-Reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    messages: Array<MessagesType>
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessageCallback: (message: string) => {
            dispatch({type: "ADD-MESSAGE", messageText: message})
        },
        changeNewMessageCallback: (value: string) => {
            dispatch(newTextChangeHandlerActionCreator(value))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);