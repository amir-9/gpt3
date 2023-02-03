import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
const Blog = () => (
  <section className="blog section__padding-x">
    <h2 className="blog__header text-gradient">
      A lot is happening, We are blogging about it.
    </h2>
    <div className="blog__content">
      <div className="blog__row-1">
        <Article
          image={blog01}
          header="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
          className="blog-content_groupA"
        />
      </div>
      <div className="blog__row-2">
        <Article
          image={blog02}
          header="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
          className="blog-content_groupB"
        />
        <Article
          image={blog03}
          header="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
          className="blog-content_groupB"
        />
        <Article
          image={blog04}
          header="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
          className="blog-content_groupB"
        />
        <Article
          image={blog05}
          header="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
          className="blog-content_groupB"
        />
      </div>
    </div>
  </section>
);
export default Blog;
