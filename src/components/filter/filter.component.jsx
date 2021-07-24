import React from "react";
import "./filter.styles.scss";

import {
    selectDarkMode,
    selectRegions,
    selectFilterOption,
} from "../../redux/countries-reducer/countries.selector";
import { setFilterOption } from "../../redux/countries-reducer/countries.actions";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const FilterCoutnries = ({
    darkMode,
    regions,
    onFilterCountries,
    optionValue,
}) => (
    <div className="filter-countries">
        <select
            name="continents"
            id="filter-dropdown"
            className={`${
                darkMode ? "filter-dropdown-dark" : "filter-dropdown-light"
            } filter-dropdown`}
            onChange={onFilterCountries}
            value={optionValue}
            defaultValue={"Asia"}
        >
            {regions.map((region, index) => (
                <option
                    className={`${
                        darkMode ? "filter-option-dark" : "filter-option-light"
                    } filter-option`}
                    key={index}
                    value={region}
                >
                    {region}
                </option>
            ))}
        </select>
    </div>
);

const mapStateToProps = createStructuredSelector({
    darkMode: selectDarkMode,
    regions: selectRegions,
    optionValue: selectFilterOption,
});

const mapStateToDispatch = (dispatch) => ({
    onFilterCountries: (event) => dispatch(setFilterOption(event.target.value)),
});

export default connect(mapStateToProps, mapStateToDispatch)(FilterCoutnries);
