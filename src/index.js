import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalStyles from "./theme/globalStyles";
import Router from "./router";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
