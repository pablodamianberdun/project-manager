import React from "react";
import {
    Button,
    Container,
    Form,
    Heading,
    Input,
    List,
    ListItem,
    LogOutButton,
    Title,
    UserName,
} from "./styled";

const NewProject = () => {
    const [project, setProject] = React.useState({
        name: "",
    });

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="project name"
                name="name"
                value={project.name}
                onChange={handleChange}
                autoComplete="off"
            />
            <Button type="submit">Create New Project</Button>
        </Form>
    );
};

const SideMenu = () => {
    return (
        <Container>
            <Title>Project Manager</Title>
            <NewProject />
            <Heading>Your Projects</Heading>
            <List>
                <ListItem>No projects found</ListItem>
            </List>
            <UserName>User....</UserName>
            <LogOutButton>Log Out</LogOutButton>
        </Container>
    );
};

export default SideMenu;
