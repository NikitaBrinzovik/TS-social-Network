import React from "react";
import {DialogsPageType, MessagesType, newTextChangeHandlerActionCreator} from "../../redux/Dialogs-Reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    messages: Array<MessagesType>
    //isAuth: boolean
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        messages: state.dialogsPage.messages,
        //isAuth: state.auth.isAuth
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

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);