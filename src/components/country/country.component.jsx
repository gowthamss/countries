import React from "react";
import "./country.styles.scss";

const Country = ({ country, darkMode }) => {
    const { flag, name, population, region, capital } = country;
    return (
        <div
            className={`${darkMode ? "country-dark" : "country-light"} country`}
        >
            <div className="flag-container">
                <img src={flag} alt="country flag" className="country-flag" />
            </div>
            <div className="country-details-container">
                <h2 className="country-name">{name}</h2>
                <p className="country-population">
                    Populaton: <span>{population}</span>
                </p>
                <p className="country-region">
                    Region: <span>{region}</span>
                </p>
                <p className="country-capital">
                    Capital: <span>{capital}</span>
                </p>
            </div>
        </div>
    );
};

export default Country;
