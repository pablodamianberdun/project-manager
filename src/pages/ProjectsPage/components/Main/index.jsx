import React from "react";
import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";
import ProjectContext from "../../../../context/projects/context";
import tasksContext from "../../../../context/tasks/context";
import { v4 as uuidv4 } from "uuid";
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
    const { createTask, taskToEdit, editTask } = React.useContext(tasksContext);
    const [task, setTask] = React.useState({
        name: "",
        status: false,
    });

    React.useEffect(() => {
        if (taskToEdit) setTask(taskToEdit);
        else
            setTask({
                name: "",
                status: false,
            });
    }, [taskToEdit]);

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.name.trim === "") return;

        if (taskToEdit) {
            editTask(task);
            return;
        }

        task.projectId = currentProject.id;
        task.id = uuidv4();
        createTask(task);
        setTask({
            ...task,
            name: "",
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>{taskToEdit ? "Edit Task:" : "New Task:"}</Label>
            <Input
                name="name"
                type="text"
                value={task.name}
                placeholder="task name"
                onChange={handleChange}
                autoComplete="off"
            />
            <Button type="submit">{taskToEdit ? "Edit" : "Add"}</Button>
        </Form>
    );
};

const TasksList = ({ currentProject, deleteProject }) => {
    const { projectTasks, deleteTask, statusTask, setTaskToEdit } =
        React.useContext(tasksContext);

    const handleEdit = (task) => {
        setTaskToEdit(task);
    };

    return (
        <>
            <Heading>{currentProject.name}</Heading>
            {projectTasks.length > 0 ? (
                <List>
                    {projectTasks.map((task, index) => (
                        <ListItem key={index}>
                            <Flex>
                                {task.status ? (
                                    <MdCheckCircle
                                        style={CheckBoxStyles}
                                        onClick={() => statusTask(task)}
                                    />
                                ) : (
                                    <MdRadioButtonUnchecked
                                        style={CheckBoxStyles}
                                        onClick={() => statusTask(task)}
                                    />
                                )}
                                <Text>{task.name}</Text>
                            </Flex>

                            <Flex>
                                <EditIcon onClick={() => handleEdit(task)} />
                                <DeleteIcon onClick={() => deleteTask(task)} />
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
            <Dropdown />
        </Container>
    );
};

export default Main;
