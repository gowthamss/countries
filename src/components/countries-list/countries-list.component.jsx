import React from "react";
import "./countries-list.styles.scss";

import Country from "../country/country.component";
import { selectCountriesOnSearchAndFilter } from "../../redux/countries-reducer/countries.selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const CountriesList = ({ filteredCountries }) => {
    return (
        <div className="countries-list">
            {filteredCountries.map((country, index) => (
                <Country country={country} key={index} id={index + 1} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    filteredCountries: selectCountriesOnSearchAndFilter,
});

export default connect(mapStateToProps)(CountriesList);
