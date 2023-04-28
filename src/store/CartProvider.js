import CartContext from "./CartContext";
import { useReducer } from "react";

const emptyCart = {
    items: [],
    totalAmount: 0
};


const CartReducer = (state, action) => {
    switch (action.type) {
        default: {
            return emptyCart;
        }

        case "ADD_CLASSIC_PIZZA": {

            const existingItemIndex = state.items.findIndex((item) => item.name === action.pizza.name);

            if (existingItemIndex === -1) {
                const updatedPizza = state.items.concat(action.pizza);
                const updatedATotalAmount = state.totalAmount + action.pizza.price * action.pizza.quantity;

                return ({
                    items: updatedPizza,
                    totalAmount: updatedATotalAmount
                }
                )
            } else {
                const existingPizza = state.items[existingItemIndex];
                const updatedPizzaItem = {
                    ...existingPizza,
                    quantity: existingPizza.quantity + action.pizza.quantity
                }
                const updatedPizza = [...state.items];
                updatedPizza[existingItemIndex] = updatedPizzaItem;

                return ({
                    items: updatedPizza,
                    totalAmount: state.totalAmount + action.pizza.price * action.pizza.quantity
                })
            }
        }

        case "REMOVE_CLASSIC_PIZZA":{ //filter
            const updatedPizza = state.items.filter(pizza=>pizza.name !== action.pizzaName);
            const updatedTotalAmount = updatedPizza.reduce((total, pizza)=>total + pizza.pirce * pizza.quantity, 0);
            return ({
                items: updatedPizza,
                totalAmount: updatedTotalAmount
            })
        }
    }
};


const CartProvider = props => {

    const [cartState, dispatchCart] = useReducer(CartReducer, emptyCart);

    const addClassicPizzaToCart = pizza => {
        dispatchCart({ type: 'ADD_CLASSIC_PIZZA', pizza: pizza });
    }

    const removeClassicPizzaFromCart = pizzaName => {
        dispatchCart({ type: 'REMOVE_CLASSIC_PIZZA', pizzaName: pizzaName });
    }

    const pizzaCartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addClassicPizzaToCart,
        deleteItem: removeClassicPizzaFromCart

    }

    return (
        <CartContext.Provider value={pizzaCartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;