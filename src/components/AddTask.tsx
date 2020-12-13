import React, { useCallback, useMemo, useState } from "react";

interface Props {
  doAdd: (text: string) => void;
}

const AddTask = ({ doAdd }: Props) => {
  const [name, setName] = useState("");
  const onChange = useCallback((event: any) => {
    event.preventDefault();
    setName(event.target.value);
  }, []);
  const handleSubmit = useCallback(() => {
    const value = name.replace(/\s/g, "");
    if (!value) return;
    doAdd(name);
    setName("");
  }, [name, doAdd]);
  const containerStyle = useMemo(() => {
    return {
      display: "inline-block",
      padding: 10,
      backgroundColor: "pink",
    };
  }, []);
  return (
    <div style={containerStyle}>
      <input type={"text"} value={name} onChange={onChange} />
      <button onClick={handleSubmit}>{"Добавить задачу"}</button>
    </div>
  );
};

export default AddTask;
