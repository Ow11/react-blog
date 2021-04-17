import React, {useContext, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import { loginArrow, arrowDown } from "../utils/svgs";
import "./header.css";


const User = (props: any) => {
    const { user } = props;
    console.log("User is - ");
    console.log(user);

    return (
        <>
            <Link to="/admin" className="color--black">My Articles</Link>
            <Link to="/new" className="new-article">Create Article</Link>
            <Link to="#">
            <span>
                { arrowDown }
                {
                    () => {
                        if (user.avatar) return <img src={URL.createObjectURL(user.avatar)} alt="avatar"/>;
                        return <img src="#" alt="avatar" />;
                    }
                }
            </span>
            </Link>
        </>
    );
}

export const Header = (props: any) => {
    const { user } = props;

    const UserLocal = (user) ? <User user={user} /> :
            <NavLink to="/login" className="link--blue" activeClassName="active-nav-link">Log in
                { loginArrow }
            </NavLink>

    return (
        <header>
            <div className="container">
                <nav>
                    <li><Link to="/"><img src="../../images/logo.png" alt="blog's logo"/></Link></li>
                    <li><NavLink to="/" activeClassName="active-nav-link">Recent Articles</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active-nav-link">About</NavLink></li>
                    <li>
                        { UserLocal }
                    </li>
                </nav>
            </div>
        </header>
    );
}