import React from "react";
import classes from './CustomPizzaForm.module.css'

const CustomPizzaFrom = () => {
    return (
        <div className={classes['custom-pizza-wrapper']}>
            <form className={classes['custom-pizza-form-wrapper']}>
                <div className={classes['pizza-size']}>
                    <label>Pizza Size: </label>

                    <div className={classes['to-check']}>
                        <input type="radio" name="pizza-size" id="small" value="small" />
                        <label htmlFor="small">Small</label>
                    </div>
                    <div className={classes['to-check']}>
                        <input type="radio" name="pizza-size" id="medium" value="medium" />
                        <label htmlFor="medium">Medium</label>
                    </div>
                    <div className={classes['to-check']}>
                        <input type="radio" name="pizza-size" id="large" value="large" />
                        <label htmlFor="large">Large</label>
                    </div>
                    <div className={classes['to-check']}>
                        <input type="radio" name="pizza-size" id="extra-large" value="extra-large" />
                        <label htmlFor="extra-large">Extra Large</label>
                    </div>
                </div>

                <div>
                    <div><label>Ingredients: </label></div>

                    <div className={classes['pizza-meat']}>
                        <label>Meat: </label>
                        <div className={classes['to-check']}>
                            <input type="checkbox" id="pepperoni" name="pepperoni" value="pepperoni" />
                            <label htmlFor="pepperoni">pepperoni</label>
                        </div>
                        <div className={classes['to-check']}>
                            <input type="checkbox" id="sausage" name="sausage" value="sausage" />
                            <label htmlFor="sausage">sausage</label>
                        </div>
                        <div className={classes['to-check']}>
                            <input type="checkbox" id="ham" name="ham" value="ham" />
                            <label htmlFor="ham">ham</label>
                        </div>
                        <div className={classes['to-check']}>
                            <input type="checkbox" id="bacon" name="bacon" value="bacon" />
                            <label htmlFor="bacon">bacon</label>
                        </div>
                    </div>

                    <div className={classes['pizza-veggie']}>
                        <label>Veggies: </label>
                        <div className={classes['to-check']}>
                            <input type="checkbox" id="onion" name="onion" value="onion" />
                            <label htmlFor="onion">onion</label>
                        </div>
                        <div className={classes['to-check']}>
                            <input type="checkbox" id="mushroom" name="mushroom" value="mushroom" />
                            <label htmlFor="mushroom">mushroom</label>
                        </div>
                        <div className={classes['to-check']}>
                            <input type="checkbox" id="bell-pepper" name="bell-pepper" value="bell-pepper" />
                            <label htmlFor="bell-pepper">bell pepper</label>
                        </div>
                        <div className={classes['to-check']}>
                            <input type="checkbox" id="olive" name="olive" value="olive" />
                            <label htmlFor="olive">olive</label>
                        </div>
                    </div>

                    <div className={classes['pizza-cheese']}>
                        <label>Cheese: </label>
                        <div className={classes['to-check']}>
                            <input type="checkbox" id="mozzarella" name="mozzarella" value="mozzarella" />
                            <label htmlFor="mozzarella">mozzarella</label>
                        </div>
                        <div className={classes['to-check']}>
                            <input type="checkbox" id="cheddar" name="cheddar" value="cheddar" />
                            <label htmlFor="cheddar">cheddar</label>
                        </div>
                        <div className={classes['to-check']}>
                            <input type="checkbox" id="parmesan" name="parmesan" value="parmesan" />
                            <label htmlFor="parmesan">parmesan</label>
                        </div>
                        <div className={classes['to-check']}>
                            <input type="checkbox" id="feta" name="feta" value="feta" />
                            <label htmlFor="feta">feta</label>
                        </div>
                    </div>
                </div>


                <div className={classes['pizza-quantity']}>
                    <label>quantity:</label>
                    <input type="number" min="0" max="10" defaultValue="0" />
                </div>

                <div>
                    <button type="reset">reset</button>
                    <button type="submit">Add to Cart</button>
                </div>

            </form>
        </div>
    )
};

export default CustomPizzaFrom;