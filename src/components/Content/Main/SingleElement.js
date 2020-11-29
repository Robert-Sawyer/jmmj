import React, {useState, useEffect} from 'react'
import classes from './SingleElement.module.css'

const SingleElement = () => {

    const [photo, setPhoto] = useState({});

    fetch('https://api.nasa.gov/planetary/apod?date=2020-11-21&api_key=uLJcJlhJyVVdA2yUprR85wmv68xg1Ha2mZ6iALxz',
        {
            method: 'get'
        }
    )
        .then(response => response.json())
        .then(res => console.log(res))
        .then((jsonPhoto) => {
            console.log(jsonPhoto)
            setPhoto(jsonPhoto)
        })
        .catch(err => console.log(err))

    let image = (
        <h1>Nie udało się</h1>
    );


    setTimeout(() => {
        image = (
            <img className={classes.Image} alt="" src={photo.url}/>
        )
    }, 1000)


    return (
        <div className={classes.Container}>
            {image}
        </div>
    )
}


export default SingleElement
