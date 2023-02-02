import "./brands.css";
import { google, dropbox, shopify, slack, atlassian } from "./imports";
const Brands = () => (
  <div className="brands section__padding-x">
    <img src={google} alt="google" />
    <img src={slack} alt="slack" />
    <img src={atlassian} alt="atlassian" />
    <img src={dropbox} alt="dropbox" />
    <img src={shopify} alt="shopify" />
  </div>
);

export default Brands;
