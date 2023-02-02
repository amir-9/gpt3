import "./feature.css";

const Feature = ({ header, description, className }) => (
  <div className={`feature ${className === undefined ? "" : className}`}>
    <div className="feature__header">
      <span className="feature__border " />
      <h4>{header}</h4>
    </div>
    <div className="feature__description-container">
      <p className="feature__description-paragraph">{description}</p>
    </div>
  </div>
);
export default Feature;
