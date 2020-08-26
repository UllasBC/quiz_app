import React from 'react'

import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import { WelcomePage } from './routes/WelcomePage';
import { QuestionsPage } from './routes/QestionsPage';


function App() {
  return (
    <Router>
      <Switch>
        
        <Route path={'/quiz'} exact>
          <QuestionsPage/>
        </Route>

        <Route path={'/quiz/app'} exact>
          <WelcomePage/>
        </Route>

        <Route path={'/'}>
          <WelcomePage/>
        </Route>
      </Switch>
    </Router> 
  );
}

export default App;
