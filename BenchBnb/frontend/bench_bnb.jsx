import { signUp, login, logout } from './util/session_api_util'
import createStore from './store/store'
import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
    const user = { user: {username: "gigi", password: "hunter12"}}
    window.user = user
    window.signUp = signUp
    window.login = login
    window.logout = logout

    if (window.currentUser){
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        }
    }
    const store = createStore(preloadedState)
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});

