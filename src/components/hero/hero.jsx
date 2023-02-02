import "./hero.css";
import { Button } from "../";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";

const Hero = () => (
  <section className="header__hero section__padding">
    <div className="header__desc">
      <h1 className="header__heading text-gradient">
        Let’s Build Something amazing with GPT-3 OpenAI
      </h1>
      <p className="header__text">
        Yet bed any for traveling assistance indulgence unpleasing. Not thoughts
        all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>
      <form
        className="header__form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" className="header__input" />
        <Button text="Get Started" className="header__form__button" />
      </form>
      <div className="header__people">
        <img className="header__people-image" src={people} alt="people" />
        <p className="header__people-text">
          1,600 people requested access a visit in last 24 hours
        </p>
      </div>
    </div>
    <div className="header__img">
      <img src={ai} alt="Ai" />
    </div>
    <div></div>
  </section>
);

export default Hero;
