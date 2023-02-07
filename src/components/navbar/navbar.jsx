import { useState } from "react";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Button from "../button/button";
import "./navbar.css";
const headerMenu = (
  <ul className="header__menu">
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#wgpt">What is GPT?</a>
    </li>
    <li>
      <a href="#">Open AI</a>
    </li>
    <li>
      <a href="#">Case Studies</a>
    </li>
    <li>
      <a href="#blog">Library</a>
    </li>
    <li className="mobile-show-on">
      <Button className="header__button-signIn" text="Sign in" />
    </li>
    <li className="mobile-show-on">
      <Button className="header__button-signUp" text="Sign up" />
    </li>
  </ul>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="header__nav section__padding">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__nav-desktop">{headerMenu}</div>
      <div className="header__login">
        <Button className="header__button-signIn" text="Sign in" />
        <Button className="header__button-signUp" text="Sign up" />
      </div>

      <div className="header__nav-phone">
        {toggleMenu ? (
          <RiMenu3Line
            className="header__nav-phone-icon"
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiCloseLine
            className="header__nav-phone-icon"
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {!toggleMenu && <div className="header__menu-mobile">{headerMenu}</div>}
      </div>
    </nav>
  );
};
export default Navbar;
