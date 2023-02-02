import "./whatIsGpt.css";
import { Feature } from "../../components";

const WhatIsGpt = () => (
  <section className="wgpt section__padding-x">
    <div className="wgpt__content-container">
      <div className="wgpt__bg-gradient-1" />
      <div className="wgpt__bg-gradient-2" />
      <Feature
        className="wgpt__first-description"
        header="What is GPT-3"
        description={
          " We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        }
      />
      <div className="wgpt__header-container">
        <h2 className="wgpt__header text-gradient">
          The possibilities are beyond your imagination
        </h2>
        <a className="wgpt__link" href="#">
          Explore The Library
        </a>
      </div>
      <div className="wgpt__descriptions">
        <Feature
          className="wgpt__description-item"
          header="ChatBots"
          description="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          className="wgpt__description-item"
          header="KnowledgeBase "
          description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          className="wgpt__description-item"
          header="Education"
          description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  </section>
);

export default WhatIsGpt;
