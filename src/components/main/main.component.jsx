import React from "react";
import "./main.styles.scss";

import SearchAndFilter from "../search-and-filter/search-and-filter.component";
import Countries from "../countries/countries.component";

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            countries: [],
        };
    }

    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then((res) => res.json())
            .then((data) => {
                this.setState({ countries: data.slice(0, 4) });
                console.log(
                    this.state.countries.filter((country, index) => index < 4)
                );
            });
    }

    render() {
        const { countries } = this.state;
        return (
            <div className="main">
                <SearchAndFilter darkMode={this.props.darkMode} />
                <Countries
                    countries={countries}
                    darkMode={this.props.darkMode}
                />
            </div>
        );
    }
}

export default Main;
