import React from 'react';
import HeroTank from '../Hero-tank';

import './FirstScreen.scss';

export default () => {
    return (
        <section className="page-section" style={{ backgroundImage: `url('../../img/bg.png')`, backgroundSize: 'cover' }}>
            <header className="header">
                <div>
                    <img className="header-logo" src="../img/logo.png" alt="Logo" />
                </div>

                <div className="header-title">
                    <h5>Preorder <span className="accent-color">New Premium Tank</span> and get more</h5>
                </div>
                <nav>
                    <ul>
                        <li className=" header-menu__item"> <a href="#" className="accent-color">CHOOSE THE BUNDLE</a></li>
                    </ul>
                </nav>
            </header>
            <HeroTank />
            <h1>WG here!!!</h1>
        </section >
    );

}