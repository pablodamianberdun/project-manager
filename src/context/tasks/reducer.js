import {
    CREATE_TASK,
    DELETE_TASK,
    EDIT_TASK,
    GET_TASKS,
    SET_EDIT_TASK,
    STATUS_TASK,
} from "./types";

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
                tasks: [action.payload, ...state.tasks],
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
        case SET_EDIT_TASK:
            return {
                ...state,
                taskToEdit: action.payload,
            };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                ),
                taskToEdit: null,
            };
        default:
            return state;
    }
};

export default reducer;
