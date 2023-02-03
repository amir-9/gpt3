import "./article.css";
const Article = ({ className, date, header, image }) => (
  <div className={`article ${className === undefined ? "" : className}`}>
    <div className="article-image-container">
      <img src={image} alt="article-image" className="article__image" />
    </div>
    <div className="article__content">
      <div className="article__header-container">
        <p className="article__date">{date}</p>
        <h4 className="article__header">{header}</h4>
      </div>
      <a href="#" className="article__link">
        Read Full Article
      </a>
    </div>
  </div>
);

export default Article;
