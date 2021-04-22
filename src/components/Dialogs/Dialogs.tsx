import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {DialogsPageType, DialogsType, MessagesType} from "../../redux/state";



export type DialogsPropsType = {
    //name: string
    //message: string
    //id: number
    dialogsPage: DialogsPageType
    //messages: Array<MessagesType>
    // dialogs: Array<DialogsType>
}

export function Dialogs(props: DialogsPropsType) {


    let message = props.dialogsPage.messages.map(m => <Message name={m.name} message={m.message} id={m.id}/>);
    let dialog = props.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);
    return (
        <div className={s.allContent}>
            <div className={s.newMessages}>New message:</div>
            <div className={s.newMessages}>
                {/*<textarea ref={newMessage}></textarea>*/}
                {/*<button onClick={sendMessage}>send</button>*/}
                <textarea></textarea>
                <button>send</button>
            </div>
            <div className={s.friends}>
                {dialog}
                {/*<Dialog name={"Nikita"} id={1}/>*/}
                {/*<Dialog name={"Jora"} id={2}/>*/}
                {/*<Dialog name={"Polina"} id={3}/>*/}
                {/*<Dialog name={"Ivan"} id={4}/>*/}
                {/*<Dialog name={"Roma"} id={5}/>*/}
                {/*<Dialog name={"Volodzzzia"} id={6}/>*/}
                {/*<Dialog name={"Ilya"} id={7}/>*/}
            </div>
            <div className={s.messages}>
                {message}
                {/*<Message name={"Nikita"} message={"Hey"} id={1}/>*/}
                {/*<Message name={"Jora"} message={"Hoy"} id={2}/>*/}
                {/*<Message name={"Polina"} message={"Lets"} id={3}/>*/}
                {/*<Message name={"Ivan"} message={"go! Yes, lets go to kill a good people, comrrrrade!"} id={4}/>*/}
                {/*<Message name={"Roma"} message={"Oh no!"} id={5}/>*/}
                {/*<Message name={"Volodzzzia"} message={"Oh Yes!"} id={6}/>*/}
                {/*<Message name={"Ilya"} message={"Oh Yes!"} id={7}/>*/}

            </div>
        </div>
    )
}