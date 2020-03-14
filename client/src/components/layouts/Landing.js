import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Events from '../event/events';
import Employers from '../employer/employers'

const Landing = () => {
    return(
      <Fragment>
        <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Работа ККРИТ</h1>
          <p className="lead text-muted">
            Открытая площадка для работодателей и студентов ККРИТ.
          </p>
          <p>
            <Link to="/register" className="btn btn-primary my-2">Зарегистрироваться</Link>
            <Link to="/login" className="btn btn-secondary my-2">Войти</Link>
          </p>
        </div>
      </section>
      <Events />
      <Employers />
      </Fragment>
    )
};

export default Landing;