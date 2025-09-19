import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Alert from "./components/Alert";

function App() {
  const [isLoadding, setIsLoadding] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "learning math",
      description: "LearningDev",
      isCompleted: false,
    },

    {
      id: "2",
      title: "learning portuguese",
      description: "LearningDev2",
      isCompleted: false,
    },

    {
      id: "3",
      title: "learning english",
      description: "LearningDev3",
      isCompleted: false,
    },
  ]);

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    setIsLoadding(true);
    const newTask = {
      id: String(tasks.length + 1),
      title /*object shorthand */,
      description /*object shorthand */,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);

    setTimeout(() => {
      setIsLoadding(false);
    }, 2500);
  }

  return (
    <div className="w-screen h-screen bg-green-700 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Task Manager
        </h1>

        {isLoadding && (
          <Alert
            message={"Operação realizada com sucesso"}
            color={"blue"}
            title={"Tudo certo!"}
          />
        )}

        <div
          className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
          role="alert"
        >
          <p className="font-bold">Informational message</p>
          <p className="text-sm">
            Some additional text to explain said message.
          </p>
        </div>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
