import React, { useState } from "react";
import { Question } from "../../Components/Question";
import { Option } from "../../Components/Option";
import { NavButton } from "../../Components/NavButton";

import "../../App.css";

export function QuestionsPage() {
  const questions = [
    {
      question: "Which is the lates version of react?",
      options: [16, 17, 18, 19],
    },
    {
      question: "Does ReactJS is openSource",
      options: ["false", "true"],
    },
  ];

  //let questionIndex = 0;
  //Hooks for state management
  const [questionIndex, setQuestionIndex] = useState(0);

  const [optionSelected, setOptionSelected] = useState({});

  //Option Fun
  const onOptionChange = (optionIndex) => {
    // optionSelected[questionIndex] = optionIndex;
    //console.log(optionSelected);
    var obj = {};
    obj[questionIndex] = optionIndex;

     setOptionSelected({...optionSelected, ...obj});
  };

  //NextButton fun
  const onNextBtnClick = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Completed");
    }
  };

  //PrevButtonFun
  const onPrvBtnClick = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  //Op
console.log(optionSelected);

 // console.log(questionIndex in optionSelected && optionSelected[questionIndex] == 0 +1 ? true:false);

  return (
    <div className="App">
      <div className="App-header">
        <h2>Quiz Assignment :</h2>
      </div>
      <div className="questions">
        <Question
          body={`${questionIndex + 1}. ${questions[questionIndex].question}`}
        />
      </div>

      {/* {
            [1,2,3,4].map((item,index)=>{
              return (<Option body={item}/>)
             })
        } */}
      <div className="answerOptions">
        {questions[questionIndex].options.map((item, index) => (
          <Option
            onChange={onOptionChange}
            checked = {questionIndex in optionSelected && optionSelected[questionIndex] === index +1 ? true:false} 
            body={`${index + 1}. ${item}`}
            optionIndex={index + 1}
          />
        ))}
      </div>
      <div className="bottom-footer">
        {/* {questionIndex > 0 && <NavButton onClick={onPrvBtnClick} body={"Previous"} />} */}
        {questionIndex > 0 ? (
          <NavButton onClick={onPrvBtnClick} body={"Previous"} />
        ) : (
          <span />
        )}

        {questionIndex === questions.length - 1 ? (
          <NavButton onClick={onNextBtnClick} body={"Submit"} />
        ) : (
          <NavButton onClick={onNextBtnClick} body={"Next"} />
        )}
      </div>
      {/* <Option body={'1'}/>
        <Option body={'2'}/>
        <Option body={'3'}/>
        <Option body={'4'}/> */}
    </div>
  );
}
