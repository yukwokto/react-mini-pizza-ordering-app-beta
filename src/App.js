import React, { useState } from "react";
import Header from "./component/UI/Header";
import classes from "./App.module.css";
import MealList from "./component/Meal/MealList";
import CartProvider from "./store/CartProvider";
import Cart from "./component/Cart/Cart";

function App() {

  const [modalState, setModalState] = useState(false);

  const onOpenModalHandler = () =>{
    setModalState(true);
  }

  const onCloseModalHandler = () =>{
    setModalState(false);
  }

  return (
    <CartProvider>
      {modalState && <Cart onCloseModal={onCloseModalHandler} />}
      <Header onCheckModal={onOpenModalHandler} />
      <MealList />
    </CartProvider>
  );
}

export default App;
