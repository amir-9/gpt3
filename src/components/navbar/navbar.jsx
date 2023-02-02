import logo from "../../assets/logo.svg";
import Button from "../button/button";
import "./navbar.css";
const Navbar = () => (
  <nav className="header__nav section__padding">
    <div className="header__logo">
      <img src={logo} alt="logo" />
    </div>
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
    </ul>
    <div className="header__login">
      <Button className="header__button-signIn" text="Sign in" />
      <Button className="header__button-signUp" text="Sign up" />
    </div>
  </nav>
);

export default Navbar;
