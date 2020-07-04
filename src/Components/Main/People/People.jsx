import React from 'react';
import User from './User/User';
import s from './People.module.css';

const People = (props) => {

    return (
        <section>
            <h2 className={s.head}>ЛЮДИ</h2>
            <ul>
                <User name="Имя фамилия" text="Оу всем, привет, а я новый пользователь, приятно познакомиться"></User>
                <User name="Имя фамилия" text="Оу всем, привет, а я новый пользователь, приятно познакомиться"></User>
                <User name="Имя фамилия" text="Оу всем, привет, а я новый пользователь, приятно познакомиться"></User>
                <User name="Имя фамилия" text="Оу всем, привет, а я новый пользователь, приятно познакомиться"></User>
                <User name="Имя фамилия" text="Оу всем, привет, а я новый пользователь, приятно познакомиться"></User>
                <User name="Имя фамилия" text="Оу всем, привет, а я новый пользователь, приятно познакомиться"></User>
                <User name="Имя фамилия" text="Оу всем, привет, а я новый пользователь, приятно познакомиться"></User>
                <User name="Имя фамилия" text="Оу всем, привет, а я новый пользователь, приятно познакомиться"></User>
            </ul>
            <button className={s.morepeople} alt="Показать больше записей" />
        </section>
    );
};

export default People;
