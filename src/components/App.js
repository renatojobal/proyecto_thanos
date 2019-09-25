import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CharactersPage from "./CharactersPage";
import ComicsPage from "./ComicsPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ComicsPage} />
        <Route exact path="/characters" component={CharactersPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
