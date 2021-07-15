import React from "react";
import {
    Aside,
    Button,
    Container,
    Form,
    Heading,
    Input,
    List,
    ListItemButton,
    LogOutButton,
    Title,
    UserName,
    MenuIcon,
    CloseIcon,
} from "./styled";
import { useMediaQuery } from "beautiful-react-hooks";
import projectContext from "../../../../context/projects/context";

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

const ProjectsList = () => {
    const { projects, getProjects } = React.useContext(projectContext);
    React.useEffect(() => {
        getProjects();
    }, []);

    if (projects.lenght === 0) return null;
    return (
        <List>
            {projects.map((project, index) => (
                <ListItemButton type="button" key={index}>
                    {project.name}
                </ListItemButton>
            ))}
        </List>
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
                <ProjectsList />
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
