import React, { useEffect, useState } from "react";
// import TaskUD from "./TaskUD";
import TaskAdd from "./TaskAdd";
import { getCookie } from "../../utils/useCookies";
import Task from "../../types/Task";
import { ContentWidth } from "../styles/BasicComponents";

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // get tasks from cookie
  const fetchTasks = () => {
    const toDoTasks = JSON.parse(getCookie("todotasks") || "[]");
    setTasks(toDoTasks);
  };

  useEffect(() => {
    fetchTasks();

    window.addEventListener("taskUpdated", fetchTasks);
    return () => {
      window.removeEventListener("taskUpdated", fetchTasks);
    };
  }, []);

  return (
    <>
      <ContentWidth sx={{ flexDirection: "column" }}>
        {tasks.length > 0 ? (
          <>
            {tasks.map((task) => (
              <ul>
                <li key={task.id}>{task.task}</li>
              </ul>
            ))}
          </>
        ) : (
          <></>
        )}
      </ContentWidth>
      <ContentWidth>
        <TaskAdd />
      </ContentWidth>
    </>
  );
};

export default Tasks;
