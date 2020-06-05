import React from "react";
import PropTypes from "prop-types";

const AppItem = ({ item: { spec, rating } }) => (
  <tr>
    <th scope="row">
      {spec.num}
    </th>
    <td>{spec.spec} - {spec.branch} - {spec.base}</td>
    <td>{rating}</td>
  </tr>
);

AppItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default AppItem;

