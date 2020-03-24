import React from "react";
import PropTypes from "prop-types";

const TestItem = ({ item: { _id, question, answers } }) => {
<h4>{question}</h4>
{answers.map(el => (
    <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name={_id}
      value={el.vars}
      onChange={e => onChange(e)}
    />
    <label className="form-check-label">{el.vars}</label>
  </div>
))}
    
};

TestItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default TestItem;

