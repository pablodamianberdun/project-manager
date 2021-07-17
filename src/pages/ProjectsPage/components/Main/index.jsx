import React from "react";
import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";
import ProjectContext from "../../../../context/projects/context";
import tasksContext from "../../../../context/tasks/context";
import {
    Button,
    Container,
    DeleteIcon,
    EditIcon,
    Form,
    Heading,
    Input,
    Label,
    List,
    ListItem,
    Flex,
    Text,
    CheckBoxStyles,
    Message,
    DeleteButton,
    UserName,
    DropdownDiv,
    Entity,
    CustomSelect,
    CustomOption,
    Option,
} from "./styled";

const NewTaskForm = () => {
    const { currentProject } = React.useContext(ProjectContext);
    const { getTasks, createTask } = React.useContext(tasksContext);
    const [task, setTask] = React.useState({
        name: "",
        status: false,
    });

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.name.trim === "") return;
        task.projectId = currentProject.id;
        createTask(task);
        setTask({
            ...task,
            name: "",
        });
        getTasks(currentProject.id);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>New Task:</Label>
            <Input
                name="name"
                type="text"
                value={task.name}
                placeholder="task name"
                onChange={handleChange}
                autoComplete="off"
            />
            <Button type="submit">Add</Button>
        </Form>
    );
};

const TasksList = ({ currentProject, deleteProject }) => {
    const { projectTasks } = React.useContext(tasksContext);

    return (
        <>
            <Heading>{currentProject.name}</Heading>
            {projectTasks.length > 0 ? (
                <List>
                    {projectTasks.map((task, index) => (
                        <ListItem key={index}>
                            <Flex>
                                {task.status ? (
                                    <MdCheckCircle style={CheckBoxStyles} />
                                ) : (
                                    <MdRadioButtonUnchecked
                                        style={CheckBoxStyles}
                                    />
                                )}
                                <Text>{task.name}</Text>
                            </Flex>

                            <Flex>
                                <EditIcon />
                                <DeleteIcon />
                            </Flex>
                        </ListItem>
                    ))}
                    <DeleteButton onClick={() => deleteProject(currentProject)}>
                        Delete Project
                    </DeleteButton>
                </List>
            ) : (
                <Message>No tasks. Create a new one!</Message>
            )}
        </>
    );
};

const Dropdown = () => {
    const [showOptions, setShowOptions] = React.useState(false);

    return (
        <>
            <DropdownDiv>
                <CustomSelect onClick={() => setShowOptions(!showOptions)}>
                    <UserName>User Name ...</UserName>
                    {!showOptions ? (
                        <Entity>&#x25BC;</Entity>
                    ) : (
                        <Entity>&#x25B2;</Entity>
                    )}
                </CustomSelect>
                <CustomOption display={showOptions ? "block" : "none"}>
                    <Option>About Us</Option>
                    <Option>Settings</Option>
                    <Option>Log Out</Option>
                </CustomOption>
            </DropdownDiv>
        </>
    );
};

const Main = () => {
    const { currentProject, deleteProject } = React.useContext(ProjectContext);

    return (
        <Container>
            {currentProject ? (
                <>
                    <NewTaskForm />
                    <TasksList
                        currentProject={currentProject}
                        deleteProject={deleteProject}
                    />
                </>
            ) : (
                <Message>Select a Project</Message>
            )}
            {/* <UserName>User....</UserName>
            <LogOutButton>Log Out</LogOutButton> */}
            <Dropdown />
        </Container>
    );
};

export default Main;
