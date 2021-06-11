import React from "react";
import "./search.styles.scss";

import { selectDarkMode } from "../../redux/countries-reducer/countries.selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const SearchBox = ({ darkMode }) => (
    <div className="search-box">
        <input
            className={`${darkMode ? "search-dark" : "search-light"} search`}
            type="search"
            id="search"
            placeholder="Search for a country..."
        />
    </div>
);

const mapStateToProps = createStructuredSelector({
    darkMode: selectDarkMode,
});

export default connect(mapStateToProps)(SearchBox);
