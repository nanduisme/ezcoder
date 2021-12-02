import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

export default function Workspace(props) {
  return (
    <div id="background">
      <Sidebar sidebarActive={props.sidebarActive} />
      <div id="main">
        <Topbar isMain={props.isMain} />
        <div id="workspace"></div>
      </div>
    </div>
  );
}
