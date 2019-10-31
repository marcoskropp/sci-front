import React from "react";
import {
  Checkbox,
  TableRow as TableRowMui,
  TableCell
} from "@material-ui/core";

export default function TableRow(props) {
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
