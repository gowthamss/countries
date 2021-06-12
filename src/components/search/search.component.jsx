import React from "react";
import "./search.styles.scss";

import { selectDarkMode } from "../../redux/countries-reducer/countries.selector";
import { setSearchField } from "../../redux/countries-reducer/countries.actions";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = ({ darkMode, onSearchChange }) => (
    <div
        className={`${
            darkMode ? "search-box-dark" : "search-box-light"
        } search-box`}
    >
        <div
            className={`${
                darkMode ? "search-icon-dark" : "search-icon-light"
            } search-icon`}
        >
            <FontAwesomeIcon
                icon={["fas", "search"]}
                className={`${darkMode ? "fs-icon-dark" : "fs-icon-light"}`}
            />
        </div>
        <input
            className={`${darkMode ? "search-dark" : "search-light"} search`}
            type="search"
            id="search"
            placeholder="Search for a country..."
            onChange={onSearchChange}
        />
    </div>
);

const mapStateToProps = createStructuredSelector({
    darkMode: selectDarkMode,
});

const mapStateToDispatch = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
});

export default connect(mapStateToProps, mapStateToDispatch)(SearchBox);

// style={{ position: "absolute", left: "10px", content: "\f002" }}
