// src/App.js
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Add } from "./components/Add";
import { Watched } from "./components/Watched";
import { GlobalProvider } from "./context/GlobalState";

import "./styles.css";
import "./lib/font-awesome/css/all.min.css";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    // exitBeforeEnter гарантирует, что текущая страница уйдёт до входа новой
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Watchlist />
          </motion.div>
        </Route>
        <Route path="/add">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Add />
          </motion.div>
        </Route>
        <Route path="/watched">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Watched />
          </motion.div>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <ToastContainer
          position="top-right" /* правый верхний угол */
          autoClose={3000} /* время в мс */
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
        <AnimatedRoutes />
      </Router>
    </GlobalProvider>
  );
}

export default App;
