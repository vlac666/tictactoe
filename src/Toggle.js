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
      <label htmlFor={name + "true"}>Ascending</label>
      <input
        type="radio"
        name={name}
        id={name + "true"}
        value={true}
        onChange={() => onChange(true)}
        checked={togglePosition}
      />

      <label htmlFor={name + "false"}>Descending</label>
      <input
        type="radio"
        name={name}
        id={name + "true"}
        value={false}
        onChange={() => onChange(false)}
        checked={!togglePosition}
      />
    </>
  );
}
