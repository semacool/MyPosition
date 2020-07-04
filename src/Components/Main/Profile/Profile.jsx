import React from 'react';
import s from './Profile.module.css';


const Profile = (props) => {
    return (
        <section>
            <h2 className = {s.head}>ПРОФИЛЬ</h2>
            <div className = {s.photo}></div>
            <div className="clearfix">
                <span className = {s.info}>ДЕНЬ РОЖДЕНИЯ:</span>
                <span className = {s.info}>03.04.2001</span>

                <span className = {s.info}>АДРЕС:</span>
                <span className = {s.info}>УЛ. БУХАРОГО</span>

                <span className = {s.info + " clearfix"}>ОПИСАНИЕ:</span>
                <span className = {s.info + " clearfix"}>Я уже устал, опять ненаход</span>
              
            </div>
        </section>
    );
};
export default Profile;
