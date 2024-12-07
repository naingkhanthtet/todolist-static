import React, { useState } from "react";
import DOMPurify from "dompurify";
import { GridBox, ThirdIcons } from "../styles/BasicComponents";
import { AddTaskField } from "../styles/TaskComponents";
import AddIcon from "@mui/icons-material/Add";
import Task from "../../types/Task";
import { getCookie, setCookie } from "../../utils/useCookies";

const TaskAdd: React.FC = () => {
  const [newTask, setNewTask] = useState<string>("");

  const handleAddTask = (newSanitizedTask: Task) => {
    const taskFromCookies = JSON.parse(getCookie("todotasks") || "[]");

    // Avoid duplicates
    const isAlreadyAdded = taskFromCookies.some(
      (task: Task) => task.id === newSanitizedTask.id
    );

    const updatedTasks = isAlreadyAdded
      ? taskFromCookies
      : [...taskFromCookies, { ...newSanitizedTask }];

    setCookie("todotasks", JSON.stringify(updatedTasks));
    window.dispatchEvent(new Event("taskUpdated"));
  };

  const addTask = () => {
    const sanitizedTask: string = DOMPurify.sanitize(newTask);
    if (sanitizedTask.trim() === "") {
      alert("Please add valid task title");
      return;
    }
    const newSanitizedTask: Task = {
      id: Date.now(),
      task: sanitizedTask,
      completed: false,
    };
    handleAddTask(newSanitizedTask);
    setNewTask("");
  };

  return (
    <GridBox>
      <AddTaskField
        className="new-title"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        placeholder="Add new task here"
        variant="standard"
        multiline
        inputProps={{ maxLength: 100 }}
      />
      <ThirdIcons>
        <AddIcon onClick={addTask} />
      </ThirdIcons>
    </GridBox>
  );
};

export default TaskAdd;
