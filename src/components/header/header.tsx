import React from "react";
import "./header.css";

export const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <li><a><img src="../../images/logo.png" alt="blog's logo"/></a></li>
                    <li><a>Recent Articles</a></li>
                    <li><a>About</a></li>
                    <li><a>Log in arrow</a></li>
                </nav>
            </div>
        </header>
    );
}