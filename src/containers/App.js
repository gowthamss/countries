import React from "react";
import "./App.scss";
import Header from "../components/header/header.component";
import Countries from "../components/countries/countries.component";
import Main from "../components/main/main.component";

import { Route, Switch } from "react-router-dom";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            darkMode: false,
        };
    }

    handleDarkMode = () => {
        this.setState({ darkMode: !this.state.darkMode });
    };

    render() {
        const { darkMode } = this.state;
        return (
            <div className={`${darkMode ? "App-dark" : "App-light"} App`}>
                <Header
                    darkMode={darkMode}
                    handleDarkMode={this.handleDarkMode}
                />
                <Main darkMode={darkMode} />
            </div>
        );
    }
}

export default App;

// <Switch>
//                     <Route path="/" component={Main} darkMode={darkMode} />
//                 </Switch>

// https://restcountries.eu/rest/v2/all
