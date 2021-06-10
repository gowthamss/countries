import React from "react";
import "./countries-list.styles.scss";

import Country from "../country/country.component";

const CountriesList = ({ countries, darkMode }) => (
    <div className="countries-list">
        {countries.map((country, index) => (
            <Country country={country} key={index} darkMode={darkMode} />
        ))}
    </div>
);

export default CountriesList;
