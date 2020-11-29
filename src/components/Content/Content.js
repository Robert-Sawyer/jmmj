import React, {useState, useEffect} from 'react'
import axios from 'axios';
import classes from './Content.module.css'
import ContentTop from "./ContentTop/ContentTop";
import Elements from "./Main/Elements";
import LoadMore from "./LoadMore/LoadMore";

// import elements from "./elements";

const elementsPerPage = 6;
let arrayForHoldingElements = [];

const Content = () => {

    const [elements, setElements] = useState([]);
    const [elementsToShow, setElementsToShow] = useState([]);
    const [next, setNext] = useState(6);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios(
    //             'https://api.nasa.gov/planetary/apod?date=2020-11-21&api_key=uLJcJlhJyVVdA2yUprR85wmv68xg1Ha2mZ6iALxz',
    //         );
    //         console.log(result.data)
    //
    //         setElements(result.data);
    //     };
    //
    //     fetchData();
    // }, []);

    const loopWithSlice = (start, end) => {
        const slicedElements = elements.slice(start, end);
        arrayForHoldingElements = [...arrayForHoldingElements, ...slicedElements];
        setElementsToShow(arrayForHoldingElements);
    };

    useEffect(() => {
        loopWithSlice(0, elementsPerPage);
    }, []);

    const showMoreElementsHandler = () => {
        loopWithSlice(next, next + elementsPerPage);
        setNext(next + elementsPerPage);
    }

    return (
        <div className={classes.Content}>
            <ContentTop/>
            {/*<button onClick={elementContent}>Fetch data</button>*/}
            <Elements/>
            <LoadMore
                showMoreElements={showMoreElementsHandler}/>
        </div>
    )
}

export default Content
