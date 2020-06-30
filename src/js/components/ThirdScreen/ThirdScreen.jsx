import React, { useRef, useEffect } from 'react';
import useIsInViewport from 'use-is-in-viewport';
import PropTypes from 'prop-types';

import './ThirdScreen.scss';

export const ThirdScreen = ({ onChangeScreen }) => {
    const screenIndicatorRef = useRef(null);
    const [isInViewport, targetRef] = useIsInViewport({ target: screenIndicatorRef });
    useEffect(() => {
        if (isInViewport) {
            onChangeScreen(2);
        }
    }, [isInViewport]);
    return (
        <section
            className="page-section third-screen"
            style={{ backgroundImage: `url('../../img/bg.png')`, backgroundSize: 'cover' }}
        >
            <div className="order-item">
                <div>
                    <div className="order-item__logo">
                        <h2>STANDARD</h2>
                        <img src="img/pershing.png" alt="" />
                    </div>
                    <ul className="order-item__list">
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
                <a ref={targetRef} className="order-item__button" href="#">
                    I WANT THIS!
                </a>
            </div>
            <div className="order-item">
                <div>
                    <div className="order-item__logo">
                        <h2>ULTIMATE</h2>
                        <img src="img/pershing.png" alt="" />
                    </div>

                    <ul className="order-item__list">
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
                <a className="order-item__button" href="#">
                    I WANT THIS!
                </a>
            </div>
            <div className="order-item">
                <div>
                    <div className="order-item__logo">
                        <h2>SUPREME</h2>
                        <img src="img/pershing.png" alt="" />
                    </div>
                    <ul className="order-item__list">
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
                <a className="order-item__button" href="#">
                    I WANT THIS!
                </a>
            </div>
        </section>
    );
};

ThirdScreen.propTypes = {
    onChangeScreen: PropTypes.func
};
