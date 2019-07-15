import React, { useState } from "react";
import "./App.css";
import Form from "./components/Forms";

function App() {
  const [teamData, setTeamData] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState("");

  return (
    <div className="App">
      Team Builder App
      <Form
        teamData={teamData}
        setTeamData={setTeamData}
        memberToEdit={memberToEdit}
        //setMemberToEdit={setMemberToEdit}
        
      />
      {console.log("this is team data in App")}
      {console.log({ teamData })}
      <h2> This is the data being passed to App</h2>
      {teamData.map(name => (
        <div>
          <h3>{name.name}</h3>
          <h3>{name.email}</h3>
          <h3>{name.role}</h3>
          <button onClick={() => setMemberToEdit(name)}>
            Edit Team Member name
          </button>
          {console.log("This is memberToEdit")}
          {console.log(memberToEdit)}
        </div>
      ))}
      
    </div>
  );
}

export default App;
