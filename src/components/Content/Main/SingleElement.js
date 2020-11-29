import React, {useState, useEffect} from 'react'
import classes from './SingleElement.module.css'

const SingleElement = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [photo, setPhoto] = useState('')
    const [explanation, setExplanation] = useState('')

    const fetchUrl = 'https://api.nasa.gov/planetary/apod?date=2020-11-21&api_key=uLJcJlhJyVVdA2yUprR85wmv68xg1Ha2mZ6iALxz'

    useEffect(() => {
        setLoading(true)
        fetch(fetchUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setLoading(false)
                setPhoto(data.url)
                setExplanation(data.explanation)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
                setError('Data not available')
            })
        //pusta tabela jako drugi argument zapobiega inifinite loop
    }, [])

    if (loading) {
        return <h1>Czy wiedziałeś, że Robert to pała?</h1>
    }

    if (error !== '') {
        return <h1>Error: {error}</h1>
    }

    return (
        <div className={classes.Container}>
            <div>{explanation}</div>
            <img src={photo} alt="NASA" width="250" height="150"/>
        </div>
    )
}

export default SingleElement