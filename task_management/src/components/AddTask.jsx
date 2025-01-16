import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/reducers/taskSlice";

const AddTask = () => {
  const [inputTask, setInputTask] = useState("");
  const dispatch = useDispatch();

  const handleTasks = (e) => {
    e.preventDefault();

    if (inputTask === "") {
      toast.error("Plz enter any Task");
    } else {
      dispatch(addTask({ id: Date.now(), task: inputTask }));
      toast.success("Task is added");
      setInputTask("");
    }
  };

  return (
    <>
      <ToastContainer />
      <form className="inputButtonDiv" onSubmit={handleTasks}>
        <input
          className="font"
          type="text"
          value={inputTask}
          placeholder="Enter any task here"
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button type="submit">
          <IoMdAdd id="btn-icon" />
        </button>
      </form>
    </>
  );
};

export default AddTask;
