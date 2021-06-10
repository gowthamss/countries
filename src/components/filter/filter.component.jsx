import React from "react";
import "./filter.styles.scss";

import FilterOptions from "../filter-options/filter-options.component";

const FilterCoutnries = ({ darkMode }) => (
    <div className="filter-countries">
        <select
            name="continents"
            id="filter-dropdown"
            className={`${
                darkMode ? "filter-dropdown-dark" : "filter-dropdown-light"
            } filter-dropdown`}
        >
            <option>Africa</option>
            <option>America</option>
            <option>Astralia</option>
            <option>Asia</option>
            <option>Europe</option>
        </select>
    </div>
);

export default FilterCoutnries;
