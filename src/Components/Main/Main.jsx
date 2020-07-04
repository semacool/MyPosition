import React from 'react';
import News from './News/News'
import Map from './Map/Map'
import People from './People/People'
import Profile from './Profile/Profile'
import s from './Main.module.css';

const Main = (props) => {

    return (
        <main>
            <div className = {s.wrapper}>
                <News/>
                <Map/>
                <People/>
                <Profile/>
            </div>
        </main>
    );
};

export default Main;
