import React, { useState } from "react";
import {
  Checkbox,
  TableRow as TableRowMui,
  TableCell
} from "@material-ui/core";

export default function TableRow(props) {
  const { title, description, place, startDate, endDate, subscribed } = props;

  const [checked, setChecked] = useState(subscribed);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <TableRowMui>
      <TableCell>
        <Checkbox name={title} onClick={handleCheck} value={checked} />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{place}</TableCell>
      <TableCell>{new Date(startDate).toLocaleDateString()}</TableCell>
      <TableCell>{new Date(endDate).toLocaleDateString()}</TableCell>
    </TableRowMui>
  );
}
