import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import CompletedTasks from "./CompletedTasks";
import UDTasks from "./UDTasks";
import Task from "../../types/Task";
import { getCookie, setCookie } from "../../utils/useCookies";

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(getCookie("todotasks") || "[]")
  );
  const [finishedTasks, setFinishedTasks] = useState<Task[]>(
    JSON.parse(getCookie("finishedtasks") || "[]")
  );

  // Update todotasks cookies
  useEffect(() => {
    setCookie("todotasks", JSON.stringify(tasks));
  }, [tasks]);

  // update finishedtasks cookies
  useEffect(() => {
    setCookie("finishedtasks", JSON.stringify(finishedTasks));
  }, [finishedTasks]);

  // Add a new task
  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Delete a task from todo list
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setFinishedTasks((prevFinishedTasks) =>
      prevFinishedTasks.filter((task) => task.id !== id)
    );
  };

  // Move a task to finished list
  const moveToFinished = (task: Task) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
    setFinishedTasks((prevFinished) => [
      ...prevFinished,
      { ...task, completed: true },
    ]);
  };

  // Update a task
  const updateTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // Move a task back to todo list from finished list
  const moveToTodo = (task: Task) => {
    setFinishedTasks((prevFinished) =>
      prevFinished.filter((t) => t.id !== task.id)
    );
    setTasks((prevTasks) => [...prevTasks, { ...task, completed: false }]);
  };

  return (
    <>
      <UDTasks
        tasks={tasks}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
        onMoveToFinished={moveToFinished}
      />
      <AddTask onAddTask={addTask} />
      <CompletedTasks
        finishedTasks={finishedTasks}
        onMoveToDo={moveToTodo}
        onDeleteTask={deleteTask}
      />
    </>
  );
};

export default Tasks;
