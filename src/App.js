import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Routes>
            <Route path="/" exact element={<Header />}></Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
