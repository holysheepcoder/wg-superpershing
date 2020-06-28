import React from 'react';
import HeroTank from '../HeroTank/Hero-tank';
import TimeProgressBar from '../TimeProgressBar/TimeProgressBar';
import './FirstScreen.scss';

export default ({ onChangeScreen }) => {
    return (
        <section className="page-section" style={{ backgroundImage: `url('../../img/bg.png')`, backgroundSize: 'cover' }}>
            <HeroTank className="hero-pershing__container" width={window.innerWidth} height={window.innerHeight} />
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
            <div className="hero-title">
                <img className="hero-title__flag hero-title__item" src="img/USA.png" alt="USA Flag" />
                <img className="hero-title__union hero-title__item" src="img/Union.png" alt="Union" />
                <h2 className="hero-title__tier hero-title__item">VIII</h2>
                <h2 className="hero-title__item">T26E4 SUPERPERSHING</h2>
            </div>

            <div className="hero-progress-bar">
                <div className="hero-progress-bar__head">
                    <p>Released in:</p>
                    <p>Be first who gets the Tank!</p>
                </div>
                <div className="hero-progress-bar__digits">
                    <TimeProgressBar />
                </div>
            </div>
            <div className="hero-next" onClick={() => onChangeScreen(1)}>
                <p>About the Tank ↓</p>
            </div>
        </section >
    );

}