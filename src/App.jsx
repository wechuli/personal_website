import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/blog" component={Blog} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
