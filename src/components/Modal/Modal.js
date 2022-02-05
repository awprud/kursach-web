import React from 'react';
import "./index.css";

const Modal = ({children, isOpen, className}) => {
    return isOpen && (
        <div className="modal-default">
            <div className={className}>
                {children}
            </div>
        </div>
    )
}

export default Modal;