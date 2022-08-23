import React from 'react';
import s from './Post.module.css';


type PostPropsType={
    message:string
    likesCount:number
}

export const Post: React.FC<PostPropsType> = (props) => {

    return (
        <div className={s.posts}>
            <div className={s.item}>

                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKH8Ew3p9hw0I9QKHFDP58aWZ-d6NUfHkA&usqp=CAU' alt={''}/>
                {props.message}
            </div>

            <span>Like{props.likesCount}</span>
        </div>
    );
};

