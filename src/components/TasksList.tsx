import React from "react";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Array<{ text: string; isCompleted: boolean }>;
  doComplete: (index: number) => void;
  doRemove: (index: number) => void;
}

const TasksList = ({ tasks, doComplete, doRemove }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "lightblue",
      }}
    >
      {tasks.map((item, index) => (
        <TaskItem
          key={"task_" + item.text}
          index={index}
          text={item.text}
          isCompleted={item.isCompleted}
          doComplete={doComplete}
          doRemove={doRemove}
        />
      ))}
    </div>
  );
};

export default TasksList;
