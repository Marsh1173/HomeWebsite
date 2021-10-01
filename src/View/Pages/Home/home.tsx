import React from "react";
import "./homeStyles.less";

export const Home: React.FC<{}> = () => {
    return (
        <div className="HomeDiv">
            <div className="infoDiv">
                <h1>Home</h1>
                <h2>Check out my Projects tab!</h2>
                <p>
                    This website was built during my whole education. For the best example of my current programming ability, check out Block Game and InterByte
                    Heroes in the Projects tab.
                </p>
            </div>
            <div className="linkDiv">
                <h1>Links</h1>
                <a target="_blank">Github</a>
                <a href="github.com/Marsh1173" target="_blank">
                    Github Projects
                </a>
                <a href="https://byu.joinhandshake.com/users/25344023" target="_blank">
                    Handshake
                </a>
            </div>
        </div>
    );
};
