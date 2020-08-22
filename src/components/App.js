import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import CharactersPage from "./CharactersPage";
import ComicsPage from "./ComicsPage";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ComicsPage} />
        <Route exact path="/characters" component={CharactersPage} />
        <Route exact path="/404" component={NotFound} />
        <Redirect from="*" to="/404"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
