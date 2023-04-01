import React from 'react';
import ReactDOM from 'react-dom';

/** button to add 1's to statistics */
const Button = ({method, text}) => {
    return (
        <button onClick={method}>{text}</button>
    )
}

export default Button