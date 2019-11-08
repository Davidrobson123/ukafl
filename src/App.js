import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StandingsBucsDiv2 from './components/pages/StandingsBucsDiv2';
import About from './components/pages/About';
import Main from './components/common/Main';
import Contact from './components/pages/Contact';

function App() {
  return (
    <BrowserRouter className="size-1280">
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/standings-bucs-div2" component={StandingsBucsDiv2} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
