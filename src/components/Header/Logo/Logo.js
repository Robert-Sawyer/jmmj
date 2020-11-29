import React from 'react'
import classes from './Logo.module.css'
import Image from './Group.png'

const Logo = () => (
    <div className={classes.Logo}>
        <img src={Image} alt="logo"/>
    </div>
)

export default Logo
