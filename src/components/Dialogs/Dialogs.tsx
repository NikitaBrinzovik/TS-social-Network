import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {ActionTypes, DialogsPageType, DialogsType, MessagesType} from "../../redux/state";


export type DialogsPropsType = {
    // changeNewMessageCallback: (newText: string) => void
    // addMessageCallback: (postText: string) => void
    message: string
    dispatch: (action:ActionTypes) => void
    dialogsPage: DialogsPageType
}

export function Dialogs(props: DialogsPropsType) {

    let message = props.dialogsPage.messages.map(m => <Message name={m.name} message={m.message} id={m.id}
                                                               key={m.id}/>);
    let dialog = props.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id}/>);

    const sendMessage = () => {
        // props.dispatch( addMessageCallback(props.message)
        props.dispatch({ type:"ADD-MESSAGE", messageText: props.message })

    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.changeNewMessageCallback(e.currentTarget.value);
        props.dispatch({type: "NEW-MESSAGE", newText: props.message})
    }

    return (
        <div className={s.allContent}>
            <div className={s.newMessages}>New message:</div>
            <div className={s.newMessages}>


                <textarea value={props.message}
                          onChange={newTextChangeHandler}/>
                <button onClick={sendMessage}>send</button>
            </div>
            <div className={s.friends}>
                {dialog}
                {/*<Dialog name={"Nikita"} id={1}/>*/}
            </div>
            <div className={s.messages}>
                {message}
                {/*<Message name={"Nikita"} message={"Hey"} id={1}/>*/}
            </div>
        </div>
    )
}