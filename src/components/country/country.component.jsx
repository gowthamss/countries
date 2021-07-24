import React from "react";
import "./country.styles.scss";

import { selectDarkMode } from "../../redux/countries-reducer/countries.selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

const Country = ({ country, darkMode }) => {
    const { flag, name, population, region, capital } = country;
    return (
        <div
            className={`${darkMode ? "country-dark" : "country-light"} country`}
        >
        <div className="flag-container">
        <Link to={`/countries/${name} `}>
                    <img
                        src={flag}
                        alt="country flag"
                        className="country-flag"
                    />
                </Link>
            </div>
            <div className="country-details-container">
            <Link to={`/countries/${name} `}>
                <h2 className="country-name">{name}</h2>
                </Link>
                <p className="country-population detail">
                    Populaton: <span>{population}</span>
                </p>
                <p className="country-region detail">
                    Region: <span>{region}</span>
                </p>
                <p className="country-capital detail">
                    Capital: <span>{capital}</span>
                </p>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    darkMode: selectDarkMode,
});

export default connect(mapStateToProps)(Country);
