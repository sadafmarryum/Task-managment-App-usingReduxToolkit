import React, { useState } from "react";
import { toast } from "react-toastify";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask, toggleStatus } from "../redux/reducers/taskSlice";
import { selectFilteredTasks } from "../redux/reducers/taskSlice";

const TaskList = () => {
  const tasks = useSelector(selectFilteredTasks);
  const dispatch = useDispatch();

  const [editingTask, setEditingTask] = useState("");
  const [newTask, setNewTask] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    toast.info("Task is deleted");
  };

  const handleEdit = (id, task, e) => {
    e.stopPropagation();
    setEditingTask(id);
    setNewTask(task);
  };

  const handleSave = (id,e) => {
     e.stopPropagation();
    if (newTask !== "") {
      dispatch(editTask({ id, updatedTask: newTask }));
      setEditingTask("");
      setNewTask("");
      toast.success("Task is updated");
    }
  };

  const handleSingleClick = (id) => {
    dispatch(toggleStatus(id));
  };

  const handleDoubleClick = (id) => {
    dispatch(toggleStatus(id));
  };

  return (
    <div className="todolist">
      <h3>List of Tasks</h3>
      <ul className="listparent">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li
              key={task.id}
              onClick={() => handleSingleClick(task.id)}
              onDoubleClick={() => handleDoubleClick(task.id)}
              style={{
                border: "4px solid white",
                borderColor: task.status === "Completed" ? "green" : "#f4f1eb",
                cursor: "pointer",
              }}
            >
              {editingTask === task.id ? (
                <div className="edit">
                  <input
                    style={{ fontSize: "17px", padding: 0 }}
                    className="font"
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onClick={(e)=>e.stopPropagation()}
                  />
                  <button onClick={(e) => handleSave(task.id, e)}>
                    <MdFileDownloadDone id="save-icon" />
                  </button>
                </div>
              ) : (
                <>
                  {index + 1} - {task.task} - {task.status}
                  <div className="listIcons">
                    <FaEdit onClick={(e) => handleEdit(task.id, task.task, e)} />
                    <RiDeleteBin5Fill onClick={() => handleDelete(task.id)} />
                  </div>
                </>
              )}
            </li>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
