import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import Spinner from "../Layout/spinner";
import NewsItem from "../News/NewsItem";
import { getLastNews } from "../../actions/news";

const Landing = ({ getLastNews, news: { posts, loading } }) => {
  useEffect(() => {
    getLastNews();
  }, [getLastNews]);

  return (
    <Fragment>
      <Carousel className="col-lg-12 col-xs-12 col-md-12 col-sm-12 my-carousel d-flex align-items-stretch">
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            width="1900"
            height="800"
            src={img2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>
              КГБПОУ «Красноярский колледж радиоэлектроники и информационных
              технологий»
            </h3>
            <p>Проспект Свободный 67.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            width="1900"
            height="800"
            src={img1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>
              КГБПОУ «Красноярский колледж радиоэлектроники и информационных
              технологий»
            </h3>
            <p>Красноярский рабочий 156.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              title="video1"
              width="1900"
              height="800"
              src="https://www.youtube.com/embed/2kHxxUBGr8Y"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope;"
              allowFullScreen
            ></iframe>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="col-lg-10 mx-auto ml-auto">
        <hr />
        <h2 className="my-4 card-title">Информационные ресурсы:</h2>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-stretch">
            <div className="card cards len-card">
              <h4 className="card-header bg-success text-white">
                ККРИТ Хакатон
              </h4>
              <div className="card-body">
                <p className="card-text">
                  Конкурс профессионального мастерства с возможностью начала
                  крупного стартапа. Собери свою команду и получи доступ к
                  кейсовым заданиям. Учавствуй и займи место среди лидеров.
                </p>
                <br />
                <Link to="/hack" className="btn btn-success">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-stretch">
            <div className="card cards len-card">
              <h4 className="card-header bg-primary text-white">
                Работа ККРИТ
              </h4>
              <div className="card-body">
                <p className="card-text">
                  Построй карьеру вместе с нами! Множество работодателей уже
                  здесь. Подай резюме, изучай вакансии и требования
                  работодателей, учавствуй в мастер классах и встречах.
                </p>
                <br />
                <Link to="/employers" className="btn btn-primary">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-stretch">
            <div className="card cards len-card">
              <h4 className="card-header bg-dark text-white">KRIT WSR</h4>
              <div className="card-body">
                <p className="card-text">
                  Хочешь Стать профессионалом? - легко! Большой круг экспертов,
                  множество направлений. Выбирай компетенцию, решай задачи,
                  готовься к чемпионату и побеждай вместе с нами.
                </p>
                <br />
                <Link to="/wsr" className="btn btn-dark">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </div>
        {loading || posts === null ? (
          <Spinner />
        ) : (
          <Fragment>
            <div className="news my-4">
              <h2 className="card-title">Новости</h2>
              <hr />
              <div className="posts">
                {posts.map((post) => (
                  <NewsItem key={post._id} post={post} />
                ))}
              </div>
              <div className="big-butt my-4">
                <Link to="/news" className="btn btn-info my-butt">
                  Еще новости
                </Link>
              </div>
            </div>
          </Fragment>
        )}
        <div className="someDiv" />
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  getLastNews: PropTypes.func.isRequired,
  news: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  news: state.news,
});

export default connect(mapStateToProps, { getLastNews })(Landing);
