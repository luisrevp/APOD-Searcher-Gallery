import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainRender from "./MainRender";
import Acerca from "./Pages/Acerca";
import ErrorPage from "./Pages/ErrorPage";
import "./Estilos/App.css";
import BarraNav from "./Componentes/BarraNav";
import Footer from "./Componentes/Footer";

function App() {
  return (
    <>
      <Router>
        <BarraNav />
        <Switch>
          <Route path="/APOD-Searcher-Gallery" component={MainRender} exact />
          <Route path="/About" component={Acerca} />
          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
