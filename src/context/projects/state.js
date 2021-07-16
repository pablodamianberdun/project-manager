import React from "react";
import projectContext from "./context";
import projectReducer from "./reducer";
import {
    CREATE_PROJECT,
    DELETE_PROJECT,
    GET_PROJECTS,
    SET_CURRENT_PROJECT,
} from "./types";

const ProjectState = (props) => {
    const projects = [];
    const initialState = {
        projects: [],
        currentProject: null,
    };

    const [state, dispatch] = React.useReducer(projectReducer, initialState);

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects,
        });
    };

    const createProject = (project) => {
        dispatch({
            type: CREATE_PROJECT,
            payload: project,
        });
    };

    const setCurrentProject = (project) => {
        dispatch({
            type: SET_CURRENT_PROJECT,
            payload: project,
        });
    };

    const deleteProject = (project) => {
        dispatch({
            type: DELETE_PROJECT,
            payload: project,
        });
    };

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                currentProject: state.currentProject,
                getProjects,
                createProject,
                setCurrentProject,
                deleteProject,
            }}
        >
            {props.children}
        </projectContext.Provider>
    );
};

export default ProjectState;
