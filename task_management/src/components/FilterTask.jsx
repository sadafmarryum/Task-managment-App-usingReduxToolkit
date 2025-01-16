import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/features/taskSlice";

const FilterTask = () => {
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="filterby">
      <h4>Filter by:</h4>
      <input
        type="radio"
        value="completed"
        onChange={handleFilterChange}
        checked={filter === "completed"}
      />
      <label>Completed</label>

      <input
        type="radio"
        value="pending"
        onChange={handleFilterChange}
        checked={filter === "pending"}
      />
      <label>Pending</label>

      <input
        type="radio"
        value="all"
        onChange={handleFilterChange}
        checked={filter === "all"}
      />
      <label>All Tasks</label>
    </div>
  );
};

export default FilterTask;
