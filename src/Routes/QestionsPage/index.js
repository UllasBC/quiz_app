import React, { useState, useEffect } from "react";
import { Question } from "../../Components/Question";
import { Option } from "../../Components/Option";
import { NavButton } from "../../Components/NavButton";
import "../../App.css";

export function QuestionsPage(props) {
  // const questions = [
  //   {
  //     question: "Which is the lates version of react?",
  //     options: [16, 17, 18, 19],
  //     correctOptionIndex: 1,
  //   },
  //   {
  //     question: "Does ReactJS is openSource",
  //     options: ["false", "true"],
  //     correctOptionIndex: 2,
  //   },
  // ];

  const getQuestions = ()=>{
    fetch('https://run.mocky.io/v3/2a2df284-f50e-4389-81ed-2ae208ed335a')
    .then(res=>res.json())

  }


  //API
  useEffect(()=>{getQuestions()},[]);//Syntax to create UseEffect and to call function only once(ComponentWillMount)

  //Hooks for state management
  const [questionIndex, setQuestionIndex] = useState(0);
  const [optionSelected, setOptionSelected] = useState({});
  const [questions, setQuestionsState] = useState([]);

  //Option button function
  const onOptionChange = (optionIndex) => {
    // optionSelected[questionIndex] = optionIndex;
    //console.log(optionSelected);
    if (
      questionIndex in optionSelected &&
      optionSelected[questionIndex] == optionIndex
    ) {
      const options = { ...optionSelected };
      delete options[questionIndex];
      setOptionSelected(options);
    } else {
      var obj = {};
      obj[questionIndex] = optionIndex;
      setOptionSelected({ ...optionSelected, ...obj });
    }
  };

  //NextButton function
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

  //onBtnClear function
  const onClearBtnClick = () => {
    if (questionIndex in optionSelected) {
      const options = { ...optionSelected };
      delete options[questionIndex];
      setOptionSelected(options);
    } else {
      console.log("No options been selectd");
    }
  };

  //onBtnSubmitClick
  const onBtnSubmitClick = () => {
    let score = 0;
    for (const questionIndex in optionSelected) {
      let userSelectedOptionIndex = optionSelected[questionIndex];
      if (
        questions[questionIndex].correctOptionIndex == userSelectedOptionIndex
      ) {
        score++;
      }
    }
    props.history.push("/results", { score: score, total: questions.length });
  };
  console.log(optionSelected);
  // console.log(questionIndex in optionSelected && optionSelected[questionIndex] == 0 +1 ? true:false);

  return (
    <div className="App">
      <div className="App-header">
        <h2>Quiz Assignment :</h2>
      </div>
      <div className="questions">
        {questions.length > 0 &&   
             <Question
          body={`${questionIndex + 1}. ${questions[questionIndex].question}`}
        />}

      </div>

      {/* {
            [1,2,3,4].map((item,index)=>{
              return (<Option body={item}/>)
             })
        } */}
      <div className="answerOptions">
        {questions.length > 0 && questions[questionIndex].options.map((item, index) => (
          <Option
            onChange={onOptionChange}
            checked={
              questionIndex in optionSelected &&
              optionSelected[questionIndex] === index + 1
                ? true
                : false
            }
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

        <NavButton onClick={onClearBtnClick} body={"Clear"} />

        {questionIndex === questions.length - 1 ? (
          <NavButton onClick={onBtnSubmitClick} body={"Submit"} />
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
