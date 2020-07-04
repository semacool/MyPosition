import React from 'react';
import s from './NewItem.module.css';

const NewItem = (props) => {

    return (
        <article className={s.article}>
            <header className={s.header+" clearfix"}>
                <h3 className={s.title}>{props.title}</h3>
                <a href="\#" className={s.date}>{props.date}</a>
                <a href="\#" className={s.author}>{props.author}</a>
            </header>
            <main className={s.main}>
                <p className={s.text}>{props.text}</p>
                <div className={s.map}></div>
            </main>
        </article>
    );
};

export default NewItem;
