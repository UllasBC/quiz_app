import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WelcomePage } from "./Routes/WelcomePage";
import { QuestionsPage } from "./Routes/QestionsPage";
import { ResultPage } from "./Routes/ResultPage"
// import { QuestionsPage } from './Routes/QestionsPage';
// import {Header} from './Components/Header'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route component={WelcomePage} path="/"  exact/>
          <Route component={QuestionsPage} path="/questionPage"/>
          <Route component={ResultPage} path="/results"/>
          <Route component={Error} />
          </Switch> 
      </Router>
    </>

    // <Router>
    //   <Switch>
    //   <Route path={'/quiz'} exact>
    //       <QuestionsPage/>
    //     </Route>
    //     <Route path={'/quiz/app'} exact>
    //     <WelcomePage/>
    //     </Route>

    //   </Switch>
    // </Router>

    // <Router>
    //   <Switch>

    //     <Route path={'/quiz'} exact>
    //       <QuestionsPage/>
    //     </Route>

    //     <Route path={'/quiz/app'} exact>
    //       <WelcomePage/>
    //     </Route>

    //     <Route path={'/'}>
    //       <WelcomePage/>
    //     </Route>
    //   </Switch>
    // </Router>
  );
};

export default App;
