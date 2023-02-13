import React, {useState} from "react";
import Fitnesskontakt from "../assets/fitness3.jpg";
import "../styles/Contact.css";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import DismissableAlert from "../helpers/DismissableAlert";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [sendMessageAlertOpen, setAlertOpen] = useState(false);
    const sendUsMessageSubmitHandler = e => {
        e.preventDefault();

        e.target.reset();
        setAlertOpen(true);
    };

  return ( <>
    <Navigationbar />
        <div className="contact">
          <div
            className="leftSide"
            style={{ backgroundImage: `url(${Fitnesskontakt})` }}
          ></div>
          <div className="rightSide" style={{marginLeft: "50px"}}>
            <h1>FORMULARZ KONTAKTOWY</h1>
            <p>Napisz do nas!</p>
            <form id="contact-form" onSubmit={e => sendUsMessageSubmitHandler(e)}>
              <label htmlFor="name">Imię i nazwisko</label>
              <input onChange={e => setName(e.target.value)} value={name} id="name" placeholder="Imię i nazwisko..." type="text" required />
              <label htmlFor="email">Email</label>
              <input onChange={e => setEmail(e.target.value)} value={email} id="email" placeholder="Wprowadź email..." type="email" required />
              <label htmlFor="message">Treść wiadomości</label>
              <textarea
                rows="6"
                placeholder="Treść wiadomości..."
                name="message"
                onChange={e => setMessage(e.target.value)}
              >{message}</textarea>
              <button type="submit" className="btn btn-danger mb-3">WYŚLIJ</button>
            </form>

              {sendMessageAlertOpen && <DismissableAlert toggle={() => setAlertOpen(false)} timeout={3} color="info">
                  Wiadomość: {message} została wysłana.
              </DismissableAlert>
              }
          </div>
        </div>
      <Footer />
      </>
  );
}

export default Contact;