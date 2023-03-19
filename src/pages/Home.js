import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  return (
    <>
      <div>Home</div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <Link to={"/location"} state={{ data: name }}>
        click here to open
      </Link>
    </>
  );
};

export default Home;
