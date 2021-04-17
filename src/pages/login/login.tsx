import React from "react";
import "./login.css";
import {Header} from "../../components/header";

export const Login = () => {
    return (
        <>
            <Header />
            <form className="login-form">
                <h1>Log In</h1>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="me@example.com" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="********" id="password"/>
                <button className="btn-blue">Log In</button>
            </form>
        </>
    );
}