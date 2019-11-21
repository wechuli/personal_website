import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Article from "./pages/article/Article";
import ProjectCreate from "./pages/project-create/ProjectCreate";
import ArticleCreate from "./pages/article-create/ArticleCreate";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/articles" component={Article} />
        <Route exact path="/articles/new-article" component={ArticleCreate} />
        <Route exact path="/new-project" component={ProjectCreate} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
