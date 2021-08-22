import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container"> 
        <Link to="/" className="navbar-logo">
          Connie Liu
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? ( <FaRegWindowClose className="mobile-icon" />) : 
          ( <FaBars className="mobile-icon" /> )}
        </div> 
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/photography' className="nav-links" onClick={closeMobileMenu}>
              Photography
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
