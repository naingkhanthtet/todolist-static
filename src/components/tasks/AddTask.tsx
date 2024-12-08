import React, { useState } from "react";
import DOMPurify from "dompurify";
import AddIcon from "@mui/icons-material/Add";
import { AddTaskField } from "../styles/TaskComponents";
import { GridBox, ThirdIcons } from "../styles/BasicComponents";
import Task from "../../types/Task";

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    const sanitizedTask: string = DOMPurify.sanitize(newTask);
    if (sanitizedTask.trim() === "") {
      alert("Please add valid task title");
      return;
    }
    const newSanitizedTask: Task = {
      id: Date.now(),
      title: sanitizedTask,
      completed: false,
    };
    onAddTask(newSanitizedTask);
    setNewTask("");
  };

  return (
    <GridBox
      sx={{
        marginTop: 5,
        marginBottom: 5,
      }}
    >
      <AddTaskField
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

export default AddTask;
