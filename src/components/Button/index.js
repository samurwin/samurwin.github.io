import React from 'react';
import { Link } from 'react-router-dom'
import "./style.css";

function Button({ color, text, link, location }) {
    let btnClass = "";

    switch(color) {
        case 'primary':
            btnClass = "btnPrimary";
            break;
        case 'secondary':
            btnClass = "btnSecondary";
            break;
        default: 
            btnClass = "btnPrimary";
            break;
    }

    return (
        <div className="my-2">
            {location === 'internal' ? (
                <Link to={link} className={btnClass}>
                    {text}
                </Link>
            ): (
                <a href={link} rel="noreferrer" target="_blank" className={btnClass}>
                    {text}
                </a>
            )}

        </div>
    )
}

export default Button;