import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {DialogsPageType} from "../../redux/Dialogs-Reducer";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControl";
import {maxLengthCreator, requiredField} from "../../utils/validators";


export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    changeNewMessageCallback: (value: string) => void
    addMessageCallback: (value: string) => void
    isAuth: boolean

}

export function Dialogs(props: DialogsPropsType) {

    let message = props.dialogsPage.messages.map(m => <Message name={m.name} message={m.message} id={m.id}
                                                               key={m.id}/>);
    let dialog = props.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id}/>);

    const addNewMessage = (values: any) => {
        props.addMessageCallback(values.newMessageText)
    }

    return (
        <div className={s.allContent}>
            <div className={s.newMessages}>New message:</div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
            <div className={s.friends}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>

        </div>
    )
}

const messageMaxLength = maxLengthCreator(50)
const AddMessageForm = (props: any) => {
    return (<form className={s.newMessages} onSubmit={props.handleSubmit}>

        <Field component={Textarea}
               placeholder={'Enter your message'}
               name="newMessageText"
               validate={[requiredField, messageMaxLength]}
        />
        <button>send</button>
    </form>)
}

const AddMessageFormRedux = reduxForm<any>({form: "AddMessageForm"})(AddMessageForm)