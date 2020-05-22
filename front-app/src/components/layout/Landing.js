import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";

const Landing = () => {
  return (
    <Fragment>
      <Carousel>
      <Carousel.Item className="img-fluid">
          <img
            className="d-block w-100"
            width="1900"
            height="800"
            src={img2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>КГБПОУ «Красноярский колледж радиоэлектроники и информационных технологий»</h3>
            <p>Проспект Свободный 67.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width="1900"
            height="800"
            src={img1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>КГБПОУ «Красноярский колледж радиоэлектроники и информационных технологий»</h3>
            <p>Красноярский рабочий 156.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            title="video1"
            width="1900"
            height="800"
            src="https://www.youtube.com/embed/2kHxxUBGr8Y"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <hr />
        <h2 className="my-4 card-title">Информационные ресурсы:</h2>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="card cards">
              <h4 className="card-header bg-success text-white">
                Абитуриент ККРИТ
              </h4>
              <div className="card-body">
                <p className="card-text">
                  Получить профессию - доступно, легко, интересно. В данном
                  разделе вы найдете информацию для абитуриентов, полезные
                  ссылки и тест на профпригодность.
                </p>
                <Link to="/applicant" className="btn btn-success">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="card cards">
              <h4 className="card-header bg-primary text-white">
                Работа ККРИТ
              </h4>
              <div className="card-body">
                <p className="card-text">
                  Построй карьеру вместе с нами! Более N работодателей уже
                  здесь. Подай резюме, изучай требования работодателей, и
                  учавствуй в мастер классах.
                </p>
                <br />
                <Link to="/employee" className="btn btn-primary">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="card cards">
              <h4 className="card-header bg-dark text-white">KRIT WSR</h4>
              <div className="card-body">
                <p className="card-text">
                  Хочешь Стать профессионалом? - легко! Большой круг экспертов,
                  множество направлений. Выбирай компетенцию, решай задачи,
                  готовься к чемпионату и побеждай вместе с нами.
                </p>
                <Link to="/wsr" className="btn btn-dark">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/**
        <hr />
        <h2 className="card-title">Новости</h2>
        <div className="news">
          <div className="card news-card text-center">
            <div className="card-header text-primary">2020-03-15</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
         */}
      </div>
    </Fragment>
  );
};

export default Landing;
