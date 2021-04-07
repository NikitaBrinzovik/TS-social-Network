import React from 'react'
import s from "./Likes.module.css"

type LikesPropsType = {
    numb:number
}

export function Likes  (props:LikesPropsType)  {

    return(
        <div className={s.icon}>
            <button className={ s.Like } id='likeBtn'>like</button>
            { props.numb }
        </div>
    );
};
