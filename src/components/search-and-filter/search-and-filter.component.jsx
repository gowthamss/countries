import React from "react";
import "./search-and-filter.styles.scss";

import SearchBox from "../search/search.component";
import FilterCoutnries from "../filter/filter.component";

const SearchAndFilter = () => (
    <div className="search-and-filter">
        <SearchBox />
        {/*<FilterCoutnries />*/}
    </div>
);

export default SearchAndFilter;
