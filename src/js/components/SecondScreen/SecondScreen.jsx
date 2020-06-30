import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useIsInViewport from 'use-is-in-viewport';

import { DescriptionTab } from '../DescriptionTab/DescriptionTab';
import { CharacteristicTab } from '../CharacteristicTab/CharacteristicTab';

import './SecondScreen.scss';

export const SecondScreen = ({ scroll, onChangeScreen }) => {
    const screenIndicatorRef = useRef(null);
    const [visibleTab, setVisibleTab] = useState(0);
    const [isInViewport, targetRef] = useIsInViewport({ target: screenIndicatorRef });

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
                        onClick={() => onChangeTab(0)}
                        className={visibleTab === 0 ? 'tab-title tab-title--active' : 'tab-title'}
                    >
                        DESCRIPTION
                    </li>
                    <li
                        onClick={() => onChangeTab(1)}
                        className={visibleTab === 1 ? 'tab-title tab-title--active' : 'tab-title'}
                    >
                        CHARACTERISTICS
                    </li>
                </ul>
                <div className="tab-content" ref={targetRef}>
                    <DescriptionTab visibility={visibleTab === 0 ? 'visible' : 'hidden'} />
                    <CharacteristicTab visibility={visibleTab === 1 ? 'visible' : 'hidden'} />
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
