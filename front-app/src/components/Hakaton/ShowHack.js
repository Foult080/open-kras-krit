import React, { Fragment } from "react";
import Moment from "react-moment";

const showHack = ({ hack: { date, name, cases } }) => {
  return (
    <Fragment>
      <h4 className="news-title">Ближайший хакатон:</h4>
      <hr />
      <div>
        <div className="card news-card">
          <h5 className="card-header">
            <Moment format="YYYY/MM/DD">{date}</Moment>
          </h5>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="card-text text-justify">
              <ul>
                {cases.map((el) => (
                  <li key={el._id}>
                    <p>
                      {el.name}: {el.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default showHack;
