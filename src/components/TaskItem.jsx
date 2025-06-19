import { useState } from 'react';

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDesc, setEditedDesc] = useState(task.description);

  const handleEdit = () => {
    onEdit(task.id, { title: editedTitle, description: editedDesc });
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      {isEditing ? (
        <>
          <input
            className="border p-1 w-full mb-2"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className="border p-1 w-full mb-2"
            value={editedDesc}
            onChange={(e) => setEditedDesc(e.target.value)}
          ></textarea>
          <button onClick={handleEdit} className="text-blue-500 mr-4">Save</button>
          <button onClick={() => setIsEditing(false)} className="text-gray-500">Cancel</button>
        </>
      ) : (
        <>
          <h3 className={`text-xl font-semibold ${task.completed ? 'line-through text-green-600' : ''}`}>
            {task.title}
          </h3>
          <p className={`${task.completed ? 'line-through' : ''}`}>{task.description}</p>
          <div className="mt-2 space-x-4">
            <button onClick={() => onToggle(task.id)} className="text-sm text-indigo-600">
              Mark as {task.completed ? 'Incomplete' : 'Complete'}
            </button>
            <button onClick={() => setIsEditing(true)} className="text-sm text-yellow-600">
              Edit
            </button>
            <button onClick={() => onDelete(task.id)} className="text-sm text-red-600">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
