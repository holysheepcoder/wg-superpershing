import React, { useRef, useEffect, useState } from 'react';
import useIsInViewport from 'use-is-in-viewport';
import PropTypes from 'prop-types';

import './ThirdScreen.scss';
import { gsap } from 'gsap';

export const ThirdScreen = ({ onChangeScreen }) => {
    const [isInViewport, targetRef] = useIsInViewport({ target: firstButtonRef });

    const firstOrderItemTitleRef = useRef(null);
    const firstOrderItemImgRef = useRef(null);
    const firstRadialGradientRef = useRef(null);
    const firstOrderItemListRef = useRef(null);
    const firstButtonRef = useRef(null);

    const secondOrderItemTitleRef = useRef(null);
    const secondOrderItemImgRef = useRef(null);
    const secondRadialGradientRef = useRef(null);
    const secondOrderItemListRef = useRef(null);
    const secondButtonRef = useRef(null);

    const thirdOrderItemTitleRef = useRef(null);
    const thirdOrderItemImgRef = useRef(null);
    const thirdRadialGradientRef = useRef(null);
    const thirdOrderItemListRef = useRef(null);
    const thirdButtonRef = useRef(null);

    const [firstOrderItemTimeline, setFirstOrderItemTimeline] = useState(
        gsap.timeline({
            paused: true,
        }),
    );
    const [firstButtonTimeline, setFirstButtonTimeline] = useState(
        gsap.timeline({
            paused: true,
        }),
    );
    const [secondOrderItemTimeline, setSecondOrderItemTimeline] = useState(
        gsap.timeline({
            paused: true,
        }),
    );
    const [secondButtonTimeline, setSecondButtonTimeline] = useState(
        gsap.timeline({
            paused: true,
        }),
    );
    const [thirdOrderItemTimeline, setThirdOrderItemTimeline] = useState(
        gsap.timeline({
            paused: true,
        }),
    );
    const [thirdButtonTimeline, setThirdButtonTimeline] = useState(
        gsap.timeline({
            paused: true,
        }),
    );
    const orderTimeline = (
        { titleRef, itemListRef, imgRef, gradientRef, buttonRef },
        setTimeline,
        setButtonTimeline,
    ) => {
        const orderItemTimeline = gsap
            .timeline({
                paused: true,
            })
            .to(titleRef, {
                duration: 0.3,
                y: -50,
                ease: 'expo.in',
            })
            .to(itemListRef, {
                duration: 0.2,
                y: 130,
                ease: 'back.inOut(1)',
            }, "-=0.2")
            .to(imgRef, {
                duration: 0.3,
                y: 50,
                scale: 1.4,
                ease: 'expo.in',
            })

            .to(gradientRef, {
                duration: 0.1,
                opacity: 0.8,
                ease: 'back.inOut(1)',
            }, "-=0.15");
        setTimeline(orderItemTimeline);

        const buttonTimeline = gsap
            .timeline({
                paused: true,
            })
            .to(buttonRef, {
                duration: 0.45,
                scale: 1.15,
                ease: 'back.inOut(1)',
            });
        setButtonTimeline(buttonTimeline);
    };
    useEffect(() => {
        if (isInViewport) {
            onChangeScreen(2);
        }
    }, [isInViewport]);
    useEffect(() => {
        orderTimeline(
            {
                titleRef: firstOrderItemTitleRef.current,
                gradientRef: firstRadialGradientRef.current,
                imgRef: firstOrderItemImgRef.current,
                itemListRef: firstOrderItemListRef.current,
                buttonRef: firstButtonRef.current,
            },
            setFirstOrderItemTimeline,
            setFirstButtonTimeline,
        );
        orderTimeline(
            {
                titleRef: secondOrderItemTitleRef.current,
                gradientRef: secondRadialGradientRef.current,
                imgRef: secondOrderItemImgRef.current,
                itemListRef: secondOrderItemListRef.current,
                buttonRef: secondButtonRef.current,
            },
            setSecondOrderItemTimeline,
            setSecondButtonTimeline,
        );
        orderTimeline(
            {
                titleRef: thirdOrderItemTitleRef.current,
                gradientRef: thirdRadialGradientRef.current,
                imgRef: thirdOrderItemImgRef.current,
                itemListRef: thirdOrderItemListRef.current,
                buttonRef: thirdButtonRef.current,
            },
            setThirdOrderItemTimeline,
            setThirdButtonTimeline,
        );
    }, []);
    return (
        <section
            className="page-section third-screen"
            style={{ backgroundImage: `url('img/bg.png')`, backgroundSize: 'cover' }}
        >
            <div className="order-item">
                <div>
                    <div className="order-item__logo">
                        <h2 ref={firstOrderItemTitleRef}  data-scroll data-scroll-speed="0.7">STANDARD</h2>
                        <img ref={firstOrderItemImgRef}  data-scroll data-scroll-speed="0.4" src="img/pershing.png" alt="" />
                        <span ref={firstRadialGradientRef} className="radial-gradient__1" />
                    </div>
                    <ul ref={firstOrderItemListRef} className="order-item__list" data-scroll data-scroll-speed="0.8">
                        <li className="order-item__list_title">
                            <img className="order-item__list_item flag" src="img/USA.png" alt="USA Flag" />
                            <img className="order-item__list_item union" src="img/Union.png" alt="Union" />
                            <p className="order-item__list_item">VIII</p>
                            <p className="order-item__list_item">T26E4 SUPERPERSHING</p>
                        </li>
                        <li>
                            <img className="order-item__list_item" src="img/repair.png" alt="Repair Kit" />
                            <p className="order-item__list_item">Large Repair Kit x 3</p>
                        </li>
                        <li>
                            <img className="order-item__list_item" src="img/autoExtinguishers.png" alt="Repair Kit" />
                            <p className="order-item__list_item">Automatic Fire Extinguisher x 3</p>
                        </li>
                    </ul>
                </div>
                <a
                    ref={firstButtonRef}
                    className="order-item__button"
                    href="#"
                    onMouseEnter={() => {
                        firstOrderItemTimeline.play();
                        firstButtonTimeline.play();
                    }}
                    onMouseLeave={() => {
                        firstOrderItemTimeline.reverse();
                        firstButtonTimeline.reverse();
                    }}
                >
                    I WANT THIS!
                </a>
            </div>
            <div className="order-item">
                <div>
                    <div className="order-item__logo">
                        <h2 ref={secondOrderItemTitleRef}  data-scroll data-scroll-speed="0.7">ULTIMATE</h2>
                        <img ref={secondOrderItemImgRef} data-scroll data-scroll-speed="0.4" src="img/pershing.png" alt="" />
                        <span ref={secondRadialGradientRef} className="radial-gradient__2" />
                    </div>

                    <ul ref={secondOrderItemListRef} className="order-item__list" data-scroll data-scroll-speed="0.8">
                        <li className="order-item__list_title">
                            <img className="order-item__list_item flag" src="img/USA.png" alt="USA Flag" />
                            <img className="order-item__list_item union" src="img/Union.png" alt="Union" />
                            <p className="order-item__list_item">VIII</p>
                            <p className="order-item__list_item">T26E4 SUPERPERSHING</p>
                        </li>
                        <li>
                            <img className="order-item__list_item" src="img/repair.png" alt="Repair Kit" />
                            <p className="order-item__list_item">Large Repair Kit x 3</p>
                        </li>
                        <li>
                            <img className="order-item__list_item" src="img/autoExtinguishers.png" alt="Repair Kit" />
                            <p className="order-item__list_item">Automatic Fire Extinguisher x 3</p>
                        </li>
                        <li>
                            <img className="order-item__list_item" src="img/repair.png" alt="Repair Kit" />
                            <p className="order-item__list_item">Large Repair Kit x 3</p>
                        </li>
                    </ul>
                </div>
                <a
                    ref={secondButtonRef}
                    className="order-item__button"
                    href="#"
                    onMouseEnter={() => {
                        secondOrderItemTimeline.play();
                        secondButtonTimeline.play();
                    }}
                    onMouseLeave={() => {
                        secondOrderItemTimeline.reverse();
                        secondButtonTimeline.reverse();
                    }}
                >
                    I WANT THIS!
                </a>
            </div>
            <div className="order-item">
                <div>
                    <div className="order-item__logo">
                        <h2 ref={thirdOrderItemTitleRef}  data-scroll data-scroll-speed="0.7">SUPREME</h2>
                        <img ref={thirdOrderItemImgRef} data-scroll data-scroll-speed="0.4" src="img/pershing.png" alt="" />
                        <span ref={thirdRadialGradientRef} className="radial-gradient__3" />
                    </div>
                    <ul ref={thirdOrderItemListRef} className="order-item__list" data-scroll data-scroll-speed="0.8">
                        <li className="order-item__list_title">
                            <img className="order-item__list_item flag" src="img/USA.png" alt="USA Flag" />
                            <img className="order-item__list_item union" src="img/Union.png" alt="Union" />
                            <p className="order-item__list_item">VIII</p>
                            <p className="order-item__list_item">T26E4 SUPERPERSHING</p>
                        </li>
                        <li>
                            <img className="order-item__list_item" src="img/repair.png" alt="Repair Kit" />
                            <p className="order-item__list_item">Large Repair Kit x 3</p>
                        </li>
                        <li>
                            <img className="order-item__list_item" src="img/autoExtinguishers.png" alt="Repair Kit" />
                            <p className="order-item__list_item">Automatic Fire Extinguisher x 3</p>
                        </li>
                        <li>
                            <img className="order-item__list_item" src="img/repair.png" alt="Repair Kit" />
                            <p className="order-item__list_item">Large Repair Kit x 3</p>
                        </li>
                        <li>
                            <img className="order-item__list_item" src="img/autoExtinguishers.png" alt="Repair Kit" />
                            <p className="order-item__list_item">Automatic Fire Extinguisher x 3</p>
                        </li>
                    </ul>
                </div>
                <a
                    ref={thirdButtonRef}
                    className="order-item__button"
                    href="#"
                    onMouseEnter={() => {
                        thirdOrderItemTimeline.play();
                        thirdButtonTimeline.play();
                    }}
                    onMouseLeave={() => {
                        thirdOrderItemTimeline.reverse();
                        thirdButtonTimeline.reverse();
                    }}
                >
                    I WANT THIS!
                </a>
            </div>
            <span className="screen-checker" ref={targetRef} />
        </section>
    );
};

ThirdScreen.propTypes = {
    onChangeScreen: PropTypes.func,
};
