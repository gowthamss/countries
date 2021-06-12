import React from "react";
import "./main.styles.scss";

import SearchAndFilter from "../search-and-filter/search-and-filter.component";
import Countries from "../countries/countries.component";
import { fetchCountries } from "../../redux/countries-reducer/countries.actions";

import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import CountryPage from "../../pages/country-page/country-page.component";

class Main extends React.Component {
    componentDidMount() {
        this.props.onRequestCountries();
    }

    render() {
        return (
            <div className="main">
                <SearchAndFilter />
                <Countries />
            </div>
        );
    }
}

const mapStateToDispatch = (dispatch) => ({
    onRequestCountries: () => dispatch(fetchCountries()),
});

export default connect(null, mapStateToDispatch)(Main);
