import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNews } from "../../actions/news";
import NewsItem from "./NewsItem";
import Spinner from "../layout/spinner";
import { Link } from "react-router-dom";

const News = ({ getNews, news: { posts, loading } }) => {
  useEffect(() => {
    getNews();
  }, [getNews]);

  console.log(posts);

  return loading || posts === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container col-lg-8 col-md-6 col-sm-4">
        <h1 className="news-title">Новости площадки</h1>
        <hr />
        <div className="posts">
          {posts.map((post) => (
            <NewsItem key={post._id} post={post} />
          ))}
        </div>

        <div className="news-buttons">
          <Link to="/" className="btn btn-success px-4">
            К главной странице
          </Link>
        </div>

        <div className="someDiv" />
      </div>
    </Fragment>
  );
};

News.propTypes = {
  getNews: PropTypes.func.isRequired,
  news: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  news: state.news,
});

export default connect(mapStateToProps, { getNews })(News);
