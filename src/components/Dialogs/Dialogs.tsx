import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {DialogsPageType} from "../../redux/Dialogs-Reducer";
import { Redirect } from "react-router-dom";



export type DialogsPropsType = {
    // changeNewMessageCallback: (newText: string) => void
    // addMessageCallback: (postText: string) => void
    //dispatch: (action: ActionTypes) => void
    dialogsPage: DialogsPageType
    changeNewMessageCallback: (value: string) => void
    addMessageCallback: (value: string) => void
    isAuth:boolean
}

export function Dialogs(props: DialogsPropsType) {

    let message = props.dialogsPage.messages.map(m => <Message name={m.name} message={m.message} id={m.id}
                                                               key={m.id}/>);
    let dialog = props.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id}/>);

    const sendMessage = () => {
        props.addMessageCallback(props.dialogsPage.newMessageText)
        //props.dispatch({type: "ADD-MESSAGE", messageText: props.message})
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageCallback(e.currentTarget.value);
        //props.dispatch(newTextChangeHandlerActionCreator(e.currentTarget.value))
    }

    if (!props.isAuth) return <Redirect to={"/Login"}/>;//защита от незалогиненого пользователя props.isAuth === false
    return (
        <div className={s.allContent}>
            <div className={s.newMessages}>New message:</div>
            <div className={s.newMessages}>

                <textarea placeholder={'Enter your message'}
                          value={props.dialogsPage.newMessageText}
                          onChange={newTextChangeHandler}/>
                <button onClick={sendMessage}>send</button>
            </div>
            <div className={s.friends}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>

        </div>
    )
}