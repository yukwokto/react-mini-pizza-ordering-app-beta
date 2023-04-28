import React, { useContext , useRef} from "react";
import classes from './AddToCartButton.module.css'
import CartContext from "../../store/CartContext";


const AddToCartButton = props => {

    const amountInputRef = useRef();
    const onAddPizza = useContext(CartContext);

    const onAddItemHandler = e => {
        e.preventDefault();

        const quantity = +amountInputRef.current.value;

        if (quantity === 0) {
            return
        }

        onAddPizza.addItem({
            name: props.pizza.name,
            price: props.pizza.price,
            quantity: quantity
        });
    }

    return (
        <form className={classes['form-control']}>
            <div><label>quantity</label></div>
            <div><input ref={amountInputRef} type="number" min="0" max="10" defaultValue="0" /></div>
            <div><button type="submit" className={classes['submit-btn']} onClick={onAddItemHandler}>Add to Cart</button></div>
        </form>
    )
};

export default AddToCartButton;