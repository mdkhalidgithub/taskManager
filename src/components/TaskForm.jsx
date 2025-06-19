import { useState } from 'react';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return;
    onAdd({ title, description: desc });
    setTitle('');
    setDesc('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Task Title"
        className="p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        className="p-2 border rounded"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
