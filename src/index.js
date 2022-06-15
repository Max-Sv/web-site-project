import { render } from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
// import { Footer } from "./components/footer";
import { Artworks } from "./pages/artworks";
import { Biography } from "./pages/biography";
import { Exhibition } from "./pages/exhibitions";
import { NotFound } from "./pages/not-found";
import "./styles/main.scss";
import { artworkItems, biographyItems, exhibitionItems } from "./mock.data";

render(
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Home artworkItems={artworkItems} />} />
      <Route path="/artworks" render={() => <Artworks artworkItems={artworkItems} />} />
      <Route path="/biography" render={() => <Biography biographyItems={biographyItems} />} />
      <Route path="/exhibitions" render={() => <Exhibition exhibitionItems={exhibitionItems} />} />
      <Route component={NotFound} />
    </Switch>
    {/* <Footer /> */}
  </Router>,
  document.getElementById("app"),
);
