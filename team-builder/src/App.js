import React, { useState } from "react";
import "./App.css";
import Form from "./components/Forms";

function App() {
  const [teamData, setTeamData] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState("");

  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form
        teamData={teamData}
        setTeamData={setTeamData}
        memberToEdit={memberToEdit}
      />

      <h2> This is your team</h2>
      {teamData.map(name => (
        <div>
          <h4>{name.name}</h4>
          <h4>{name.email}</h4>
          <h4>{name.role}</h4>
          <button onClick={() => setMemberToEdit(name)}>
            Edit Team Member name
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
