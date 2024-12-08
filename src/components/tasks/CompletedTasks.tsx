import React from "react";

import { AnimatePresence, motion } from "framer-motion";
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
  const animationVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  return (
    <AnimatePresence>
      {finishedTasks.map((task) => (
        <motion.div
          key={task.id}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <GridBox>
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
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default CompletedTasks;
