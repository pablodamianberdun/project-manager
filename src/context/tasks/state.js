import React from "react";
import projectContext from "../projects/context";
import TasksContext from "./context";
import TasksReducer from "./reducer";
import {
    GET_TASKS,
    CREATE_TASK,
    DELETE_TASK,
    STATUS_TASK,
    SET_EDIT_TASK,
    EDIT_TASK,
} from "./types";

const TaskState = (props) => {
    const { currentProject } = React.useContext(projectContext);

    const initialState = {
        tasks: [],
        projectTasks: [],
        taskToEdit: null,
    };

    const [state, dispatch] = React.useReducer(TasksReducer, initialState);

    const getTasks = (projectId) => {
        dispatch({
            type: GET_TASKS,
            payload: projectId,
        });
    };

    const createTask = (task) => {
        dispatch({
            type: CREATE_TASK,
            payload: task,
        });
    };

    const deleteTask = (task) => {
        dispatch({
            type: DELETE_TASK,
            payload: task,
        });
    };

    const statusTask = (task) => {
        dispatch({
            type: STATUS_TASK,
            payload: task,
        });
    };

    const setTaskToEdit = (task) => {
        dispatch({
            type: SET_EDIT_TASK,
            payload: task,
        });
    };

    const editTask = (task) => {
        dispatch({
            type: EDIT_TASK,
            payload: task,
        });
    };

    React.useEffect(() => {
        if (!currentProject) return;
        getTasks(currentProject.id);
    }, [currentProject, state.tasks]);

    return (
        <TasksContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                taskToEdit: state.taskToEdit,
                getTasks,
                createTask,
                deleteTask,
                statusTask,
                setTaskToEdit,
                editTask,
            }}
        >
            {props.children}
        </TasksContext.Provider>
    );
};

export default TaskState;
