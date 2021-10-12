import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Redirect, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Statelist from './Statelist';
import Data from './Data';
import './App.css'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Switch >
       <Route exact path="/" component={Home} />
       <Route exact path="/statelist" component={Statelist} />
       <Route exact path="/data" component={Data} />
       <Redirect to="/"/>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;


