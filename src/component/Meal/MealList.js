import React, { Fragment } from "react";

import classes from './MealList.module.css';
import MealItem from "./MealItem";
import ClassicsHeader from "./ClassicsHeader";
import DIYHeaders from "./DIYHeaders";
import CustomPizzaFrom from "./DIY_Pizza/CustomPizzaFrom";
import veggie from '../../images/veggie.jpg';
import hawaiian from '../../images/Hawaiian.jpg';
import chicken from '../../images/chicken.jpg';
import cheese from '../../images/cheese.jpg';

const mealSet = [
    { img_path: veggie, name: 'Veggie', price: 14.99, ingredients: 'A medley of fresh green peppers, onion, tomatoes, mushrooms, and olives.' },
    { img_path: hawaiian, name: 'Hawaiian', price: 15.99, ingredients: 'Succulent pineapple and slices of ham topped with an extra layer of cheese.' },
    { img_path: chicken, name: 'Chicken Bacon Alfredo Pizza', price: 16.00, ingredients: 'An Alfredo Sauce base with a Mozzarella/Cheddar Cheese blend, fresh mushrooms, onions, all white-meat chicken, bacon and Provolone cheese.' },
    { img_path: cheese, name: '6 Cheese Pizza', price: 17.99, ingredients: 'Covered with Feta, provolone, cheddar, Parmesan-Asiago, and mozzarella cheese finished with a sprinkle of oregano.' },
]

const MealList = () => {

    const listOfMeal = mealSet.map(pizza => (
        <MealItem meal={pizza} key={pizza.name} />
    ));

    return (
        <Fragment>
            <ClassicsHeader headings="Classics"/>
            <div className={classes['meal-list']}>
                {listOfMeal}
            </div>

            <DIYHeaders headings="Customise Your Own Pizza!"/>

            <CustomPizzaFrom/>
        </Fragment>
    )
}

export default MealList;