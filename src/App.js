import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Standings from './components/pages/Standings';
import Main from './components/common/Main';

function App() {
  return (
    <BrowserRouter className="size-1280">
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/standings" component={Standings} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
