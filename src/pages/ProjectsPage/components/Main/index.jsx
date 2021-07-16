import React from "react";
import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";
import projectContext from "../../../../context/projects/context";
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
} from "./styled";

const NewTaskForm = () => {
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
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>New Task:</Label>
            <Input
                name="name"
                type="text"
                placeholder="task name"
                onChange={handleChange}
                autoComplete="off"
            />
            <Button type="submit">Add</Button>
        </Form>
    );
};

const TasksList = ({ currentProject, deleteProject }) => {
    const tasks = [
        { name: "This is a task", status: false },
        { name: "This is another task", status: true },
    ];

    return (
        <>
            <Heading>{currentProject.name}</Heading>
            <List>
                {tasks.map((task, index) => (
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
        </>
    );
};

const Main = () => {
    const { currentProject, deleteProject } = React.useContext(projectContext);

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
        </Container>
    );
};

export default Main;
