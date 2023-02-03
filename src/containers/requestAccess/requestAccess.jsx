import "./requestAccess.css";
import girlImage from "../../assets/possibility.png";

const RequestAccess = () => (
  <section className="access section__padding-x">
    <div className="access__image">
      <img src={girlImage} alt="girl-with-headset" />
    </div>
    <div className="access__content">
      <a href="#" className="access__cta-1">
        Request Early Access to Get Started
      </a>
      <h3 className="access__header text-gradient">
        The possibilities are beyond your imagination
      </h3>
      <p className="access__content-text">
        Yet bed any for traveling assistance indulgence unpleasing. Not thoughts
        all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>
      <a href="#" className="access__cta-2">
        Request Early Access to Get Started
      </a>
    </div>
  </section>
);

export default RequestAccess;
