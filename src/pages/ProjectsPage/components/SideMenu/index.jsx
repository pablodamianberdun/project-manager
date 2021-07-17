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
    Title,
    MenuIcon,
    CloseIcon,
    NoProjectsMessage,
} from "./styled";
import { useMediaQuery } from "beautiful-react-hooks";
import projectContext from "../../../../context/projects/context";
import { v4 as uuidv4 } from "uuid";
import tasksContext from "../../../../context/tasks/context";

const NewProject = () => {
    const [project, setProject] = React.useState({
        name: "",
    });

    const { createProject } = React.useContext(projectContext);

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (project.name.trim() === "") return;
        project.id = uuidv4();
        createProject(project);
        setProject({
            name: "",
        });
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

const ProjectsList = ({ projects, setCurrentProject }) => {
    const { getTasks } = React.useContext(tasksContext);
    if (projects.length === 0)
        return (
            <NoProjectsMessage>
                No projects found. Create one!
            </NoProjectsMessage>
        );

    const handleClick = (project) => {
        setCurrentProject(project);
        getTasks(project.id);
    };

    return (
        <List>
            {projects.map((project, index) => (
                <ListItemButton
                    type="button"
                    key={index}
                    onClick={() => handleClick(project)}
                >
                    {project.name}
                </ListItemButton>
            ))}
        </List>
    );
};

const Menu = ({ setShowMenu, projects, setCurrentProject }) => {
    return (
        <Aside>
            <Container>
                <CloseIcon onClick={() => setShowMenu(false)} />
                <Title>Project Manager</Title>
                <NewProject />
                <Heading>Your Projects</Heading>
                <ProjectsList
                    projects={projects}
                    setCurrentProject={setCurrentProject}
                />
            </Container>
        </Aside>
    );
};

const SideMenu = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const isSmall = useMediaQuery("(max-width: 768px)");
    const { projects, currentProject, getProjects, setCurrentProject } =
        React.useContext(projectContext);

    React.useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, []);

    React.useEffect(() => {
        setShowMenu((state) => !state);
    }, [currentProject]);

    return (
        <React.Fragment>
            {isSmall ? (
                <>
                    <MenuIcon onClick={() => setShowMenu(true)} />
                    {showMenu ? (
                        <Menu
                            setShowMenu={setShowMenu}
                            projects={projects}
                            setCurrentProject={setCurrentProject}
                        />
                    ) : null}
                </>
            ) : (
                <Menu
                    setShowMenu={setShowMenu}
                    projects={projects}
                    setCurrentProject={setCurrentProject}
                />
            )}
        </React.Fragment>
    );
};

export default SideMenu;
