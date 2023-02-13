import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

import '../styles/Navigationbar.css';

import Logo from '../assets/logo7.png';

const NavigationBar = () => {
    const [openLinks, setOpenLinks] = useState(false);

    return (
        <nav className="navigationbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
                <div className="hiddenLinks">
                    <Link to="/"> Strona Główna </Link>
                    <Link to="/o-nas"> O nas </Link>
                    <Link to="/kontakt"> Kontakt </Link>
                    <Link to="/logowanie"> Zaloguj się </Link>
                </div>
            </div>

            <div className="rightSide">
                <Link to="/"> Strona Główna </Link>
                <Link to="/o-nas"> O nas </Link>
                <Link to="/kontakt"> Kontakt </Link>
                <Link to="/logowanie"> Zaloguj się </Link>
                <button role="button" onClick={() => setOpenLinks(!openLinks)}>
                    <ReorderIcon/>
                </button>
            </div>
        </nav>
    );
};

export default NavigationBar;
