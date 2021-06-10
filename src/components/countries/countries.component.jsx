import React from "react";
import CountriesList from "../countries-list/countries-list.component";
import "./countries.styles.scss";

const Countries = ({ countries, darkMode }) => (
    <div className="countries">
        <CountriesList countries={countries} darkMode={darkMode} />
    </div>
);

export default Countries;
