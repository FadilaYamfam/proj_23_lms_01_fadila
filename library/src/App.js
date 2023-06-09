import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import React from "react";


import About from "./components/HomePage/about";
import Footer from "./components/HomePage/footer";
import Libraries from "./components/HomePage/Libraries";
import Navbar from "./components/HomePage/Navbar";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      
      <div className="back-image">
      <h1 className="color">
            WELCOME TO OUR <br /> LIBRARY MANAGEMENT SYSTEM
      </h1>
        <section id="contact">
          
        </section>

        <div className="buttons" id="buttons">
          <Link to="register">
            <button id="sub" className="btn btn-dark btn-lg btn-block">
              Subscriber
            </button>
          </Link>
          <Link to="LibrarianLog">
            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block"
              id="admin"
            >
              Administrator
            </button>
          </Link>
        </div>
        <div id="bottom">
          <Libraries />
          <About />
          <Footer> </Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
