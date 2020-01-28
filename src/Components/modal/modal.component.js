import React from 'react';
import './modal.styles.scss';
const Modal = ({children, modal, modalType}) => {
    return (
        modal? 
        <div className="modal">
        <div className="modal-content">
        {modalType === 'FILTER' ? <h3>Filter Options</h3> : <h3>Sort Options</h3>}
                {children}
            
            </div>
        </div> : null
    )
}

export default Modal;