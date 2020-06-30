import React, { useEffect, useRef, useState } from 'react';
import { HeroTank } from '../HeroTank/Hero-tank';
import { TimeProgressBar } from '../TimeProgressBar/TimeProgressBar';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';

import './FirstScreen.scss';
import useIsInViewport from 'use-is-in-viewport';

export const FirstScreen = ({ scroll, onChangeScreen }) => {
    const screenIndicatorRef = useRef(null);
    const titleRef = useRef(null);
    const progressDigitsRef = useRef(null);
    const progressBarLeftRef = useRef(null);
    const progressBarRightRef = useRef(null);
    const [isTankLoading, setIsTankLoading] = useState(true);
    const [titleTimeline, setTitleTimeline] = useState(
        gsap.timeline({
            paused: true,
        }),
    ); const [progressBarTimeline, setProgressBarTimeline] = useState(
        gsap.timeline({
            paused: true,
        }),
    );
    const [isInViewport, targetRef] = useIsInViewport({ target: screenIndicatorRef });
    const scrollToNextSection = () => {
        scroll.scrollTo(document.querySelector('.second-screen'));
    };
    useEffect(() => {
        const titleTimeline = gsap
            .timeline({
                paused: true,
            })
            .fromTo(titleRef.current, {
                opacity: 0,
                y: -250,
            },{
                opacity: 1,
                y:0,
                duration: 0.4,
            });
        setTitleTimeline(titleTimeline);
        const progressBarTimeline = gsap
            .timeline({
                paused: true,
            })
            .fromTo(progressDigitsRef.current, {
                opacity: 0,
                y: 250,
            },{
                opacity: 1,
                y:0,
                duration: 0.5,
            }).fromTo(progressBarLeftRef.current, {
                opacity: 0,
                x: -250,
            },{
                opacity: 1,
                x:0,
                duration: 0.5,
            }, "-=0.3").fromTo(progressBarRightRef.current, {
                opacity: 0,
                x: 250,
            },{
                opacity: 1,
                x:0,
                duration: 0.5,
            }, "-=0.3");
        setProgressBarTimeline(progressBarTimeline);
    }, []);
    useEffect(() => {
        if (isInViewport) {
            onChangeScreen(0);
        }
    }, [isInViewport]);
    useEffect(() => {
        if (!isTankLoading) {
            titleTimeline.play();
            progressBarTimeline.play();
        }
    }, [isTankLoading]);
    return (
        <section
            className="page-section first-screen"
            style={{ backgroundImage: `url('img/bg.png')`, backgroundSize: 'cover' }}
        >
            <HeroTank
                className="hero-pershing__container"
                width={window.innerWidth}
                height={window.innerHeight}
                onTankLoading={setIsTankLoading}
            />

            <div ref={titleRef} className="hero-title" data-scroll data-scroll-speed="0.4" data-scroll-delay="0.2">
                <img className="hero-title__flag hero-title__item" src="img/USA.png" alt="USA Flag" ref={targetRef}/>
                <img className="hero-title__union hero-title__item" src="img/Union.png" alt="Union" />
                <h2 className="hero-title__tier hero-title__item">VIII</h2>
                <h2 className="hero-title__item">T26E4 SUPERPERSHING</h2>
            </div>

            <div className="hero-progress-bar">
                <div className="hero-progress-bar__head">
                    <p data-scroll data-scroll-speed="2" ref={progressBarLeftRef}>
                        Released in:
                    </p>
                    <p data-scroll data-scroll-speed="4" ref={progressBarRightRef}>
                        Be first who gets the Tank!
                    </p>
                </div>
                <div className="hero-progress-bar__digits" ref={progressDigitsRef}>
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
    onChangeScreen: PropTypes.func,
};
