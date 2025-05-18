//imports
import React, { useState } from "react";
import InputTask from "../inputTask/InputTask";
import TaskList from "../taskList/TaskList";

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  const handleNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCompletedTask = (id) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, complete: true } : task))
    );
  };

  const handleEditTask = (id, newTask) => {
    setTasks(tasks.map((task) => (task.id === id ? newTask : task)));
  };

  return (
    <div className="flex flex-col sm:flex-row sm:pl-10 gap-20 min-h-screen">
      <div className="sm:w-[300px] p-2 w-full">
        <InputTask handleNewTask={handleNewTask} />
      </div>
      <div className="flex-1 bg-[#85B8CB] p-4">
        <h1 className="text-4xl mb-10 text-[#1D232A]">Task List</h1>
        <TaskList
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleCompletedTask={handleCompletedTask}
          handleEditTask={handleEditTask}
        />
      </div>
    </div>
  );
};

export default TaskPage;
