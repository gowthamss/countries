import React from "react";
import "./header.styles.scss";

const Header = () => (
    <section className="header">
        <h2 className="logo">Where in the world!</h2>
        <div className="theme">
            <img src="" alt="light mode" />
            <span className="theme-mode">Dark Mode</span>
        </div>
    </section>
);

export default Header;

// <i class="fas fa-moon"></i>
// <i class="far fa-moon"></i>
