import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

type HeaderPropsType = {
    isAuth: boolean
    login: string
}
export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://yt3.ggpht.com/a/AATXAJyHQ5O9_St_6GaBs1wmyfN93kSuWHotnPEgX9nQ=s900-c-k-c0xffffffff-no-rj-mo'/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}



