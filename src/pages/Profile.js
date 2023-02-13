import React from "react";
import { Link } from "react-router-dom";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import "../styles/Profile.css";
import Baner from "../assets/fitness3.png";
import Avatar from "../assets/avatar.jpg";

function Profile() {
  return (
    <>
    <Navigationbar />
    <div className="profile" style={{ backgroundImage: `url(${Baner})` }}>
      <div className="leftSide">
        <div className="profileContainer">
        <section>
        <div className="avatar" style={{ backgroundImage: `url(${Avatar})` }}> </div>         
          <h1>Twój Profil </h1>

          <p>Nazwa użytkownika  </p>
          <button> Wyloguj się </button>
          </section>
          </div>
    
    </div>
      
    <div className="rightSide">
      <section>
        <Link to="/info">
        <button> Twoje dane </button>
        </Link>
        <Link to="/cwiczenia">
          <button> Wybierz ćwiczenia </button>
        </Link>
        <button> Twoje treningi </button>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Profile
