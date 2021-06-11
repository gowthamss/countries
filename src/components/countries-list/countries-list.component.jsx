import React from "react";
import "./countries-list.styles.scss";

import Country from "../country/country.component";
import { selectCountries } from "../../redux/countries-reducer/countries.selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const CountriesList = ({ countries }) => (
    <div className="countries-list">
        {countries.map((country, index) => (
            <Country country={country} key={index} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    countries: selectCountries,
});

export default connect(mapStateToProps)(CountriesList);
