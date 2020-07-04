import React from 'react';
import MyMarker from './MyMarker/MyMarker';
import s from './Map.module.css';

const Map = (props) => {

    return (
        <section>
                <h2 className={s.head}>КАРТА</h2>
                <div className={s.map}></div>
                <MyMarker title="Тут я бухал" cordX = "23142" cordY = "123555" likes="+111" comments="+111"/>
                <MyMarker title="Самое классное место на земле" cordX = "23142" cordY = "123555" likes="+111" comments="+111"/>
                <button className={s.more_mymarkers} alt="Показать больше записей" />
        </section>
    );
};

export default Map;
