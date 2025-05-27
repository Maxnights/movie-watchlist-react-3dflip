// Убедись, что он выглядит так:
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Add } from "./components/Add";
import { Watched } from "./components/Watched";
import { GlobalProvider } from "./context/GlobalState";

import "./styles.css";
import "./lib/font-awesome/css/all.min.css";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
        <Switch>
          <Route exact path="/" component={Watchlist} />
          <Route path="/add" component={Add} />
          <Route path="/watched" component={Watched} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
