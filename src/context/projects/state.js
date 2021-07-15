import React from "react";
import projectContext from "./context";
import projectReducer from "./reducer";
import { GET_PROJECTS } from "./types";

const ProjectState = (props) => {
    const projects = [{ name: "Project Manager" }, { name: "E-commerce" }];
    const initialState = {
        projects: [],
    };

    const [state, dispatch] = React.useReducer(projectReducer, initialState);

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects,
        });
    };

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                getProjects,
            }}
        >
            {props.children}
        </projectContext.Provider>
    );
};

export default ProjectState;
