import { Navbar, Hero } from "../../components";
import "./header.css";
const header = () => {
  return (
    <header className="header">
      <div className="header-background-gradient" />
      <div className="header-background-gradient-2" />
      <Navbar />
      <Hero />
    </header>
  );
};

export default header;
