import React from "react";
import Main from "./components/Main";
import SideMenu from "./components/SideMenu";
import { Container } from "./styled";

const ProjectsPage = () => {
    return (
        <Container>
            <SideMenu />
            <Main />
        </Container>
    );
};

export default ProjectsPage;
