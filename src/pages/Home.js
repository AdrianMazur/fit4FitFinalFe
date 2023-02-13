import React from "react";
import { Link } from "react-router-dom";
import Baner from "../assets/fitness5.png";
import "../styles/Home.css";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";

function Home() {
  return (
      <>
        <Navigationbar />
        <main className="home" style={{ backgroundImage: `url(${Baner})` }}>
          <div className="headerContainer">
            <h1 style={{marginBottom: "35px"}}>Twój Trening</h1>
            <p>Zaplanuj już teraz!</p>
            <Link to="/rejestracja">
              <button> REJESTRACJA </button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
  );
}

export default Home;
