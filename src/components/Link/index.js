import React from 'react';
import "./style.css";

function Link({ color, text, link }) {
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
            <a href={link} className={btnClass}>
                {text}
            </a>
        </div>
    )
}

export default Link;