import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
export default function TaskBoard() {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTasks]);
  const [showAddModal, setShowAddModal] = useState(false);

  function handleAddTask(newTask) {
    console.log("TAsk add click", newTask);
    setTasks([...tasks, newTask]);
    setShowAddModal(false);
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModal && <AddTaskModal onSave={handleAddTask} />}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction onAddClick={() => setShowAddModal(true)} />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
}
