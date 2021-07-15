import { CREATE_PROJECT, GET_PROJECTS, SET_CURRENT_PROJECT } from "./types";

export default (state, action) => {
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
        default:
            return state;
    }
};
