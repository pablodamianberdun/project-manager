import { CREATE_TASK, GET_TASKS } from "./types";

const reducer = (state, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                projectTasks: state.tasks.filter(
                    (task) => task.projectId === action.payload
                ),
            };
        case CREATE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        default:
            return state;
    }
};

export default reducer;
