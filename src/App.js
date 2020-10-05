import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Add from "./components/Add";
import { CardProvider } from "./context/CardContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <CardProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" component={Home} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/new" component={Add} />
          <Footer />
        </div>
      </Router>
    </CardProvider>
  );
}

export default App;
