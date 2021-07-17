import { CREATE_TASK, DELETE_TASK, GET_TASKS } from "./types";

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
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task) => task.id !== action.payload.id
                ),
            };

        default:
            return state;
    }
};

export default reducer;
