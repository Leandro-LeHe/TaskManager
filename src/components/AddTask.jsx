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
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Add a task
      </button>
    </div>
  );
}
export default AddTask;
