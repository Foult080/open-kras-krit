import React, { Fragment } from "react";
import Moment from "react-moment";

const HackItem = ({ hack: { name, cases, date } }) => {
  return (
    <Fragment>
      <div className="card my-2">
        <h5 className="card-header">
          {name} - <Moment format="YYYY/MM/DD">{date}</Moment>
        </h5>
        <div className="card-body">
          <h5 className="card-title">Кейсы хакатона:</h5>
          <div className="card-text text-justify">
            <ul>
              {cases.map((el) => (
                <li key={el._id}>
                  <p>
                    {el.name} : {el.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HackItem;
