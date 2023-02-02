import "./hero.css";
import ai from "../../assets/ai.png";

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
      <div>
        <input type="text" />
      </div>
    </div>
    <div className="header__img">
      <img src={ai} alt="Ai" />
    </div>
    <div></div>
  </section>
);

export default Hero;
