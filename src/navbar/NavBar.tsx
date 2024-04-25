import { useState } from 'react';
import NexcentLogo from '../assets/imgs/NexcentLogo.png';
import './navbar.css';
import { Link } from 'react-router-dom';
import Login from '../Login_Registration/Login';
import Registration from '../Login_Registration/Registration';
const Navbar = () => {
  const [isOpenLogin, setOpenLogin] = useState(false);
  const [isOpenRegistration, setopenRegistration] = useState(false);

  const openLoginModule = () => {
    setOpenLogin(true);
  };

  const closeLoginModule = () => {
    setOpenLogin(false);
  };

  const openRegistration = () => {
    setopenRegistration(true);
  };

  const closeRegistration = () => {
    setopenRegistration(false);
  };
  return (
    <>
      <div className="NavbarContainer">
        <div className="">
          <button onClick={() => window.location.reload()}>
            <img src={NexcentLogo} alt="logo" />
          </button>
        </div>
        <ul className="NavbarLinks">
          <li className="LinksItem">
            <Link to="/">Home</Link>
          </li>
          <li className="LinksItem">
            <Link to="/service">Service</Link>
          </li>
          <li className="LinksItem">
            <Link to="/features">Features</Link>
          </li>
          <li className="LinksItem">
            <Link to="/product">Product</Link>
          </li>
          <li className="LinksItem">
            <Link to="/testimonial">Testimonial</Link>
          </li>
          <li className="LinksItem">
            <Link to="/FAQ">FAQ</Link>
          </li>
        </ul>
        <div className="NavbarBTN">
          <button className="LogIn" onClick={openLoginModule}>
            Login
          </button>
          <button className="SignUp" onClick={openRegistration}>
            Sign up
          </button>
        </div>
      </div>
      <div>
        <Login isOpen={isOpenLogin} onClose={closeLoginModule} />
      </div>
      <div>
        <Registration isOpen={isOpenRegistration} onClose={closeRegistration} />
      </div>
    </>
  );
};

export default Navbar;
