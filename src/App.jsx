import "./App.css";
import CardList from "./components/CardList";
import { robots } from "./robots";
import SearchBox from "./components/SearchBox";
import { useEffect, useState } from "react";

const App = () => {
  const [robotState, setRobotState] = useState({
    robots: robots,
    searchField: "",
  });

  const onSearchChange = (event) => {
    setRobotState({ ...robotState, searchField: event.target.value });
  };

  const filteredRobots = robotState.robots.filter((robot) => {
    return robot.name
      .toLowerCase()
      .includes(robotState.searchField.toLowerCase());
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((post) => console.log(post));
  }, []);

  return (
    <div className="main-container">
      <div className="nav-container">
        <h1>ROBOFRIENDS</h1>
        <SearchBox searchChange={onSearchChange} />
      </div>
      <div className="card-container">
        <CardList robots={filteredRobots} />
      </div>
    </div>
  );
};

export default App;
