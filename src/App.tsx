import React from 'react';
import {
  BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

//Import Pages
import {ArticleList} from "./pages/article-list";
import {ArticleDetail} from "./pages/article-detail";
import {Login} from "./pages/login";
import {AdminArticleList} from "./pages/admin-article-list";
import {AdminNewArticle} from "./pages/admin-new-article";
import {AdminEditArticle} from "./pages/admin-edit-article";

//Import styles
import "./App.css"


function App() {
  return (
    <Router>
      <Switch>
        <Route
            exact
            path="/"
            component={ArticleList}
        />
        <Route
            exact
            path="/1"
            component={ArticleDetail}
        />
        <Route
          exact
          path="/login"
          component={Login}
        />
        <Route
            exact
            path="/admin"
            component={AdminArticleList}
        />
        <Route
          exact
          path="/new"
          component={AdminNewArticle}
        />
        <Route
          exact
          path="/edit/1"
          component={AdminEditArticle}
        />
      </Switch>
    </Router>
  );
}

export default App;
