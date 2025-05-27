// src/App.js
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <AnimatePresence exitBeforeEnter>
      {/* motion.div — ПРЯМОЙ потомок AnimatePresence */}
      <motion.div
        key={location.pathname} // ключ по пути
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* внутри — привычный Switch/Route */}
        <Switch location={location}>
          <Route exact path="/" component={Watchlist} />
          <Route path="/add" component={Add} />
          <Route path="/watched" component={Watched} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

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
        <AnimatedRoutes />
      </Router>
    </GlobalProvider>
  );
}

export default App;
