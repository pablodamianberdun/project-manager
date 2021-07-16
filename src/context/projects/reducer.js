import {
    CREATE_PROJECT,
    DELETE_PROJECT,
    GET_PROJECTS,
    SET_CURRENT_PROJECT,
} from "./types";

const reducer = (state, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
            };
        case CREATE_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
            };
        case SET_CURRENT_PROJECT:
            return {
                ...state,
                currentProject: action.payload,
            };
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(
                    (project) => project.id !== action.payload.id
                ),
                currentProject: null,
            };
        default:
            return state;
    }
};

export default reducer;
