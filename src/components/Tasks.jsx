import { CircleCheckBig, ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onDeleteTaskClick, onTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?title=${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full flex itemd-center gap-2 text-white p-2 rounded-md ${
              tasks.isCompleted && "line-through li "
            }`}
          >
            {task.isCompleted && <CircleCheckBig color="#40b329" />}
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-nd text-white hover:bg-slate-500 hover:text-white hover:shadow-lg
             transition duration-300 hover:scale-102"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-nd text-white hover:bg-slate-500 hover:text-white hover:shadow-lg
             transition duration-300 hover:scale-102"
          >
            <Trash2 color="#873b3b" />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
