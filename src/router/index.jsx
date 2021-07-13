import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import ProjectsPage from "../pages/ProjectsPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AuthPage} />
                <Route exact path="/projects" component={ProjectsPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
