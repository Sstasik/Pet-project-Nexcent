import { Fragment, useState } from 'react';
import NexcentLogo from '../assets/imgs/NexcentLogo.png';
import { Link } from 'react-router-dom';
import Login from '../Login_Registration/Login';
import Registration from '../Login_Registration/Registration';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { logout } from '../store/userSlice';

const Navbar = () => {
  const [isOpenLogin, setOpenLogin] = useState(false);
  const [isOpenRegistration, setopenRegistration] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.auth);
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
      <div className="flex flex-row justify-around items-center mt-[20px] phone:mt-[10px] phone:gap-[15px] ">
        <div className="">
          <button onClick={() => window.location.reload()}>
            <img
              className="h-[20px] w-[auto] phone:h-[15px]"
              src={NexcentLogo}
              alt="logo"
            />
          </button>
        </div>
        <ul className="list-none flex flex-row gap-[40px] phone:hidden ">
          <li className=" font-semibold phone:text-xs">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold phone:text-xs">
            <Link to="/service">Service</Link>
          </li>
          <li className="font-semibold phone:text-xs">
            <Link to="/features">Features</Link>
          </li>
          <li className="font-semibold phone:text-xs">
            <Link to="/product">Product</Link>
          </li>
          <li className="font-semibold phone:text-xs">
            <Link to="/testimonial">Testimonial</Link>
          </li>
          <li className="font-semibold phone:text-xs">
            <Link to="/FAQ">FAQ</Link>
          </li>
        </ul>

        <button className="hidden phone:inline" onClick={toggleMenu}>
          {' '}
          Burger Menu
        </button>
        {isMenuOpen && (
          <ul className="list-none phone:block">
            <li className="font-semibold phone:text-xs">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold phone:text-xs">
              <Link to="/service">Service</Link>
            </li>
            <li className="font-semibold phone:text-xs">
              <Link to="/features">Features</Link>
            </li>
            <li className="font-semibold phone:text-xs">
              <Link to="/product">Product</Link>
            </li>
            <li className="font-semibold phone:text-xs">
              <Link to="/testimonial">Testimonial</Link>
            </li>
            <li className="font-semibold phone:text-xs">
              <Link to="/FAQ">FAQ</Link>
            </li>
          </ul>
        )}
        <div className="flex gap-[20px] phone:gap-[10px]">
          {selector.user === null && (
            <Fragment>
              <button
                className=" text-[#4CAF4F] font-semibold phone:text-xs"
                onClick={openLoginModule}>
                Login
              </button>
              <button
                className="bg-[#4CAF4F] text-white font-semibold px-[15px] py-[10px] rounded-lg phone:text-xs phone:px-[10px] phone:py-[5px] phone:text-wrap"
                onClick={openRegistration}>
                Sign up
              </button>
            </Fragment>
          )}
          {selector.user && (
            <button
              className="text-[#4CAF4F]"
              onClick={() => dispatch(logout())}>
              Sign out
            </button>
          )}
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
