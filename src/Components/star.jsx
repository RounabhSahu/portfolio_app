import React, { useState, useEffect } from "react";

const UFO = () => {
    const [rotateValue, setRotateValue] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            let randomValue = Math.floor(Math.random() * 24) - 12;
            let newValue = rotateValue + randomValue;
            if (newValue > 12) {
                newValue = 12;
            } else if (newValue < -12) {
                newValue = -12;
            }
            setRotateValue(newValue);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [rotateValue]);

    return (
        <div className="relative inline-block">
            <img
                src={require(`./ufo.png`)}
                className="animate-random scale-150"
                style={{ transform: `rotate(${rotateValue}deg)` }}
                alt="ufo"
            />
        </div>
    );
};

export default UFO;
