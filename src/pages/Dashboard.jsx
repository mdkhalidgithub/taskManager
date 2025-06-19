import React from "react";
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import Footer from '../components/Footer';

function Dashboard() {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (task) => setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));
  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const editTask = (id, newTask) => setTasks(tasks.map(t => t.id === id ? { ...t, ...newTask } : t));

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Dashboard</h2>
        <TaskForm onAdd={addTask} />
        <div className="mt-6 space-y-4">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleTask}
              onEdit={editTask}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
