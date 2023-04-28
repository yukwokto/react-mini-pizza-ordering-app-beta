import React, {useContext} from "react";
import classes from "./CartEachItem.module.css";
import CartContext from "../../store/CartContext";


const CartEachItem = props => {

    const cartContext = useContext(CartContext);

    const pizzaName = props.pizza.name;

    const removePizzaHandler = () =>{
        cartContext.deleteItem(pizzaName);
    }

    return (
        <div className={classes['item-wrapper']}>
            <div>{props.pizza.name}</div>
            <div>{props.pizza.quantity}</div>
            <div>${(props.pizza.price * props.pizza.quantity).toFixed(2)}</div>
            <div><button className={classes['remove-btn']} onClick={removePizzaHandler}>Remove</button></div>
        </div>
    )
}

export default CartEachItem;