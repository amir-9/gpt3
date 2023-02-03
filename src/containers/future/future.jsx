import "./future.css";
import { Feature } from "./../../components";

const Future = () => (
  <section className="future section__padding-x">
    <div className="future__gradient"/>
    <div className="future__header-container">
      <h3 className="future__header-text text-gradient">
        The Future is Now and You Just Need To Realize It. Step into Future
        Today & Make it Happen.
      </h3>
      <a href="#" className="future__cta">
        Request Early Access to Get Started
      </a>
    </div>
    <div className="future__content-container">
      <Feature
        header="Improving end distrusts instantly "
        description="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
        className="future__content-item"
      />
      <Feature
        header="Become the tended active"
        description="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
        className="future__content-item"
      />
      <Feature
        header="Message or am nothing"
        description="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
        className="future__content-item"
      />
      <Feature
        header="Really boy law county"
        description="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
        className="future__content-item"
      />
    </div>
  </section>
);

export default Future;
