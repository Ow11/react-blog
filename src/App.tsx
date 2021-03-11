import React from 'react';
import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//Import Pages
import {ArticleList} from "./pages/article-list";

//Import Styles
import "./components/css/main.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route
            exact
            path="/"
            component={ArticleList}
        />
      </Switch>
    </Router>
  );
}

export default App;
