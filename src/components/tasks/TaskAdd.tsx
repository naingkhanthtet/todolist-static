import React, { useState } from "react";
import DOMPurify from "dompurify";
import { GridBox, ThirdIcons } from "../styles/BasicComponents";
import { AddTaskField } from "../styles/TaskComponents";
import AddIcon from "@mui/icons-material/Add";
import Task from "../../types/Task";

interface TaskAddProps {
  handleAddTask: (newTask: Task) => void;
}

const TaskAdd: React.FC<TaskAddProps> = ({ handleAddTask }) => {
  const [newTask, setNewTask] = useState<string>("");

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
