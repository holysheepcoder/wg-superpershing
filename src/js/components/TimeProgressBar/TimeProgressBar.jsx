import React, { useEffect } from 'react';
import { format } from 'date-fns';

import './TimeProgressBar.scss';

export const TimeProgressBar = () => {
    //TODO: Smth strange with default date
    /**
     * 60 seconds set for showing implementation. You can uncomment 2 lines above
     */
    const endDate = new Date('July 7, 2020 15:55:00');
    const startDate = new Date('June 1, 2020 15:24:00');

    //const endDate = new Date(Date.now() + 1000 * 60);
    //const startDate = new Date(Date.now());

    const range = endDate - startDate;

    useEffect(() => {
        const canvas = document.getElementById('hero-progress-bar__digits');
        let ctx = canvas.getContext('2d');

        ctx.font = 'bold 200pt Roboto';
        const defaultString = '0D:00:00:00';

        const defaultStringWidth = Math.floor(ctx.measureText(defaultString).width);
        // TODO: Fixe this shit
        //canvas.width = defaultStringWidth;

        const draw = () => {
            const diff = Math.max(0, endDate - new Date());
            const percentage = 100 - (100 * diff) / range;

            const formattedStringLeft = format(new Date(diff), `d'D':HH:mm:ss`);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, (percentage * canvas.width) / 100, canvas.height);
            ctx.globalCompositeOperation = 'destination-in';

            ctx.font = 'bold 200pt Roboto';
            ctx.fillText(formattedStringLeft, 0, canvas.height / 2 + 100 - 5);

            ctx.globalCompositeOperation = 'source-over';

            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.font = 'bold 200pt Roboto';
            ctx.strokeText(formattedStringLeft, 0, canvas.height / 2 + 100 - 5);

            const textWidth = Math.floor(ctx.measureText(formattedStringLeft).width);

            // if (textWidth !== defaultStringWidth) {
            //     canvas.width = textWidth;
            // }
            if (range >= 0) {
                window.requestAnimationFrame(draw);
            }
        };

        draw();
    }, []);
    return <canvas data-scroll data-scroll-speed="2" width={window.innerWidth - window.innerWidth * 0.2} height="200" id="hero-progress-bar__digits" />;
};
