import React from "react";
import "./header.styles.scss";

import { selectDarkMode } from "../../redux/countries-reducer/countries.selector";
import { toggleDarkMode } from "../../redux/countries-reducer/countries.actions";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const Header = ({ darkMode, toggleDarkMode }) => (
    <section className={`${darkMode ? "header-dark" : "header-light"} header`}>
        <h2 className="logo">Where in the world!</h2>
        <div className="theme" onClick={toggleDarkMode}>
            {darkMode ? (
                <i className="far fa-moon"></i>
            ) : (
                <i className="fas fa-moon"></i>
            )}
            <span className="theme-mode">Dark Mode</span>
        </div>
    </section>
);

const mapStateToProps = createStructuredSelector({
    darkMode: selectDarkMode,
});

const mapStateToDispatch = (dispatch) => ({
    toggleDarkMode: () => dispatch(toggleDarkMode()),
});

export default connect(mapStateToProps, mapStateToDispatch)(Header);

// <i class="fas fa-moon"></i>
// <i class="far fa-moon"></i>
