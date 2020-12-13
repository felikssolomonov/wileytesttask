import React, { useCallback, useMemo } from "react";

interface Props {
  index: number;
  text: string;
  isCompleted: boolean;
  doComplete: (index: number) => void;
  doRemove: (index: number) => void;
}

const TaskItem = ({
  index,
  text,
  isCompleted,
  doComplete,
  doRemove,
}: Props) => {
  const textStyle = useMemo(() => {
    return {
      display: "flex",
      justifyContent: "center",
      padding: 5,
    };
  }, []);
  const btnContainerStyle = useMemo(() => {
    return { display: "flex", justifyContent: "center", padding: 5 };
  }, []);
  const completeAction = useCallback(() => {
    doComplete(index);
  }, [doComplete, index]);
  const removeAction = useCallback(() => {
    doRemove(index);
  }, [doRemove, index]);
  return (
    <div
      style={{
        backgroundColor: isCompleted ? "red" : "lightgreen",
        margin: 10,
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <text style={textStyle}>{text}</text>
      <div style={btnContainerStyle}>
        <button onClick={completeAction}>{"complete"}</button>
        <button onClick={removeAction}>{"remove"}</button>
      </div>
    </div>
  );
};

export default TaskItem;
