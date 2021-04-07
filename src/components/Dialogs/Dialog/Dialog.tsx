import s from './Dialog.module.css'
import React from "react";
import {NavLink} from 'react-router-dom';


type DialogPropsType = {
    name: string
    id: number
}

export function Dialog(props: DialogPropsType) {
    return (
        <div className={s.dialog}>
            <NavLink to={props.name + '/' + props.id}>{props.name}</NavLink>
            <div>
                <img src={'https://navegante.ru/Insignia/Down/x1_1792.jpg'} alt={'friens face'}/>
            </div>
        </div>
    )
}
