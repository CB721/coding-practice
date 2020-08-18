import React from 'react';
import './style.scss';

function Button({ bgColor, textColor, content, action, isAdd }) {
    return (
        <button
            className="button shadow"
            style={{ backgroundColor: bgColor, color: textColor }}
            onClick={(event) => action(event, isAdd)}
        >
            {content}
        </button>
    );
}

export default Button;