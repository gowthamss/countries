import React from "react";
import "./App.scss";
import Header from "../components/header/header.component";
import Countries from "../pages/countries.component";
import Main from "../components/main/main.component";

import { Route, Switch } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Main />
                <Switch>
                    <Route path="/" component={Countries} />
                </Switch>
            </div>
        );
    }
}

export default App;

// https://restcountries.eu/rest/v2/all
