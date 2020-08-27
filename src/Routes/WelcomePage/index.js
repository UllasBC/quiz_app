import React from "react";
import {Helmet} from 'react-helmet';
import '../../../src/App.css';


export function WelcomePage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Quiz Application</title>
        <meta
          name="title"
          content="Applying ReactJS concepts to build Quiz App..!!"
        />
      </Helmet>
      <div className="container">
        <div>
          <center>
            <h1 className="App">React Quiz</h1>
          </center>
          <center>
            <button input type={"submit"}>
              Start
            </button>
          </center>
        </div>
      </div>
    </React.Fragment>
  );
}
