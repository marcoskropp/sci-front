import React, { useState, useEffect } from "react";
import {
  Checkbox,
  TableRow as TableRowMui,
  TableCell
} from "@material-ui/core";

export default function TableRow(props) {
  const { id, title, description, place, startDate, endDate, subscribed, checkWorkshop } = props;

  const [checked, setChecked] = useState(subscribed);

  useEffect(() => {
    checkWorkshop(id, checked)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked])

  const handleCheck = () => {
    setChecked(!checked)
  };

  return (
    <TableRowMui>
      <TableCell>
        <Checkbox name={title} onClick={handleCheck} checked={checked} />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{place}</TableCell>
      <TableCell>{new Date(startDate).toLocaleDateString()}</TableCell>
      <TableCell>{new Date(endDate).toLocaleDateString()}</TableCell>
    </TableRowMui>
  );
}
