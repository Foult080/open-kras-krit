import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AppLanding = () => {
  return (
    <Fragment>
      <div className="container">
        <h1 class="mt-4 mb-3">Абитуриент ККРИТ</h1>

        <div class="row">
          <div class="col-md-8">
            <img class="img-fluid" src="http://placehold.it/750x500" alt="" />
          </div>

          <div class="col-md-4">
            <h3 class="my-3">Project Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae. Sed
              dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris
              ultricies, justo eu convallis placerat, felis enim.
            </p>
            <h3 class="my-3">Наши специальности</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Dolor Sit Amet</li>
              <li>Consectetur</li>
              <li>Adipiscing Elit</li>
            </ul>
            <Link to="/applicant/test">
              <button className="btn btn-primary">
                <i className="fas fa-file-alt"></i>Тест на профпригодность
              </button>
            </Link>
          </div>
        </div>

        <div className="content">
          <h3 className="my-4 card-title">О нас</h3>
          <hr />
          <p>
            В современном мире сложно представить профессию, не связанную с
            применением информационных технологий. Умение обращаться с ПК
            требуется повсеместно.
          </p>
          <h4 class="my-3">В нашем колледже вы сможете:</h4>
          <ul>
            <li>
              научиться свободно владеть современным и востребованным прикладным
              программным обеспечением;
            </li>
            <li>самостоятельно разрабатывать ПО;</li>
            <li>
              проводить настройку и конфигурирование ПК под требования
              заказчика;
            </li>
            <li>
              осуществлять организацию различных видов деятельности с
              применением специализированного программного обеспечения;
            </li>
            <li>
              осуществлять техническое обслуживание и ремонт компьютерных систем
              и комплексов;
            </li>
            <li>
              разрабатывать различные электронные устройства на базе
              микроконтроллеров.
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default AppLanding;
