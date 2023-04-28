import React, { Fragment } from "react";
import classes from './MealItem.module.css'
import AddToCartButton from "./AddToCartButton";

const MealItem = props => {
    return (
        <div className={classes['meal-item-wrapper']}>

            {/* Pizza Image */}
            <div className={classes['meal-img']}>
                <img className={classes['pizza-img']} src={props.meal.img_path} alt="pizza_picture"/>
            </div>

            {/* Description */}
            <div className={classes['meal-info']}>
                <div className={classes['meal-info-name']}>{props.meal.name}</div>
                <div>Price: ${props.meal.price}</div>
                <div>Ingredients: {props.meal.ingredients}</div>
            </div>

            {/* Add Button */}
            <div className={classes['add-meal']}>
                <AddToCartButton pizza={props.meal}/>
            </div>

        </div>
    )
};

export default MealItem;