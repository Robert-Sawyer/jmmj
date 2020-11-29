import React from 'react'
import classes from './LoadMore.module.css'

const LoadMore = (props) => (
    <button className={classes.Button} onClick={props.showMoreElements}>Load more</button>
)

export default LoadMore
