import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Alert from "./components/Alert";
import { alertService } from "./services/alertservices";

function App() {
  const [isLoadding, setIsLoadding] = useState(false);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onDeleteTaskClick(taskId) {
    alertService.confirme().then((res) => {
      if (res.isConfirmed) {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(newTasks);
        alertService.success("Registro deletado com sucesso");
      } else {
        alertService.warning("Operação cancelada");
      }
    });

    // alertService.info("Operação cancelada com sucesso");
    // alert("Operação cancelada");
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

    alertService.success("Task adicionado com sucesso");

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
