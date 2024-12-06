import React, { useEffect, useState } from "react";
// import TaskUD from "./TaskUD";
import TaskAdd from "./TaskAdd";
import { getCookie, setCookie } from "../../utils/useCookies";
import Task from "../../types/Task";
import { ContentWidth } from "../styles/BasicComponents";

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // get tasks from cookie at load
  useEffect(() => {
    const fetchTasks = () => {
      const toDoTasks = getCookie("todotasks");
      if (toDoTasks) {
        setTasks(JSON.parse(toDoTasks));
      }
    };

    fetchTasks();
  }, []);

  // set cookie data if the task changes
  useEffect(() => {
    setCookie("todotasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <ContentWidth>
        {tasks.length > 0 ? (
          <>
            {tasks.map((task) => (
              <p>{task.task}</p>
            ))}
          </>
        ) : (
          <></>
        )}
      </ContentWidth>
      <ContentWidth>
        <TaskAdd handleAddTask={handleAddTask} />
      </ContentWidth>
    </>
  );
};

export default Tasks;
