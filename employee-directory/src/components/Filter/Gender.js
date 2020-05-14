import React from "react";

function Gender(props) {
    return (
        <div className="uk-flex uk-flex-middle">
        <div className="uk-margin-small-right">Filter: </div>
        <select 
            className="uk-select" 
            id="filter"
            onChange={props.handleFilterChange}
            name="filterOption"
            value={props.filterOption}
        >
            <option value="all">All</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
        </select>
    </div>
    );
}

export default Gender;