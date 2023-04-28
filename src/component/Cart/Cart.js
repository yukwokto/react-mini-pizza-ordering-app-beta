import React, { useContext } from "react"
import OrderCartModal from "./OrderCartModal";
import CartContext from "../../store/CartContext";
import CartEachItem from "./CartEachItem";
import classes from './Cart.module.css'

const Cart = props => {

    const pizzaOrdered = useContext(CartContext);

    const orderQuantity = pizzaOrdered.items.reduce((total, item)=> total + item.quantity, 0);
    const orderSum = pizzaOrdered.items.reduce((total, item)=> total + item.quantity * item.price, 0).toFixed(2);

    return (
        <OrderCartModal style={classes['cart-modal']} onCloseModal={props.onCloseModal}>
            <div className={classes['cart-header']}>
                <div>Item(s) in Cart</div>
                <div>Quantity</div>
                <div>Price</div>
            </div>

            {pizzaOrdered.items.map((item) => (<CartEachItem pizza={item} key={item.name} />))}
            <br/>
            <hr/>
            <div className={classes['cart-footer']}>
                <div>Total</div>
                <div>{orderQuantity}</div>
                <div>${orderSum}</div>
                <div></div>
            </div>

            <div className={classes['cart-footer']}>
                <div>HST (13%)</div>
                <div></div>
                <div>${(orderSum  * 0.13).toFixed(2)}</div>
                <div></div>

            </div>
            <br/>
            <hr/>
            <div className={classes['cart-footer']}>
                <div>Total Sum</div>
                <div></div>
                <div>${((orderSum  * 0.13) + +orderSum).toFixed(2)}</div>
                <div></div>

            </div>

            <div className={classes['btn-wrapper']}>
                <button className={classes['close-btn']} onClick={props.onCloseModal}>Close</button>
                <button className={classes['pay-btn']}>Check out</button>
            </div>

        </OrderCartModal>
    )
}

export default Cart;