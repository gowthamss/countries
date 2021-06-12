import React from "react";
import "./country.styles.scss";

import { selectDarkMode } from "../../redux/countries-reducer/countries.selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter, Link } from "react-router-dom";

const Country = ({ country, darkMode, id, match, history }) => {
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

const mapStateToProps = createStructuredSelector({
    darkMode: selectDarkMode,
});

export default withRouter(connect(mapStateToProps)(Country));
