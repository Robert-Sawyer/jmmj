import React from 'react'
import classes from './AuthButtons.module.css'

const AuthButtons = () => (
    <ul className={classes.Buttons}>
        <li className={classes.Login}><a href='#'>Log In</a></li>
        <li className={classes.Register}><a href='#'>Register</a></li>
    </ul>
)

export default AuthButtons
