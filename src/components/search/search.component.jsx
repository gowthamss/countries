import React from "react";
import "./search.styles.scss";

import { selectDarkMode } from "../../redux/countries-reducer/countries.selector";
import { setSearchField } from "../../redux/countries-reducer/countries.actions";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const SearchBox = ({ darkMode, onSearchChange }) => (
    <div className="search-box">
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
