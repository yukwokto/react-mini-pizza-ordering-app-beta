import React, { useContext } from "react";
import cart from '../../images/cart.png';
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/CartContext";

const HeaderCartButton = props =>{

    const cartContext = useContext(CartContext);

    const orderQuantity = cartContext.items.reduce((total, item)=> total + item.quantity, 0);

    const openModalHandler = () =>{
        props.onCheck();
    }

    return (
        <button className={classes['cart-button']} onClick={openModalHandler}>
            <span className={classes['span-control']}><img src={cart} alt="cart" className={classes['cart-img']}/></span>
            <span className={classes['span-control']}>Cart</span>
            <span className={classes['span-control']}>{orderQuantity}</span>
        </button>
    )
};

export default HeaderCartButton;