import React from 'react';

export const ResultPage =(props)=>{

    return(
        <h1>You scored {props.location.state.score} out of {props.location.state.total} questions.</h1>
  
    )

}