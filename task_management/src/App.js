import "./index.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import FilterTask from "./components/FilterTask";


function App() {
  return (
    <div className="app font">
      <h1> Task Management App</h1>
      <AddTask />
      <FilterTask />
      <TaskList />
    </div>
  );
}

export default App;
