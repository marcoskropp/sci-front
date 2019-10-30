import React, { useState, useEffect } from "react";

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