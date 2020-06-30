import React from 'react';
import PropTypes from 'prop-types';
import './DescriptionTab.scss';

export const DescriptionTab = ({ visibility }) => {
    return (
        <div className="description-tab" style={{ visibility: visibility }}>
            <div className="description-tab__left">
                <p className="description-tab__desc" data-scroll data-scroll-speed="0.5">
                    A reference sample of the vehicle designated T-44A. Developed by the Construction Bureau of Plant
                    No. 183. The vehicle entered service on November 23, 1944, but never saw combat. From the end of
                    November 1944 through September 1945, a total of 570 vehicles were produced. A reference sample of
                    the vehicle designated T-44A. Developed by the Construction Bureau of Plant No. 183. The vehicle
                    entered service on November 23, 1944, but never saw combat. From the end of November 1944 through
                    September 1945, a total of 570 vehicles were produced.
                </p>
                <a className="button" href="#" data-scroll data-scroll-speed="1.5">
                    <span>
                        <img src="img/play.png" alt="" />
                    </span>
                    <p>WATCH VIDEO</p>
                </a>
            </div>
            <div className="description-tab__right">
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
                                    Strong frontal armor profile, good protection against HEAT/HE shells due to spaced
                                    armor
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
    );
};

DescriptionTab.propTypes = {
    visibility: PropTypes.string.isRequired,
};
