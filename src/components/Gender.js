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
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    </div>
    );
}

export default Gender;