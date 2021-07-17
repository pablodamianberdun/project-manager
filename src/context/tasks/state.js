import React from "react";
import TasksContext from "./context";
import TasksReducer from "./reducer";
import { GET_TASKS, CREATE_TASK } from "./types";

const TaskState = (props) => {
    const initialState = {
        tasks: [],
        projectTasks: [],
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

    return (
        <TasksContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                getTasks,
                createTask,
            }}
        >
            {props.children}
        </TasksContext.Provider>
    );
};

export default TaskState;
