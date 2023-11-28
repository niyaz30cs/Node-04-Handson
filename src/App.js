import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <div className="btns">
          <Link to={"/signup"} className="btn">
            {" "}
            <button id="btn1">Signup</button>
          </Link>

          <Link to={"/login"} className="btn">
            <button id="btn1" onClick={() => {}}>
              Login
            </button>
          </Link>
        </div>
      </div>
      <footer>
        <h4>&copy; This Website All Right Reserved!. With Alibaba.com</h4>
      </footer>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
