import React from "react";
import { GridBox, SecondIcons, ThirdIcons } from "../styles/BasicComponents";
import { TaskTitle } from "../styles/TaskComponents";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Task from "../../types/Task";
import DeleteIcon from "@mui/icons-material/Delete";

interface CompletedTaskProps {
  finishedTasks: Task[];
  onDeleteTask: (id: number) => void;
  onMoveToDo: (tasks: Task) => void;
}

const CompletedTasks: React.FC<CompletedTaskProps> = ({
  finishedTasks,
  onDeleteTask,
  onMoveToDo,
}) => {
  return (
    <>
      {finishedTasks.map((task) => (
        <GridBox key={task.id}>
          <TaskTitle
            sx={{
              textDecoration: "line-through",
            }}
          >
            {task.title}
          </TaskTitle>
          <SecondIcons>
            <CheckCircleOutlineIcon onClick={() => onMoveToDo(task)} />
          </SecondIcons>
          <ThirdIcons>
            <DeleteIcon onClick={() => onDeleteTask(task.id)} />
          </ThirdIcons>
        </GridBox>
      ))}
    </>
  );
};

export default CompletedTasks;
