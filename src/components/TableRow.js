import React, { useState } from "react";

export default function TableRow(props) {
    const { title, description, place, startDate, endDate, subscribed } = props;

    const [checked, setChecked] = useState(subscribed);

    const handleCheck = () => {
        setChecked(!checked)
    };

    return (
        <tr>
            <td><input type="checkbox" name={title} onClick={handleCheck} value={checked} /></td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{place}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
        </tr>
    );
}