import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import SortButton from "./components/SortButton";
import TasksList from "./components/TasksList";

const App = () => {
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("taskObject") + "");
    if (storage) {
      setTasks(storage.taskArray);
    }
  }, []);

  const [tasks, setTasks] = useState<
    Array<{ text: string; isCompleted: boolean }>
  >([]);

  const [sortAtoB, setSortAtoB] = useState(true);

  const sortMethod = useCallback(
    (a, b) => {
      if (a.text.toLowerCase() > b.text.toLowerCase()) {
        const res = sortAtoB ? 1 : -1;
        return res;
      }
      if (a.text.toLowerCase() < b.text.toLowerCase()) {
        const res = sortAtoB ? -1 : 1;
        return res;
      }
      return 0;
    },
    [sortAtoB]
  );

  const sortedTasks = useMemo(() => {
    const result = tasks ? tasks.sort(sortMethod) : [];
    return result;
  }, [tasks, sortMethod]);

  const doSaveStorage = useCallback((array) => {
    localStorage.setItem(
      "taskObject",
      JSON.stringify({
        taskArray: [...array],
      })
    );
  }, []);

  const addTask = useCallback(
    (text: string) => {
      const newArray = [...tasks, { text, isCompleted: false }];
      doSaveStorage(newArray);
      setTasks(newArray);
    },
    [tasks, doSaveStorage]
  );

  const completeTask = useCallback(
    (index: number) => {
      const newArray = [...tasks];
      newArray[index].isCompleted = !newArray[index].isCompleted;
      doSaveStorage(newArray);
      setTasks(newArray);
    },
    [tasks, doSaveStorage]
  );

  const removeTask = useCallback(
    (index: number) => {
      const newArray = [...tasks];
      newArray.splice(index, 1);
      doSaveStorage(newArray);
      setTasks(newArray);
    },
    [tasks, doSaveStorage]
  );

  const containerStyle = useMemo(() => {
    return {
      display: "inline-block",
    };
  }, []);

  const sortChange = useCallback(() => {
    setSortAtoB((prev) => !prev);
  }, []);

  return (
    <div style={containerStyle}>
      <AddTask doAdd={addTask} />
      {sortedTasks.length > 1 && (
        <SortButton sortChange={sortChange} sortAtoB={sortAtoB} />
      )}
      <TasksList
        tasks={sortedTasks}
        doComplete={completeTask}
        doRemove={removeTask}
      />
    </div>
  );
};

export default App;
