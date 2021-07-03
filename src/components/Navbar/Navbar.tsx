import s from './Nav.module.css'
import React from "react";
import { NavLink } from 'react-router-dom';

/*type NavPropsType = {
    // navLink: any
}*/

export function Nav() {

    return (
        <nav className={s.sideBar}>
            {/* два класса для profile: item и active */}
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/Profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Dialogs'} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Users'} activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/MyPhoto'} activeClassName={s.activeLink}>My photo</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/News'} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Settings'} activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.friends}>
                <NavLink to={'/Friends'} activeClassName={s.activeLink}>Friends</NavLink>
                {/*<div>*/}
                {/*    <Galer />*/}
                {/*    <img src='https://to-name.ru/images/historical-events/white-movement.jpg'/>*/}
                {/*</div>*/}
            </div>
        </nav>
    )
}