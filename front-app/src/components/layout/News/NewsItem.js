import React, { Fragment } from "react";
import ReactHtmlParser from "react-html-parser";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const NewsItem = ({ post: { _id, title, desc, date } }) => {
  return (
    <Fragment>
      <div className="card news-card">
        <h5 className="card-header">
          <Moment format="YYYY/MM/DD">{date}</Moment>
        </h5>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-text">{ReactHtmlParser(desc.slice(0,200)+'...')}</div>
          <Link to={`/news/${_id}`} className="btn btn-primary">
            Подробнее
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NewsItem;
