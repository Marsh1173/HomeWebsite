import React from "react";
import "./aboutMeStyles.less";

export const AboutMeComponent: React.FC<{}> = () => {
    let email: string = "natehroylance@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        document.getElementById("copyText")!.textContent = " - Copied!";
    };
    const resetCopyText = () => {
        document.getElementById("copyText")!.textContent = " - Copy";
    };

    return (
        <div className="AboutMeDiv">
            <h1>About Me</h1>
            <h2>Nate Roylance</h2>
            <h2>
                From{" "}
                <a
                    href="https://www.google.com/maps/place/Quincy,+WA+98848/@47.2274422,-119.9238131,12z/data=!3m1!4b1!4m5!3m4!1s0x5499753251ef4209:0x8dbd9a4e2a88a08c!8m2!3d47.2342997!4d-119.8525504?"
                    target="_blank"
                >
                    Quincy, WA
                </a>
            </h2>
            <h2>
                My{" "}
                <a href="./files/resume.pdf" target="_blank">
                    Resume
                </a>
            </h2>
            <h2>
                Currently enrolled at{" "}
                <a href="https://www.byu.edu/" target="_blank">
                    BYU
                </a>
            </h2>
            <h2>Set to graduate Summer Semester 2022</h2>
            <h2 className="email">
                Email:{" "}
                <button onClick={copyEmail} onMouseLeave={resetCopyText}>
                    {email}
                </button>
                <b id="copyText">{" - "}Copy</b>
            </h2>
        </div>
    );
};
