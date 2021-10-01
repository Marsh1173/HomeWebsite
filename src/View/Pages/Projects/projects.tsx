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
                <h2>WARNING: Block Game's server is not currently up. Check back in a day or two.</h2>
                <div className="projectContainer">{projectElems}</div>
            </div>
        );
    }
}
