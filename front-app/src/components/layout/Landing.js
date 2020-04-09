import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1900/700?text=Third slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1900/700?text=Third slide&bg=282c34"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1900/700?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <hr />
        <h2 className="my-4 card-title">Информационные ресурсы:</h2>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card ">
              <h4 className="card-header bg-success text-white">
                Абитуриент ККРИТ
              </h4>
              <div className="card-body">
                <p className="card-text">
                  Получить профессию - доступно, легко, интересно.
                </p>
                <Link to="#" className="btn btn-success">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card ">
              <h4 className="card-header bg-primary text-white">
                Работа ККРИТ
              </h4>
              <div className="card-body">
                <p className="card-text">
                  Построй карьеру вместе с нами! Более N работодателей уже
                  здесь.
                </p>
                <Link to="#" className="btn btn-primary">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card ">
              <h4 className="card-header bg-dark text-white">KRIT WSR</h4>
              <div className="card-body">
                <p className="card-text">
                  Хочешь Стать профессионалом? - легко!
                </p>
                <Link to="#" className="btn btn-dark">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/**
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
