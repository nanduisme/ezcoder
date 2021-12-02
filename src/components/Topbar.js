import React from "react";

export default function Topbar(props) {
  if (props.isMain) {
    return (
      <div id="topbar">
        <h2>Project Name / </h2>
        <h3>Main Script</h3>
        <button id="run-button">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="2.5em"
            width="2.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 010 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    );
  } else {
    return (
      <div id="topbar">
        <h2>Project Name / </h2>
        <h3>Custom Components</h3>
      </div>
    );
  }
}
