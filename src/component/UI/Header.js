import React from 'react';
import classes from './Header.module.css';
import logo from '../../images/pizza_logo.png'
import HeaderCartButton from './HeaderCartButton';

const Header = props =>{

    const onCheckModalHandler = () =>{
        props.onCheckModal();
    };

    const sampleLink = "#";
    return (
        <div className={classes['header-wrapper']}>

            <div className={classes['logo-wrapper']}>
                <img src={logo} className={classes['logo-img']} alt='pizza logo'/>
                Pizza Factory
            </div>

            <div>
                <div className={classes['link-items']}>
                    <div><a href={sampleLink}>Home</a></div>
                    <div><a href={sampleLink}>Menu</a></div>
                    <div><a href={sampleLink}>Coupon</a></div>
                    <div><a href={sampleLink}>Rewards</a></div>
                    <div><a href={sampleLink}>Location</a></div>
                    <div><HeaderCartButton onCheck={onCheckModalHandler}/></div>
                </div>
            </div>

        </div>
    )


};


export default Header





