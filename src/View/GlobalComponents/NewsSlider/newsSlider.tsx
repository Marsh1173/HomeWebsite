import React from "react";
import "./newsSliderStyles.less";

export const NewsSlider: React.FC<{}> = (props) => {
    return (
        <div className="NewsSlider">
            <img src="./images/character.png"></img>
            <p>Newest Game Beta Release!</p>
        </div>
    );
};
