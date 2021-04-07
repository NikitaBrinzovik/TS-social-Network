import React from 'react'
import { Likes } from './Likes/Likes';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    numb: number
    id:number
}

export function Post(props: PostPropsType) {

    return (
        <div className={s.item}>
            <img src='https://fb.ru/misc/i/gallery/5308/2580837.jpg' alt='happy face'/>
            {props.message}
            <div className={s.likesStyle}>
                <Likes numb={props.numb} />
            </div>

        </div>
    );
};
