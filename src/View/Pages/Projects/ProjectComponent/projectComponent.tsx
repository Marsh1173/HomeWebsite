import React from "react";
import "./projectComponentStyles.less";

export const ProjectComponent: React.FC<ProjectComponentProp> = (props) => {
    return (
        <div className="ProjectComponent">
            <a href={props.link} target="_blank">
                <p className="name">{props.name}</p>
                <img className="image" src={props.imgURL}></img>
                <p className="date">{props.date}</p>
            </a>
        </div>
    );
};

export interface ProjectComponentProp {
    name: string;
    date: string;
    imgURL: string;
    link: string;
}
