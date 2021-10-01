import React from "react";
import { Component } from "react";
import { ProjectComponent, ProjectComponentProp } from "./ProjectComponent/projectComponent";
import "./projectsStyles.less";
import { ProjectArray } from "../../../DataHandlers/projects";

export class ProjectsComponent extends Component<{}> {
    render() {
        const projects: ProjectComponentProp[] = ProjectArray;

        const projectElems: JSX.Element[] = projects.map((project) => {
            return <ProjectComponent name={project.name} date={project.date} imgURL={project.imgURL} link={project.link}></ProjectComponent>;
        });

        return (
            <div className="ProjectsDiv">
                <h1>Projects</h1>
                <h2>WARNING: Links do not currently work.</h2>
                <div className="projectContainer">{projectElems}</div>
            </div>
        );
    }
}
