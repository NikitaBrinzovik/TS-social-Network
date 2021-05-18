import s from "./Message.module.css"
import React from "react";
import { NavLink } from "react-router-dom";



type MessagePropsType = {
    message: string
    id: number
    name:string
    //messages: Array<MessagesType>
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <NavLink to={`${"Message-from-"}${props.name+'/'}${props.id}`} >{props.message}</NavLink>
        </div>
    )
}