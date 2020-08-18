import React from 'react';
import './style.scss';

function Modal({ form, close }) {
    console.log("modal is loaded")
    window.onclick = (event) => {
        if (event.target.id === 'modal') close(event);
    }

    return (
        <aside id="modal" className="shadow">
            <div className="innerModalContent">
                {form}
            </div>
        </aside>
    );
}

export default Modal;