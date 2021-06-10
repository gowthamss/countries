import React from "react";
import "./header.styles.scss";

const Header = ({ darkMode, handleDarkMode }) => (
    <section className={`${darkMode ? "header-dark" : "header-light"} header`}>
        <h2 className="logo">Where in the world!</h2>
        <div className="theme" onClick={handleDarkMode}>
            {darkMode ? (
                <i className="far fa-moon"></i>
            ) : (
                <i className="fas fa-moon"></i>
            )}
            <span className="theme-mode">Dark Mode</span>
        </div>
    </section>
);

export default Header;

// <i class="fas fa-moon"></i>
// <i class="far fa-moon"></i>
