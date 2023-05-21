import React from 'react';
import useNumberFormat from "../../hooks/useNumberFormat";

function InflationCard(props) {
    return (
        <div className="inflation-card">
            <h1 className="inflation-title">{props.country}</h1>
            <ul className="inflation-list">
                <li>
                    <h1>Monthly:</h1>
                    <h3>{useNumberFormat(props.month)}</h3>
                </li>
                <li>
                    <h1>Yearly:</h1>
                    <h3>{useNumberFormat(props.year)}</h3>
                </li>
                <li>
                    <h1>Type:</h1>
                    <h3>{props.type}</h3>
                </li>
                <li>
                    <h1>Period:</h1>
                    <h3>{props.period}</h3>
                </li>
            </ul>
        </div>
    );
}

export default InflationCard;