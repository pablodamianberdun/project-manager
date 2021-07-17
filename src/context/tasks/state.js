import React from "react";
import TasksContext from "./context";
import TasksReducer from "./reducer";

const TaskState = (props) => {
    const initialState = {
        tasks: [],
    };

    const [state, dispatch] = React.useReducer(TasksReducer, initialState);

    return (
		<TasksContext.Provider>
			{props.children}
		</TasksContext.Provider>
	)
};

export default TaskState;