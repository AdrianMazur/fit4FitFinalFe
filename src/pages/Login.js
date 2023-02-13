import React from "react";
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import "../styles/Login.css";
import Baner from "../assets/fitness5.png";


import axios from 'axios';
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import {LOGIN_URL} from "../api/AJAX_DEPLOYMENT_CONFIG";

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({username,password}),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            setSuccess(true);
            const accessToken = response?.data?.accessToken;
            setAuth({ username, password, roles: null, accessToken });
            setUsername('');
            setPassword('');

            /*navigate("/");
            window.location.reload();*/

        } catch (err) {
            if (!err?.response) {
                setErrMsg('Serwer nie odpowiada');
            } else if (err.response?.status === 400) {
                setErrMsg('Nieprawidłowy login lub hasło');
            } else {
                setErrMsg('Logowanie się nie powiodło');
            }
            errRef.current.focus();
        }
    }



  return (
      <>
          <Navigationbar />
    <div className="login" style={{ backgroundImage: `url(${Baner})` }}>
            {success ? (
                <section>
                    <p>
                        <a href="/profil">Profil</a>
                    </p>
                </section>
            ) : (
    <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Zaloguj się</h1>
        <form onSubmit={handleSubmit}>
                        <label htmlFor="username">User name:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />

                        <label htmlFor="password">Hasło:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button type="submit">Zaloguj się</button>
                    </form>
                    <p>
                        Nie masz jeszcze konta?<br />
                        <span className="line">

                            <a href="/rejestracja">Zarejestruj się</a>

                        </span>
                    </p>
      
    </section>
            )}
            </div>
          <Footer />
      </>
  );
}

export default Login
