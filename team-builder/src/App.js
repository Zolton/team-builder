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
    {/* <h2> This is team data</h2>
    {teamData.name}
    {teamData.email}
    {teamData.role} */}
    </div>
  );
}

export default App;
