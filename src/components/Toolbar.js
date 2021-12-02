import React from "react";

export default function Toolbar(props) {
  return (
    <div id="toolbar">
      <div id="toggle-buttons">
      <button
        id="home-button"
        className={"toolbar-button" + (props.isMain ? " active-tb-button" : "")}
        onClick={props.onHomeClick}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
        </svg>
      </button>
      <button
        id="cc-button"
        className={"toolbar-button" + (!props.isMain ? " active-tb-button" : "")}
        onClick={props.onCCClick}
      >
        {"{ ... }"}
      </button>
      </div>
      <button
        id="components-button"
        className="toolbar-button"
        onClick={props.toggleSidebar}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          t="1569683632175"
          viewBox="0 0 1024 1024"
          version="1.1"
          pid="12593"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <path
            d="M640.6 429.8h257.1c7.9 0 14.3-6.4 14.3-14.3V158.3c0-7.9-6.4-14.3-14.3-14.3H640.6c-7.9 0-14.3 6.4-14.3 14.3v92.9H490.6c-3.9 0-7.1 3.2-7.1 7.1v221.5h-85.7v-96.5c0-7.9-6.4-14.3-14.3-14.3H126.3c-7.9 0-14.3 6.4-14.3 14.3v257.2c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3V544h85.7v221.5c0 3.9 3.2 7.1 7.1 7.1h135.7v92.9c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3v-257c0-7.9-6.4-14.3-14.3-14.3h-257c-7.9 0-14.3 6.4-14.3 14.3v100h-78.6v-393h78.6v100c0 7.9 6.4 14.3 14.3 14.3z m53.5-217.9h150V362h-150V211.9zM329.9 587h-150V437h150v150z m364.2 75.1h150v150.1h-150V662.1z"
            pid="12594"
          ></path>
        </svg>
      </button>
    </div>
  );
}
