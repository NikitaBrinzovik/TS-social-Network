import s from './Nav.module.css'
import React from "react";

type NavPropsType = {
    // navLink: any
}

export function Nav(props: NavPropsType) {

    return (
        <nav className={s.sideBar}>
            {/* два класса для profile: item и active */}
            <div className={`${s.item} ${s.active}`}>
                <a>Profile</a>
                {/*<NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>*/}
            </div>
            <div className={s.item}>
                <a>Messages</a>
                {/*<NavLink to={'/Dialogs'} activeClassName={s.activeLink}>Messages</NavLink>*/}
            </div>
            <div className={s.item}>
                <a>My photo</a>
                {/*<NavLink to={'/MyPhoto'} activeClassName={s.activeLink}>My photo</NavLink>*/}
            </div>
            <div className={s.item}>
                <a>News</a>
                {/*<NavLink to={'/News'} activeClassName={s.activeLink}>News</NavLink>*/}
            </div>
            <div className={s.item}>
                <a>Settings</a>
                {/*<NavLink to={'/Settings'} activeClassName={s.activeLink}>Settings</NavLink>*/}
            </div>
            <div className={s.friends}>
                <a>Friends</a>
                {/*<NavLink to={'/Friends'} activeClassName={s.activeLink}>Friends</NavLink>*/}
                {/*<div>*/}
                {/*    <Galer />*/}
                {/*    <img src='https://to-name.ru/images/historical-events/white-movement.jpg'/>*/}
                {/*</div>*/}
            </div>
        </nav>
    )
}