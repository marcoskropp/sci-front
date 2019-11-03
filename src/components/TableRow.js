import React from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  TableRow as TableRowMui,
  TableCell
} from '@material-ui/core';

function TableRow(props) {
  const {
    title,
    description,
    place,
    startDate,
    endDate,
    subscribed,
    checkWorkshop
  } = props;

  return (
    <TableRowMui>
      <TableCell>
        <Checkbox name={title} onClick={checkWorkshop} checked={subscribed} />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{place}</TableCell>
      <TableCell>{new Date(startDate).toLocaleDateString()}</TableCell>
      <TableCell>{new Date(endDate).toLocaleDateString()}</TableCell>
    </TableRowMui>
  );
}

TableRow.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  place: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  subscribed: PropTypes.bool,
  checkWorkshop: PropTypes.func
};

export default TableRow;
