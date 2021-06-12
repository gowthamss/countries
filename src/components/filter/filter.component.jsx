import React from "react";
import "./filter.styles.scss";

import {
    selectDarkMode,
    selectRegions,
} from "../../redux/countries-reducer/countries.selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const FilterCoutnries = ({ darkMode, regions, onFilterCountries }) => (
    <div className="filter-countries">
        <select
            name="continents"
            id="filter-dropdown"
            className={`${
                darkMode ? "filter-dropdown-dark" : "filter-dropdown-light"
            } filter-dropdown`}
            onChange={onFilterCountries}
        >
            {regions.map((region, index) => (
                <option key={index}>{region}</option>
            ))}
        </select>
    </div>
);

const mapStateToProps = createStructuredSelector({
    darkMode: selectDarkMode,
    regions: selectRegions,
});

export default connect(mapStateToProps)(FilterCoutnries);
