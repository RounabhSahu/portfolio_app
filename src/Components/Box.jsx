import React from 'react';
import './box.css';

const Box = (props) => {

    let a=props.sty!==null?props.sty:"50%";
    return (
        <div id={props.pid} style={{scale:a}}/>
    );
};

export default Box;
