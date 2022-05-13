import React from "react";

const Task = ({ task }) => {
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton">
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default Task;
