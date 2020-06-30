import React, { useState, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { FirstScreen } from './FirstScreen/FirstScreen';
import { SecondScreen } from './SecondScreen/SecondScreen';
import { ThirdScreen } from './ThirdScreen/ThirdScreen';

export const App = () => {
    const headerFirstTitleRef = useRef();
    const headerSecondTitleRef = useRef();
    const headerChooseButtonRef = useRef();
    const [currentScreen, setCurrentScreen] = useState(null);
    const [headerButtonChooseTimeline, setHeaderChooseButtonTimeline] = useState(
        gsap.timeline({
            paused: true,
        }),
    );
    const [headerFirstTitleTimeline, setHeaderFirstTitleTimeline] = useState(
        gsap.timeline({
            paused: true,
        }),
    );
    const [headerSecondTitleTimeline, setHeaderSecondTitleTimeline] = useState(
        gsap.timeline({
            paused: true,
        }),
    );
    const [scroll, setScroll] = useState(null);

    useEffect(() => {
        const firstTimeline = gsap
            .timeline({
                paused: true,
            })
            .fromTo(
                headerFirstTitleRef.current,
                0.2,
                {
                    y: 0,
                    autoAlpha: 1,
                },
                {
                    autoAlpha: 0,
                    y: -30,
                    ease: 'expo.in',
                },
            );
        const secondTimeline = gsap
            .timeline({
                paused: true,
            })
            .fromTo(
                headerSecondTitleRef.current,
                0.2,
                {
                    y: -30,
                    autoAlpha: 0,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    ease: 'expo.in',
                },
            );
        const buttonTimeline = gsap
            .timeline({
                paused: true,
            })
            .fromTo(
                headerChooseButtonRef.current,
                0.2,
                {
                    x: 0,
                    autoAlpha: 1,
                },
                {
                    autoAlpha: 0,
                    x: 200,
                    ease: 'expo.in',
                },
            );
        setHeaderChooseButtonTimeline(buttonTimeline);
        setHeaderFirstTitleTimeline(firstTimeline);
        setHeaderSecondTitleTimeline(secondTimeline);

        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            smoothMobile: true,
        });

        setScroll(scroll);
    }, []);
    useEffect(() => {
        if (currentScreen !== null && currentScreen === 0) {
            headerFirstTitleTimeline.reverse();
        }
        if (currentScreen !== null && currentScreen === 1) {
            headerFirstTitleTimeline.play();
            headerSecondTitleTimeline.reverse();
            headerButtonChooseTimeline.reverse();
        }
        if (currentScreen !== null && currentScreen === 2) {
            headerSecondTitleTimeline.play();
            headerButtonChooseTimeline.play();
        }
    }, [currentScreen]);
    return (
        <div>
            <header className="header">
                <div>
                    <img className="header-logo" src="img/logo.png" alt="Logo" />
                </div>
                <div className="header-title">
                    <h5 className="header-title__first" ref={headerFirstTitleRef}>
                        Preorder <span className="accent-color">New Premium Tank</span> and get more
                    </h5>
                    <h5 className="header-title__second" ref={headerSecondTitleRef}>
                        Preorder now and be the first who get this tank!
                    </h5>
                </div>
                <nav>
                    <ul>
                        <li ref={headerChooseButtonRef} className="header-menu__item">
                            <a href="#" className="accent-color">
                                CHOOSE THE BUNDLE
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div data-scroll-container>
                <FirstScreen scroll={scroll} currnetScreen={currentScreen} onChangeScreen={setCurrentScreen} />
                <SecondScreen
                    scroll={scroll}
                    onChangeScreen={setCurrentScreen}
                />
                <ThirdScreen onChangeScreen={setCurrentScreen} />
            </div>
        </div>
    );
};
