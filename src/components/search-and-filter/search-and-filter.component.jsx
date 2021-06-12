import React from "react";
import "./search-and-filter.styles.scss";

import SearchBox from "../search/search.component";
import FilterCoutnries from "../filter/filter.component";
import { setFilterOption } from "../../redux/countries-reducer/countries.actions";

import { connect } from "react-redux";

const SearchAndFilter = ({ onFilterCountries }) => (
    <div className="search-and-filter">
        <SearchBox />
        <FilterCoutnries onFilterCountries={onFilterCountries} />
    </div>
);

const mapStateToDispatch = (dispatch) => ({
    onFilterCountries: (event) => dispatch(setFilterOption(event.target.value)),
});

export default connect(null, mapStateToDispatch)(SearchAndFilter);
