import React from 'react';
import { Link } from 'react-router-dom'
import "./style.css";

function Button({ color, text, link }) {
    let btnClass = "";

    switch(color) {
        case 'primary':
            btnClass = "btnPrimary";
            break;
        case 'secondary':
            btnClass = "btnSecondary";
            break;
    }

    return (
        <div className="my-4">
            <Link to={link} className={btnClass}>
                {text}
            </Link>
        </div>
    )
}

export default Button;