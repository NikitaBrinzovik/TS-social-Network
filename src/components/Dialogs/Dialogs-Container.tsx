import React from "react";
import {DialogsPageType, MessagesType} from "../../redux/Dialogs-Reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    messages: Array<MessagesType>
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        messages: state.dialogsPage.messages,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessageCallback: (message: string) => {
            dispatch({type: "ADD-MESSAGE", messageText: message})
        },
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

