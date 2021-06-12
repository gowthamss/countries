import React from "react";
import "./App.scss";
import Header from "../components/header/header.component";
import Main from "../components/main/main.component";
import { selectDarkMode } from "../redux/countries-reducer/countries.selector";
import CountryPage from "../pages/country-page/country-page.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route } from "react-router-dom";
import Countries from "../components/countries/countries.component";

const App = ({ darkMode, match }) => {
    return (
        <div className={`${darkMode ? "App-dark" : "App-light"} App`}>
            <Header />
            <Main />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    darkMode: selectDarkMode,
});

export default connect(mapStateToProps)(App);

// <Switch>
//                     <Route path="/" component={Main} darkMode={darkMode} />
//                 </Switch>

// https://restcountries.eu/rest/v2/all
// <Switch>
//                 <Route path="/" component={Main} />
//                 <Route path={`/countries/:id`} component={CountryPage} />
//             </Switch>
