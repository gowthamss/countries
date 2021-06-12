import React from "react";
import "./countries-list.styles.scss";

import Country from "../country/country.component";
import {
    selectFilteredCountries,
    selectSearchText,
} from "../../redux/countries-reducer/countries.selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const CountriesList = ({ filteredCountries }) => {
    // const filteredCountries = countries.filter((country) =>
    //     country.name.toLowerCase().includes(searchText.toLowerCase())
    // );
    return (
        <div className="countries-list">
            {filteredCountries.map((country, index) => (
                <Country country={country} key={index} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    // searchText: selectSearchText,
    filteredCountries: selectFilteredCountries,
});

export default connect(mapStateToProps)(CountriesList);
