import React from 'react';

import './CharacteristicTab.scss';

export const CharacteristicTab = ({visibility}) => {
    return (
        <div className="characteristic-tab" style={{visibility: visibility}}>
            <div className="characteristic-tab__item" data-scroll data-scroll-speed="3">
                <div className="characteristic-tab__item_title">
                    <h5>FIREPOWER</h5>
                </div>
                <ul className="characteristic-tab__item_list">
                    <li className="list-item">
                        <div className="list-item__left">DAMAGE</div>
                        <div className="list-item__right">240 / 240 / 320 HP</div>
                    </li>
                    <li className="list-item">
                        <div className="list-item__left">ARMOR PENETRATION</div>
                        <div className="list-item__right">202 / 258 / 45 mm</div>
                    </li>
                    <li className="list-item">
                        <div className="list-item__left">RATE OF FIRE</div>
                        <div className="list-item__right">7.50 rounds/min</div>
                    </li>
                    <li className="list-item">
                        <div className="list-item__left">DAMAGE PER MINUTE</div>
                        <div className="list-item__right">1,800 HP/min</div>
                    </li>
                    <li className="list-item">
                        <div className="list-item__left">AIMING TIME</div>
                        <div className="list-item__right">2.30 s</div>
                    </li>
                    <li className="list-item">
                        <div className="list-item__left">DISPERSION AT 100 M</div>
                        <div className="list-item__right">0.38 m</div>
                    </li>
                    <li className="list-item">
                        <div className="list-item__left">AMMO CAPACITY</div>
                        <div className="list-item__right">54 divcs</div>
                    </li>
                </ul>
            </div>
            <div className="characteristic-tab__item"  data-scroll data-scroll-speed="2.5">
                <div className="characteristic-tab__item_title">
                    <h5>MOBILITY</h5>
                </div>
                <ul className="characteristic-tab__item_list">
                    <li className="list-item">
                        <div className="list-item__left">WEIGHT/LOAD LIMIT</div>
                        <div className="list-item__right">50.55 / 53 t</div>
                    </li>
                    <li className="list-item">
                        <div className="list-item__left">
                            ENGINE POWER</div>
                        <div className="list-item__right">610 hp
                        </div>
                    </li>
                    <li className="list-item">
                        <div className="list-item__left">SPECIFIC POWER</div>
                        <div className="list-item__right">12.07 hp/t</div>
                    </li>
                    <li className="list-item">
                        <div className="list-item__left">TOP SPEED</div>
                        <div className="list-item__right">40.20 km/h</div>
                    </li>
                    <li className="list-item">
                        <div className="list-item__left">TRAVERSE SPEED</div>
                        <div className="list-item__right">32 deg/s</div>
                    </li>
                    <li className="list-item">
                        <div className="list-item__left">TURRET TRAVERSE SPEED</div>
                        <div className="list-item__right">24 deg/s</div>
                    </li>
                </ul>
            </div>
            <div className="characteristic-tab__item"  data-scroll data-scroll-speed="4">
                <div className="characteristic-tab__item_title">
                    <h5>SURVIVABILITY</h5>
                </div>
                <ul className="characteristic-tab__item_list">
                    <li className="list-item">
                        <div className="list-item__left">HIT POINTS</div>
                        <div className="list-item__right">1,500 HP</div>
                    </li>
                    <li className="list-item">
                        <div className="list-item__left">HULL ARMOR</div>
                        <div className="list-item__right">101 / 76 / 50 mm</div>
                    </li>
                    <li className="list-item">
                        <div className="list-item__left">TURRET ARMOR</div>
                        <div className="list-item__right">101 / 76 / 76 mm</div>
                    </li>
                </ul>
            </div>
            <div className="characteristic-tab__item" data-scroll data-scroll-speed="6">
                <div className="characteristic-tab__item_title">
                    <h5>SPOTTING</h5>
                </div>
                <ul className="characteristic-tab__item_list">
                    <li className="list-item">
                        <div className="list-item__left">VIEW RANGE</div>
                        <div className="list-item__right">390 m </div>
                    </li>
                    <li className="list-item">
                        <div className="list-item__left"> SIGNAL RANGE</div>
                        <div className="list-item__right">745 m</div>
                    </li>

                </ul>
            </div>
        </div>
    );
};
