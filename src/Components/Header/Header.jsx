import React from 'react';
import s from './Header.module.css';
import logo from './details/img/LogoBlack.svg'


const Header = () => {
    return (
        <header>
                <h1 className={s.hidden}>Социальная сеть MyPosition</h1>
                <div className={s.main+" clearfix"}>
                    <div className={s.wrapper}>

                    <img className={s.logo} src={logo} alt="Логотип" />
                    <nav>
                        <ul>
                            <li className={s.item}>
                                <a href="\#">КАРТА</a>
                            </li>
                            <li className={s.item}>
                                <a href="\#">В СЕТИ</a>
                            </li>
                            <li className={s.item}>
                                <a href="\#">ЛЮДИ</a>
                            </li>
                            <li className={s.item}>
                                <a href="\#">ПРОФИЛЬ</a>
                            </li>
                        </ul>
                    </nav>
                    <input className={s.search} type="search" />
                </div>
                    </div>
                <div className={s.footer}>
                    <span className={s.enter}>Вход</span>
                </div>
        </header>
    );
};


export default Header;
