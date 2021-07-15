import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalStyles from "./theme/globalStyles";
import Router from "./router";
import ProjectState from "./context/projects/state";

ReactDOM.render(
    <React.StrictMode>
        <ProjectState>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Router />
            </ThemeProvider>
        </ProjectState>
    </React.StrictMode>,
    document.getElementById("root")
);
