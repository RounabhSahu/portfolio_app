import React from 'react';
import './box.css';

const Box = (props) => {

    let a = props.sty !== null ? props.sty : "50%";
    return (
        <div id={props.pid}
            style={{
                WebkitTransform: 'scale('+a+')',
                OTransform: 'scale('+a+')',
                MozTransform: 'scale('+a+')',
                // scale: a
            }}/>
    );
};

export default Box;
