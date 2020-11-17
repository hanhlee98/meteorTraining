import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Homepage from './components/Homepage';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import {Root} from "./components/Homepage/styled";

export const App = () => (
    <Root>
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginForm/>
                </Route>
                <Route path="/register">
                    <RegisterForm/>
                </Route>
                <Route path="/">
                    <Homepage/>
                </Route>
            </Switch>
        </Router>
    </Root>
);
