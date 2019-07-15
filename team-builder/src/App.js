import React, { useState } from "react";
import "./App.css";
import Form from "./components/Forms";

function App() {

const [teamData, setTeamData] = useState({name: "", email: "", role: ""})

  return (
    <div className="App">
      Team Builder App
      <Form setTeamData={setTeamData} />
      {console.log("this is team data in App"),
    console.log({teamData})}
    <h2> This is the data being passed to App</h2>
    <h3>{teamData.name}</h3>
    <h3>{teamData.email}</h3>
    <h3>{teamData.role}</h3>
    </div>
  );
}

export default App;
