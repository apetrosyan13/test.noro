import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Validation from "./Validation";
import AppChoose from "./AppChoose";

function App() {
  return (
    <Router>
      <AppChoose />
      <Switch>
        <Route path="/post" component={Main} />
        <Route path="/validation" component={Validation} />
      </Switch>
    </Router>
  );
}

export default App;
