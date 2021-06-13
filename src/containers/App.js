import React from "react";
import "./App.scss";
import Header from "../components/header/header.component";
import Main from "../components/main/main.component";
import { selectDarkMode } from "../redux/countries-reducer/countries.selector";
import CountryDetails from "../pages/country-details/country-details.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route } from "react-router";

const App = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? "App-dark" : "App-light"} App`}>
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route
                    exact
                    path="/countries/:name"
                    component={CountryDetails}
                />
            </Switch>
            <div style={{ color: "salmon", fontSize: "12px" }}>
                Developed by{" "}
                <strong>
                    <em style={{ color: "teal", fontSize: "14px" }}>Gowtham</em>
                </strong>
            </div>
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
