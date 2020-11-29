import React from 'react'
import classes from './Elements.module.css'
import SingleElement from "./SingleElement";

const Elements = ({elementsToRender}) => {

    return (
        // <div className={classes.Container}>
        //     <ul className={classes.List}>
        //         {elementsToRender.map(element => (
        //             <div className={classes.ElementContainer}>
        //                 <li>
        //                     <img src={element.url} alt=''/>
        //                 </li>
        //             </div>
        //         ))}
        //     </ul>
        // </div>
        <div className={classes.Container}>
            <ul className={classes.List}>
                <div className={classes.ElementContainer}>
                    <li>
                        <SingleElement/>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Elements
