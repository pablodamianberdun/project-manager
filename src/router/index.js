import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AuthPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
