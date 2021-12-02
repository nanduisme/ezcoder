import React, { useState, useEffect } from "react";
import Toolbar from "./components/Toolbar";
import Workspace from "./components/Workspace";

export default function App(props) {
  const [isMain, setIsMain] = useState(() => {
    const saved = localStorage.getItem("isMain");
    try {
      return JSON.parse(saved);
    } catch (e) {
      return true;
    }
  });
  const [sidebarActive, setsidebarActive] = useState(() => {
    const saved = localStorage.getItem("sidebarActive");
    try {
      return JSON.parse(saved);
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("isMain", JSON.stringify(isMain));
  }, [isMain]);

  useEffect(() => {
    localStorage.setItem("sidebarActive", JSON.stringify(sidebarActive));
  }, [sidebarActive]);

  const onHomeClick = () => {
    if (!isMain) {
      setIsMain((prev) => !prev);
    }
  };

  const onCCClick = () => {
    if (isMain) {
      setIsMain((prev) => !prev);
    }
  };

  const toggleSidebar = () => {
    setsidebarActive((prev) => !prev);
  };

  return (
    <div id="app">
      <Toolbar
        onHomeClick={onHomeClick}
        onCCClick={onCCClick}
        toggleSidebar={toggleSidebar}
        isMain={isMain}
      />
      <Workspace isMain={isMain} sidebarActive={sidebarActive} />
    </div>
  );
}
