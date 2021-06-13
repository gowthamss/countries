import React from "react";
import "./country-details.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
    selectDarkMode,
    selectCountries,
} from "../../redux/countries-reducer/countries.selector";
import { emptySearchField } from "../../redux/countries-reducer/countries.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CountryDeatils = ({
    match,
    history,
    countries,
    darkMode,
    emptySearchField,
}) => {
    const country = countries.find(
        (country) => country.name === match.params.name.trim()
    );
    const {
        flag,
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
    } = country;

    const singleLanguages = languages.map((language) => language.name);
    const individualCurrencies = currencies.map((currency) => currency.name);
    return (
        <section className="country-page">
            <div className="back-btn-container">
                <button
                    className={`${
                        darkMode ? "back-btn-dark" : "back-btn-light"
                    } back-btn`}
                    onClick={() => {
                        emptySearchField();
                        history.push("/");
                    }}
                >
                    {darkMode ? (
                        <FontAwesomeIcon
                            icon={["fas", "long-arrow-alt-left"]}
                            style={{ color: "white" }}
                            className="back-icon"
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={["fas", "long-arrow-alt-left"]}
                            className="back-icon"
                        />
                    )}
                    Back
                </button>
            </div>
            <section
                className={`${
                    darkMode ? "country-dark" : "country-light"
                } country country-detail`}
            >
                <img src={flag} alt="country flag" className="country-flag" />
                <section className="details-section">
                    <div className="container1">
                        <div className="country-details-container">
                            <h2 className="country-name">{name}</h2>
                            <p className="country-native-name detail">
                                Native Name: <span>{nativeName}</span>
                            </p>
                            <p className="country-population detail">
                                Populaton: <span>{population}</span>
                            </p>
                            <p className="country-region detail">
                                Region: <span>{region}</span>
                            </p>
                            <p className="country-capital detail">
                                Capital: <span>{capital}</span>
                            </p>
                            <p className="country-subregion detail">
                                Sub Region: <span>{subregion}</span>
                            </p>
                        </div>

                        <div className="country-details-container">
                            <p className="country-domain detail">
                                Top Level Domain: <span>{topLevelDomain}</span>
                            </p>
                            <p className="country-currencies detail">
                                Currencies:{" "}
                                <span>{individualCurrencies.join(", ")}</span>
                            </p>
                            <p className="country-languages detail">
                                Languages:{" "}
                                <span>{singleLanguages.join(", ")}</span>
                            </p>
                        </div>
                    </div>
                    <div className="container2">
                        <div className="country-details-container">
                            <h3
                                className={`${
                                    darkMode
                                        ? "country-border-text-dark"
                                        : "country-border-text-light"
                                } country-border-text`}
                            >
                                Border Countries:{" "}
                            </h3>
                            <div className="country-borders">
                                {borders.map((border, index) => (
                                    <span
                                        className={`${
                                            darkMode
                                                ? "country-border-dark"
                                                : "country-border-light"
                                        } country-border`}
                                        key={index}
                                    >
                                        {border}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
};

const mapStateToProps = createStructuredSelector({
    countries: selectCountries,
    darkMode: selectDarkMode,
});

const matStateToDispatch = (dispatch) => ({
    emptySearchField: () => dispatch(emptySearchField()),
});

export default connect(mapStateToProps, matStateToDispatch)(CountryDeatils);
