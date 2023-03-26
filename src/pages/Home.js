import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [name, setName] = useState("");
  return (
    <div className="home-container">
      <input
        className="input-container"
        type="text"
        placeholder="Enter the name"
        onChange={(e) => setName(e.target.value)}
      />
      <Link to={"/location"} state={{ data: name }}>
        <button>Enter</button>
      </Link>
      <Link to={"/status"}>
        <button>Status</button>
      </Link>
    </div>
  );
};

export default Home;
