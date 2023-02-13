import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Userinfo from "./pages/Userinfo";
import Exercises from "./pages/Exercises";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/o-nas" exact element={<About/>} />
          <Route path="/kontakt" exact element={<Contact/>} />
          <Route path="/logowanie" exact element={<Login/>} />
          <Route path="/rejestracja" exact element={<Register/>} />
          <Route path="/profil" exact element={<Profile/>} />
          <Route path="/info" exact element={<Userinfo/>} />
          <Route path="/cwiczenia" exact element={<Exercises/>} />
           {/*  TODO: /treningi (cwiczenia nie maja byc pod urlem w react router) */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
