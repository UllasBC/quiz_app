import React from "react";
import "../App.css";
export const Option = (props) => {
  return (
    <>
      <input
        type="checkbox" name="option" checked={props.checked}
        onChange={() => {
          props.onChange(props.optionIndex);
        }}
      ></input>
      <span>{props.body}</span>
    </>
  );
};
