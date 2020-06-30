import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useIsInViewport from 'use-is-in-viewport';
import { gsap } from 'gsap';

import './SecondScreen.scss';

export const SecondScreen = ({ scroll, onChangeScreen }) => {
    const screenIndicatorRef = useRef(null);
    const descMainRef = useRef(null);
    const descLeftRef = useRef(null);
    const descRightRef = useRef(null);

    const charMainRef = useRef(null);
    const charList1Ref = useRef(null);
    const charList2Ref = useRef(null);
    const charList3Ref = useRef(null);
    const charList4Ref = useRef(null);

    const [visibleTab, setVisibleTab] = useState(0);
    const [isInViewport, targetRef] = useIsInViewport({ target: screenIndicatorRef });

    const [tabsTimeline, setTabsTimeline] = useState(
        gsap.timeline({
            paused: true,
        }),
    );

    const scrollToNextSection = () => {
        scroll.scrollTo(document.querySelector('.third-screen'));
    };
    const onChangeTab = index => {
        setVisibleTab(index);
    };
    useEffect(() => {
        if (isInViewport) {
            onChangeScreen(1);
        }
    }, [isInViewport]);
    useEffect(() => {
        const tabsTimeline = gsap
            .timeline({
                paused: true,
            })
            .fromTo(
                descLeftRef.current,
                {
                    duration: 0.2,
                    x: 0,
                    ease: 'expo.in',
                },
                {
                    duration: 0.2,
                    x: -150,
                    ease: 'expo.in',
                },
            )
            .fromTo(
                descRightRef.current,
                {
                    duration: 0.2,
                    x: 0,
                    ease: 'expo.in',
                },
                {
                    duration: 0.2,
                    x: 150,
                    ease: 'expo.in',
                },
                '-=0.2',
            )
            .fromTo(
                descMainRef.current,
                {
                    duration: 0.2,
                    visibility: 'visible',
                    ease: 'back.inOut(1)',
                },
                {
                    duration: 0.2,
                    visibility: 'hidden',
                    ease: 'back.inOut(1)',
                },
            )
            .fromTo(
                charMainRef.current,
                {
                    duration: 0.2,
                    visibility: 'hidden',
                    ease: 'back.inOut(1)',
                },
                {
                    duration: 0.2,
                    visibility: 'visible',
                    ease: 'back.inOut(1)',
                },
            )
            .fromTo(
                charList1Ref.current,
                {
                    opacity: 0,
                    y: -150,
                },
                {
                    opacity: 1,
                    duration: 0.1,
                    y: 0,
                    ease: 'expo.in',
                },
            )
            .fromTo(
                charList2Ref.current,
                {
                    opacity: 0,
                    y: -150,
                },
                {
                    duration: 0.1,
                    y: 0,
                    opacity: 1,
                    ease: 'expo.in',
                },
            )
            .fromTo(
                charList3Ref.current,
                {
                    y: -150,
                    opacity: 0,
                },
                {
                    duration: 0.1,
                    y: 0,
                    opacity: 1,
                    ease: 'expo.in',
                },
            )
            .fromTo(
                charList4Ref.current,
                {
                    opacity: 0,
                    y: -150,
                },
                {
                    duration: 0.1,
                    y: 0,
                    opacity: 1,
                    ease: 'expo.in',
                },
            );
        setTabsTimeline(tabsTimeline);
    }, []);
    return (
        <section
            className="page-section second-screen"
            style={{ backgroundImage: `url('img/bg_2.png')`, backgroundSize: 'cover' }}
        >
            <h2 className="page-title" data-scroll data-scroll-speed="0.4">
                ABOUT THE TANK
            </h2>

            <div className="tabs">
                <ul className="tabs-titles">
                    <li
                        onClick={() => {
                            onChangeTab(0);
                            tabsTimeline.reverse();
                        }}
                        className={visibleTab === 0 ? 'tab-title tab-title--active' : 'tab-title'}
                    >
                        DESCRIPTION
                    </li>
                    <li
                        onClick={() => {
                            onChangeTab(1);
                            tabsTimeline.play();
                        }}
                        className={visibleTab === 1 ? 'tab-title tab-title--active' : 'tab-title'}
                    >
                        CHARACTERISTICS
                    </li>
                </ul>
                <div className="tab-content" ref={targetRef}>
                    <div className="description-tab" ref={descMainRef}>
                        <div className="description-tab__left" ref={descLeftRef}>
                            <p className="description-tab__desc" data-scroll data-scroll-speed="0.5">
                                A reference sample of the vehicle designated T-44A. Developed by the Construction Bureau
                                of Plant No. 183. The vehicle entered service on November 23, 1944, but never saw
                                combat. From the end of November 1944 through September 1945, a total of 570 vehicles
                                were produced. A reference sample of the vehicle designated T-44A. Developed by the
                                Construction Bureau of Plant No. 183. The vehicle entered service on November 23, 1944,
                                but never saw combat. From the end of November 1944 through September 1945, a total of
                                570 vehicles were produced.
                            </p>
                            <a className="button" href="#" data-scroll data-scroll-speed="1.5">

                                    <img className="icon" src="img/play.png" alt="" />
                                    <span>WATCH VIDEO</span>

                            </a>
                        </div>
                        <div className="description-tab__right" ref={descRightRef}>
                            <div className="description-tab__list">
                                <ul>
                                    <li
                                        className="description-tab__item"
                                        data-scroll
                                        data-scroll-speed="-1"
                                        data-scroll-direction="horizontal"
                                    >
                                        <div className="description-tab__item_left">
                                            <img src="img/desc_img_1.png" alt="" />
                                        </div>
                                        <div className="description-tab__item_right">
                                            <div className="description-tab__item_title">ARMOUR</div>
                                            <div className="description-tab__item_desc">
                                                Strong frontal armor profile, good protection against HEAT/HE shells due
                                                to spaced armor
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="description-tab__item"
                                        data-scroll
                                        data-scroll-speed="-0.5"
                                        data-scroll-direction="horizontal"
                                    >
                                        <div className="description-tab__item_left">
                                            <img src="img/desc_img_2.png" alt="" />
                                        </div>
                                        <div className="description-tab__item_right">
                                            <div className="description-tab__item_title">PENETRATION</div>
                                            <div className="description-tab__item_desc">
                                                Good penetration for a tier VIII American tank.
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className="description-tab__item"
                                        data-scroll
                                        data-scroll-speed="-0.25"
                                        data-scroll-direction="horizontal"
                                        data-scroll-position="left"
                                    >
                                        <div className="description-tab__item_left">
                                            <img src="img/desc_img_3.png" alt="" />
                                        </div>
                                        <div className="description-tab__item_right">
                                            <div className="description-tab__item_title">MATCHMAKING</div>
                                            <div className="description-tab__item_desc">
                                                Preferential matchmaking (will never see Tier 10 battles)
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="characteristic-tab" ref={charMainRef}>
                        <div className="characteristic-tab__item" data-scroll data-scroll-speed="3" ref={charList1Ref}>
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
                        <div
                            className="characteristic-tab__item"
                            data-scroll
                            data-scroll-speed="2.5"
                            ref={charList2Ref}
                        >
                            <div className="characteristic-tab__item_title">
                                <h5>MOBILITY</h5>
                            </div>
                            <ul className="characteristic-tab__item_list">
                                <li className="list-item">
                                    <div className="list-item__left">WEIGHT/LOAD LIMIT</div>
                                    <div className="list-item__right">50.55 / 53 t</div>
                                </li>
                                <li className="list-item">
                                    <div className="list-item__left">ENGINE POWER</div>
                                    <div className="list-item__right">610 hp</div>
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
                        <div className="characteristic-tab__item" data-scroll data-scroll-speed="4" ref={charList3Ref}>
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
                        <div className="characteristic-tab__item" data-scroll data-scroll-speed="6" ref={charList4Ref}>
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
                </div>
            </div>
            <div className="hero-next" data-scroll data-scroll-speed="0.2" onClick={() => scrollToNextSection()}>
                <p>Choose the special bundle ↓</p>
            </div>
        </section>
    );
};

SecondScreen.propTypes = {
    scroll: PropTypes.object,
    onChangeScreen: PropTypes.func,
};
