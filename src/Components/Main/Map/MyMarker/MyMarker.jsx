import React from 'react';
import s from './MyMarker.module.css';

let count = 1;

const MyMarker = (props) => {

    return (
        <article className={s.article + (count++ % 2 === 0?" "+s.rm:"") }>
            <header className={s.header +" clearfix"}>
                <h3 className={s.title}>{props.title}</h3>
            </header>
            <main className={s.main + " clearfix"}>
                <span className={s.cordX}>X:{props.cordX}</span>
                <span className={s.cordY}>Y:{props.cordY}</span>
                <span className={s.likes}>&nbsp;{props.likes}</span>
                <span className={s.comments}>&nbsp;{props.comments}</span>
            </main>
            <p className={s.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.psum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </article>
    );
};

export default MyMarker;