import React from "react";
import classes from './DIYHeaders.module.css';

const DIYHeaders = props =>{
    return (
        <div className={classes['classics-header']}>
            <div className={classes['classics-info']}>{props.headings}</div>
        </div>
    )
}

export default DIYHeaders;