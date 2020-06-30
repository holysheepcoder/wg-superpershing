import React, {useEffect, useRef} from 'react';
import {HeroTank} from '../HeroTank/Hero-tank';
import { TimeProgressBar } from '../TimeProgressBar/TimeProgressBar';
import PropTypes from 'prop-types';

import './FirstScreen.scss';
import useIsInViewport from "use-is-in-viewport";

export const FirstScreen = ({ scroll,onChangeScreen }) => {
    const screenIndicatorRef = useRef(null);
    const [isInViewport, targetRef] = useIsInViewport({ target: screenIndicatorRef });
    const scrollToNextSection = () => {
        scroll.scrollTo(document.querySelector(".second-screen"));
    };
    useEffect(() => {
        if(isInViewport){
            onChangeScreen(0);
        }
    }, [isInViewport]);
    return (
        <section
            className="page-section first-screen"
            style={{ backgroundImage: `url('../../img/bg.png')`, backgroundSize: 'cover' }}
        >
            <HeroTank className="hero-pershing__container" width={window.innerWidth} height={window.innerHeight} />
            <div ref={targetRef} className="hero-title" data-scroll data-scroll-speed="0.4" data-scroll-delay="0.2">
                <img className="hero-title__flag hero-title__item" src="img/USA.png" alt="USA Flag" />
                <img className="hero-title__union hero-title__item" src="img/Union.png" alt="Union" />
                <h2 className="hero-title__tier hero-title__item">VIII</h2>
                <h2 className="hero-title__item">T26E4 SUPERPERSHING</h2>
            </div>

            <div className="hero-progress-bar">
                <div className="hero-progress-bar__head">
                    <p data-scroll data-scroll-speed="2">Released in:</p>
                    <p data-scroll data-scroll-speed="4">Be first who gets the Tank!</p>
                </div>
                <div className="hero-progress-bar__digits">
                    <TimeProgressBar />
                </div>
            </div>
            <div data-scroll-direction="horizontal" className="hero-next" onClick={() => scrollToNextSection()}>
                <p>About the Tank ↓</p>
            </div>
        </section>
    );
};

FirstScreen.propTypes = {
    scroll: PropTypes.object,
    onChangeScreen: PropTypes.func
};
