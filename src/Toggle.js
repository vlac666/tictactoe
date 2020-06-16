import React from "react";
import "./Toggle.css";

export function Toggle({
  name = "toggle",
  togglePosition = true,
  onText = "On",
  offText = "Off",
  onChange,
}) {
  return (
    <>
      <div>
        <label htmlFor={name + "true"}>
          <input
            type="radio"
            name={name}
            id={name + "true"}
            className="toggleButton"
            value={true}
            onChange={() => onChange(true)}
            checked={togglePosition}
          />
          {onText}
        </label>
      </div>
      <div>
        <label htmlFor={name + "false"}>
          <input
            type="radio"
            name={name}
            id={name + "true"}
            className="toggleButton"
            value={false}
            onChange={() => onChange(false)}
            checked={!togglePosition}
          />
          {offText}
        </label>
      </div>
    </>
  );
}
