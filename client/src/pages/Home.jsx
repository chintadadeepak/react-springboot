import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h3 className="heading">Welcome to Talent-Hiring</h3>
      <button onClick={() => navigate("hire-talent")}>Hire-Talent</button>
      <button onClick={() => navigate("need-talent")}>Add a New Job</button>
    </div>
  );
}

export default Home;
