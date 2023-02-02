import "./button.css";

const Button = ({ text, className }) => (
  <button className={`button ${className === undefined ? "" : className}`}>
    {text}
  </button>
);

export default Button;
