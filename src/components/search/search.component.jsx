import React from "react";
import "./search.styles.scss";

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

export default SearchBox;
