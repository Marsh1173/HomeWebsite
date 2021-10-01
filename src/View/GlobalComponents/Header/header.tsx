import React, { useState } from "react";
import { Page } from "../../OverView/overView";
import "./headerStyles.less";

export const HeaderComponent: React.FC<ChangePageProps> = (props) => {
    let tempPage: Page = "Home";

    const clickpage = (newPageTabEnum: number) => {
        let newPageTab: Page = "Home";
        switch (newPageTabEnum) {
            case 0:
                newPageTab = "Home";
                break;
            case 1:
                newPageTab = "About Me";
                break;
            case 2:
                newPageTab = "Projects";
                break;
        }

        if (props.changePage(newPageTab)) {
            changePageTabState(newPageTabEnum);
        }
    };

    let [pageTab, changePageTabState] = useState(0);

    return (
        <div className="HeaderComponent">
            <button
                onClick={() => {
                    clickpage(0);
                }}
                className={`${pageTab == 0 ? "currentpage" : ""}`}
            >
                Home
            </button>
            <button className={`${pageTab == 1 ? "currentpage" : ""}`} onClick={() => clickpage(1)}>
                About Me
            </button>
            <button className={`${pageTab == 2 ? "currentpage" : ""}`} onClick={() => clickpage(2)}>
                Projects
            </button>
        </div>
    );
};

export interface ChangePageProps {
    changePage: (page: Page) => boolean;
}
