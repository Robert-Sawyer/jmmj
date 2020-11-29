import React from 'react';
import classes from './Layout.module.css'
import Header from "../../Header/Header";
import Top from "../../Top/Top";

const Layout = props => {
    return (
        <div>
            <Header/>
            <Top/>
            <main className={classes.Main}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;
