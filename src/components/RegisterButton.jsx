import React from 'react';
import leftW from '../assests/imgs/left-feet.png';
import rightW from '../assests/imgs/right-feet.png';
import leftY from '../assests/imgs/left-feet-yellow.png';

const RegisterButton = ({ id }) => {
    let leftButton, rightButton, yellowButton;
    const buttonWidth = '200px';

    if (id === 0) {
        leftButton = (
            <button style={{ width: buttonWidth }}>
                <img src={leftW} alt="" />
            </button>
        );
        rightButton = (
            <button style={{ width: buttonWidth, display: 'none' }}>
                <img src={rightW} alt="" />
            </button>
        );
        yellowButton = (
            <button style={{ width: buttonWidth, display: 'none' }}>
                <img src={leftY} alt="" />
            </button>
        );
    } 
    else if (id === 1) {
        leftButton = (
            <button style={{ width: buttonWidth, display: 'none' }}>
                <img src={leftW} alt="" />
            </button>
        );
        rightButton = (
            <button style={{ width: buttonWidth }}>
                <img src={rightW} alt="" />
            </button>
        );
        yellowButton = (
            <button style={{ width: buttonWidth, display: 'none' }}>
                <img src={leftY} alt="" />
            </button>
        );
    } 
    else if (id === 2) {
        leftButton = (
            <button style={{ width: buttonWidth, display: 'none' }}>
                <img src={leftW} alt="" />
            </button>
        );
        rightButton = (
            <button style={{ width: buttonWidth, display: 'none' }}>
                <img src={rightW} alt="" />
            </button>
        );
        yellowButton = (
            <button style={{ width: buttonWidth }}>
                <img src={leftY} alt="" />
            </button>
        );
    }

    return (
        <>
            {leftButton}
            {rightButton}
            {yellowButton}
        </>
    );
};

export default RegisterButton;