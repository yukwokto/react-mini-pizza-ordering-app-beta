import React from "react";
import classes from './ClassicsHead.module.css';

const ClassicsHeader = props =>{
    return (
        <div className={classes['classics-header']}>
            <div className={classes['classics-info']}>{props.headings}</div>
        </div>
    )
}

export default ClassicsHeader;