import React from "react";
import { Question } from "../../Components/Question";
import { Option } from "../../Components/Option";
import { NavButton } from "../../Components/NavButton";
import "../../App.css";

export function QuestionsPage() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Quiz Assignment :</h2>
        <Question body={"Hello"} />
        {/* {
            [1,2,3,4].map((item,index)=>{
              return (<Option body={item}/>)
             })
        } */}

        {[1, 2, 3, 4].map((item, index) =>( <Option body={item} />))}
        <NavButton body={"Next"} />
        <NavButton body={"Previous"} />
        {/* <Option body={'1'}/>
        <Option body={'2'}/>
        <Option body={'3'}/>
        <Option body={'4'}/> */}
      </div>
    </div>
  );
}
