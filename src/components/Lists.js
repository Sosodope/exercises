import React from "react";

const Lists = props => {
  return (
    <ul>
      {props.items.map((item, index) => {
        return (
          <li key={index} onClick={props.handleClick}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Lists;
