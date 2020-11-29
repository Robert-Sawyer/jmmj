import React from 'react'
import classes from './Header.module.css'
import Logo from "./Logo/Logo"
import AuthButtons from "./AuthButtons/AuthButtons";
import Links from "./Links/Links";

const Header = () => {
    return (
        <header className={classes.Header}>
            <Logo/>
            <Links/>
            <AuthButtons/>
        </header>
    )
}

export default Header
