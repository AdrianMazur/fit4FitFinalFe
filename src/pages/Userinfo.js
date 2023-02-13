import React, {useState}  from "react"; 
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import "../styles/Userinfo.css";
import Baner from "../assets/fitness3.png";



function Userinfo() {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');


  return (
    <>
    <Navigationbar />
    <div className="userinfo" style={{ backgroundImage: `url(${Baner})` }}>
      
      <section>
         <h1>Twoje dane </h1>
         <form>
          <label>Imię i Nazwisko</label>
          <input onChange={e => setName(e.target.value)} value={name} id="name" placeholder="Imię i nazwisko" type="text" />
          <label>Waga</label>
          <input onChange={e => setWeight(e.target.value)} value={weight} id="weight" placeholder="Waga" type="weight"/>
          <label>Wzrost</label>
          <input onChange={e => setHeight(e.target.value)} value={height} id="height" placeholder="Wzost" type="height" />
          <button> Edytuj </button>
          <button> Zapisz </button>
         </form>
        </section>
    </div>
    <Footer />
      </>
  );
}

export default Userinfo
