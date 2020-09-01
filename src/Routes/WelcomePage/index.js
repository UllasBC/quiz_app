import React from "react";
import { Helmet } from "react-helmet";
import "../../../src/App.css";

import { Link } from "react-router-dom";

//import {useHistory} from "react-router-dom";

export function WelcomePage(props) {
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
            <Link to="/questionPage">Link Start</Link>
              <button
                type={"submit"}
                onClick={() => props.history.push("/questionPage")}
              >
                Start
              </button>
            
          </center>
        </div>
      </div>
    </React.Fragment>
  );
}
