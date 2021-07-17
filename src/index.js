import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalStyles from "./theme/globalStyles";
import Router from "./router";
import ProjectState from "./context/projects/state";
import TasksState from "./context/tasks/state";

ReactDOM.render(
    <React.StrictMode>
        <ProjectState>
            <TasksState>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Router />
                </ThemeProvider>
            </TasksState>
        </ProjectState>
    </React.StrictMode>,
    document.getElementById("root")
);
