import React from 'react';

export const ResultPage =(props)=>{

    return(
    <h1>Result Page {props.location.state.score} : {props.location.state.total}</h1>
    )

}