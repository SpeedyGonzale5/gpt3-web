import React from 'react'
import "./article.css";

const Article = ({imgUrl, date, title}) => {
  return (
    <div className="gpt3__blog-container-article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
    </div>
  )
}

export default Article;
