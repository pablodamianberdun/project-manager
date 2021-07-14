import React from "react";
import {
    Aside,
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
    MenuIcon,
    CloseIcon,
} from "./styled";
import { useMediaQuery } from "beautiful-react-hooks";

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

const Menu = ({ setShowMenu }) => {
    return (
        <Aside>
            <Container>
                <CloseIcon onClick={() => setShowMenu(false)} />
                <Title>Project Manager</Title>
                <NewProject />
                <Heading>Your Projects</Heading>
                <List>
                    <ListItem>No projects found</ListItem>
                </List>
                <UserName>User....</UserName>
                <LogOutButton>Log Out</LogOutButton>
            </Container>
        </Aside>
    );
};

const SideMenu = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const isSmall = useMediaQuery("(max-width: 768px)");

    return (
        <React.Fragment>
            {isSmall ? (
                <>
                    <MenuIcon onClick={() => setShowMenu(true)} />
                    {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}
                </>
            ) : (
                <Menu />
            )}
        </React.Fragment>
    );
};

export default SideMenu;
