import React from "react";
import classNames from "classnames";


export default function Sidebar(props) {
  let classes = classNames({
    sidebar: true,
    hidden: !props.sidebarActive,
  })
  return <div className={classes}><h2 className="sidebar-header">Components</h2></div>;
}
