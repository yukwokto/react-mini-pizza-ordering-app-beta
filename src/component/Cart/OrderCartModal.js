import React, {Fragment} from "react";
import classes from './OrderCart.module.css';
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div onClick={props.onRemoveModal} className={classes.backdrop}/>;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={`${classes.content} ${props.className}`}>{props.children}</div>
        </div>
    );
};


const OrderCartModal = props =>{

    const portalElement = document.getElementById('shopping-cart-modal');

    return (
        <div >
            {ReactDOM.createPortal(<Backdrop onRemoveModal={props.onCloseModal}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay className={props.style} >{props.children}</ModalOverlay>,portalElement)}
        </div>
    );
}

export default OrderCartModal;