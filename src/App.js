import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Detail from "./Detail";

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/detail" component={Detail} />
  </Router>
);

export default App;
