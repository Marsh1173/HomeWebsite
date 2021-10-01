import React, { useState } from "react";
import "./overViewStyles.less";
import { HeaderComponent } from "../GlobalComponents/Header/header";
import { NewsSlider } from "../GlobalComponents/NewsSlider/newsSlider";
import { Home } from "../Pages/Home/home";
import { AboutMeComponent } from "../Pages/AboutMe/aboutMe";
import { ProjectsComponent } from "../Pages/Projects/projects";

export const OverView: React.FC<{}> = () => {
    const [page, changePageState] = useState("Home");

    const changePage = (newPage: Page) => {
        if (newPage != page) {
            changePageState(newPage);
            //props.externalToggleFunc(tempToggled);
            return true;
        }
        return false;
    };

    return (
        <div className="OverView longFadeInDiv">
            <HeaderComponent changePage={changePage}></HeaderComponent>
            <NewsSlider></NewsSlider>
            <div className="pageContainer">
                {page == "Home" && (
                    <div className="fadeInDiv">
                        <Home></Home>
                    </div>
                )}
                {page == "About Me" && (
                    <div className="fadeInDiv">
                        <AboutMeComponent></AboutMeComponent>
                    </div>
                )}
                {page == "Projects" && (
                    <div className="fadeInDiv">
                        <ProjectsComponent></ProjectsComponent>
                    </div>
                )}
            </div>
        </div>
    );
};

export type Page = "Home" | "About Me" | "Projects";
