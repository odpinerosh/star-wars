import React from "react";
import Card from "./UI/Card";


const Movie = props => {

    return (
        <Card classes='card card-box-shadow' cardId='card-movie'>
            <h2>{props.title}</h2>
            <h3>{props.reDate}</h3>
            <p>{props.opText}</p>
        </Card>
    );

}


export default Movie;