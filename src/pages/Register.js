import React from "react";
import { useRef, useState, useEffect } from "react";
import "../styles/Register.css";
import Baner from "../assets/fitness5.png";
import axios from 'axios';
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import {REGISTER_URL} from "../api/AJAX_DEPLOYMENT_CONFIG";

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [validName] = useState(false);

    const [username, setUsername] = useState('');
    const [validUsername] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setErrMsg('');
    }, [username, email, password, matchPwd])
    

    const handleSubmit = async (e) => {
        e.preventDefault();
         try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ username,email, password}),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            setSuccess(true);
            setUsername('')
            setEmail('');
            setPassword('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Serwer nie odpowiada');
            } else if (err.response?.status === 409) {
                setErrMsg('Email jest już zajęty. Wybierz inny');
            } else {
                setErrMsg('Błąd rejestracji')
            }
            errRef.current.focus();
        }
         
         
    }
    
    return (
        <>
            <Navigationbar />
        <div className="register" style={{ backgroundImage: `url(${Baner})` }}>
        {success ? (
            <section>
                <h1>Sukces!</h1>
                <p>
                    <a href="/logowanie">Zaloguj się</a>
                </p>
            </section>
        ) : (
          <section>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1> Rejestracja</h1>
            <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            User name:
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                            aria-describedby="uidnote"
                        />

                        <label htmlFor="username">
                            Email:
                        </label>
                        <input
                            type="text"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-describedby="uidnote"
                        />

                        <label htmlFor="password">
                            Hasło:
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            aria-describedby="pwdnote"
                            minLength={8}
                            maxLength={24}
                        />
                        <label htmlFor="confirm_pwd">
                            Potwierdź hasło:
                            
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-describedby="confirmnote"
                        />

                        <button type="submit">Załóż konto</button>
                    </form>
                    
                    <p>
                        Masz już konto?<br />
                        <span className="line">
                            <a href="/logowanie">Zaloguj się</a>
                        </span>
                    </p>
            
          </section>
        )}
        </div>
            <Footer />
        </>
      );
}

export default Register;