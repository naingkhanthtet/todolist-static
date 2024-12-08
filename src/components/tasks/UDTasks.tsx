import React, { useState } from "react";
import { TaskField, TaskTitle } from "../styles/TaskComponents";
import { GridBox, SecondIcons, ThirdIcons } from "../styles/BasicComponents";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import DeleteIcon from "@mui/icons-material/Delete";
import Task from "../../types/Task";

interface UDTaskProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onUpdateTask: (task: Task) => void;
  onMoveToFinished: (task: Task) => void;
}

const UDTasks: React.FC<UDTaskProps> = ({
  tasks,
  onDeleteTask,
  onUpdateTask,
  onMoveToFinished,
}) => {
  const [taskEdits, setTaskEdits] = useState<Record<number, string>>({});
  const [editIds, setEditIds] = useState<number | null>(null);

  const handleTaskEdits = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    task: Task
  ) => {
    const editedTaskTitle = event.target.value;
    setTaskEdits({ ...taskEdits, [task.id]: editedTaskTitle });
  };

  const updateTask = (task: Task) => {
    const editedTaskTitle = taskEdits[task.id] || task.title;
    const updatedTask = { ...task, title: editedTaskTitle };

    onUpdateTask(updatedTask);

    setTaskEdits((prev) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [task.id]: _, ...rest } = prev;
      return rest;
    });
    setEditIds(null);
  };

  return (
    <>
      {tasks.map((task) => (
        <GridBox key={task.id}>
          {/* Task Title */}
          {editIds === task.id ? (
            <TaskField
              value={taskEdits[task.id] || task.title}
              onChange={(e) => handleTaskEdits(e, task)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  updateTask(task);
                }
              }}
              onBlur={() => updateTask(task)}
              multiline
              variant="standard"
              inputProps={{
                maxLength: 100,
              }}
            />
          ) : (
            <TaskTitle onClick={() => setEditIds(task.id)}>
              {task.title}
            </TaskTitle>
          )}

          <SecondIcons>
            <PanoramaFishEyeIcon onClick={() => onMoveToFinished(task)} />
          </SecondIcons>
          <ThirdIcons>
            <DeleteIcon onClick={() => onDeleteTask(task.id)} />
          </ThirdIcons>
        </GridBox>
      ))}
    </>
  );
};

export default UDTasks;
