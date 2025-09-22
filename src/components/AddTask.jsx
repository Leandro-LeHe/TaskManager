import React, { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-emerald-50 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Type a task"
        className=" border border-slate-300 outline-green-700 py-2 px-4 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Type a description"
        className="border border-slate- 300 outline-green-700 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          //Verificar se os campos estão preenchidos
          if (!title.trim() || !description.trim()) {
            //return alert("Preencha o título e a descrição da tarefa.");

            if (confirm("ok?")) {
              console.log("ação para deletar");
            }
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-700 hover:text-white hover:shadow-lg
             transition duration-100 hover:scale-102"
      >
        Add a task
      </button>
    </div>
  );
}
export default AddTask;
