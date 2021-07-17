import { CREATE_TASK, DELETE_TASK, GET_TASKS, STATUS_TASK } from "./types";

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
        case STATUS_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id
                        ? { ...task, status: !task.status }
                        : task
                ),
            };
        default:
            return state;
    }
};

export default reducer;
