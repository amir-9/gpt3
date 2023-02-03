import { Button } from "../index";
import "./CTA.css";
const CTA = () => (
  <div className="cta section__padding-x">
    <div className="cta__container">
      <div className="cta__content">
        <p className="cta__content-text">Request Early Access to Get Started</p>
        <h4 className="cta__content-header">
          Register today & start exploring the endless possiblities.
        </h4>
      </div>

      <Button text={"Get Started"} className="cta__button" />
    </div>
  </div>
);

export default CTA;
