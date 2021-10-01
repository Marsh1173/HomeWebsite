import React, { Component, createElement } from "react";
import ReactDOM from "react-dom";
import { OverView } from "../View/OverView/overView";

const domContainer = document.querySelector("#reactDom");
ReactDOM.render(createElement(OverView), domContainer);
