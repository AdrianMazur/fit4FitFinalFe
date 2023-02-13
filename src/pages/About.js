import React from "react";
import Fitnessphoto from "../assets/fitness2.jpg";
import "../styles/Contact.css";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <Navigationbar />
            <div className="contact">
                <div
                    className="leftSide"
                    style={{ backgroundImage: `url(${Fitnessphoto})` }}
                ></div>
                <div className="rightSide">
                    <div className="aboutBottom">
                        <h1>O NAS</h1>
                        <p>
                            Jeśli jesteś miłośnikiem aktywności fizycznej lub chciałbyś zacząć swoją przygodę z aktywnością fizyczną
                            to jesteś w dobrym miejscu. Nasza aplikacja została stworzona w celu pomocy z usystematyzowaniem swojej aktywności.
                            W komfortowy sposób możesz dodawać nowe plany treningowe, sprawdzać progres oraz wytyczać dla siebie nowe cele.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
      );
}

export default About
