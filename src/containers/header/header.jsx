import { Navbar, Hero } from "../../components";
import "./header.css";
const header = () => {
  return (
    <header className="header">
      <div className="header-background-gradient" />
      <Navbar />
      <Hero />
    </header>
  );
};

export default header;
