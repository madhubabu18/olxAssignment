import React from 'react'
import classes from './index.module.css'

const Country = (props) =>{
    return(
    <div className={classes.country}>
        <p>Name: {props.name}</p>
        <p>Native: {props.native}</p>
        <p>Captial: {props.capital}</p>
        <p>Currency: {props.currency}</p>
    </div>
    )
}

export default Country