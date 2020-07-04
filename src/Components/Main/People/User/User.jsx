import React from 'react';
import s from './User.module.css';

let count = 1; 

const User = (props) => {

    let stringClass;
    if(count >= 3)
    {
        stringClass = s.user + " " + s.ru;
        if(count++ === 4)
        {
            count = 1;
        }
    }
    else
    {   
        count++;
        stringClass = s.user;
    }
    return (
        <li className={stringClass}>
            <div src="" alt="Аватарка пользователя" className = {s.photo}></div>
            <h3 className = {s.name}>{props.name}</h3>
            <p className = {s.text}>{props.text}</p>
        </li>
    );
};

export default User;
