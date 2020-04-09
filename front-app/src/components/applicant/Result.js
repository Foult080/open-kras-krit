import React, { Fragment } from "react";

import balloon from "./balloon.png";
const Result = ({ ball }) => {
  return ball >= 3 ? (
      <Fragment>
<div className="results">
        <span>
          <i className="fas fa-award medal"></i>
        </span>
        <h1 className="res-title">
          <i className="fas fa-star res-icon"></i>Поздравляем! Вы набрали:{ball} бал(-ов).
          <i className="fas fa-star res-icon"></i>
        </h1>
        <h3 className="res-good">
          Мы рекомендуем вам подать документы в наш колледж
          <i className="fas fa-user-graduate grad-icon"></i>
        </h3>
        <img className="results" alt="congratz" src={balloon} />
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div className="results2">
        <span>
        <i className="far fa-frown sad"></i>
        </span>
        <h1 className="res-bad">
         Сожалеем. Вы набрали:{ball} бал(-ов).
        </h1>
        <h3 className="res-bad">
          Мы рекомендуем вам выбрать другую специальность для поступления
        </h3>
      </div>
    </Fragment>
  );
};

export default Result;
