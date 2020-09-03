import React from "react";

export const NavButton =( props) =>{
    return(
    <button onClick={props.onClick}>{props.body}</button>
    )
}