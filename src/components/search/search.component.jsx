import React from "react";
import "./search.styles.scss";

const SearchBox = ({ darkmode }) => (
    <div className="search-box">
        <input
            className={`${darkmode ? "search-dark" : "search-light"} search`}
            type="search"
            id="search"
            placeholder="Search for a country..."
        />
    </div>
);

export default SearchBox;
