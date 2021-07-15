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

const TasksList = ({ projectName }) => {
    const tasks = [
        { name: "This is a task", status: false },
        { name: "This is another task", status: true },
    ];

    return (
        <>
            <Heading>{projectName}</Heading>
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
            </List>
        </>
    );
};

const Main = () => {
    const { currentProject } = React.useContext(projectContext);

    return (
        <Container>
            {currentProject.name ? (
                <>
                    <NewTaskForm />
                    <TasksList projectName={currentProject.name} />
                </>
            ) : (
                <Message>Select a Project</Message>
            )}
        </Container>
    );
};

export default Main;
