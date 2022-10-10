import React from "react";
import './Button.css';

const Button = props => {

    return (
        <button className = {props.classes} onClick = {props.onClick}>
            {props.caption}
        </button>
    );

};

export default Button;