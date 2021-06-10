import React from "react";
import "./search-and-filter.styles.scss";

import SearchBox from "../search/search.component";
import FilterCoutnries from "../filter/filter.component";

const SearchAndFilter = ({ darkMode }) => (
    <div className="search-and-filter">
        <SearchBox darkMode={darkMode} />
        <FilterCoutnries darkMode={darkMode} />
    </div>
);

export default SearchAndFilter;
