import React, { useState } from "react";
import "./App.css";
import Form from "./components/Forms";

function App() {
  const [teamData, setTeamData] = useState([{ name: "", email: "", role: "" }]);
  const [memberToEdit, setMemberToEdit] = useState();

  return (
    <div className="App">
      Team Builder App
      <Form setTeamData={setTeamData} setMemberToEdit={setMemberToEdit} teamData={teamData} />
      {console.log("this is team data in App")}
      {console.log({ teamData })}
      <h2> This is the data being passed to App</h2>
      {teamData.map(name=><div>
      <h3>{name.name}</h3>
      <h3>{name.email}</h3>
      <h3>{name.role}</h3></div>
      )}
      {/* <button>Edit Name</button>
      <h3>{teamData.map(email=>
        email.email
        )}</h3>
      <button>Edit email</button>
      <h3>{teamData.map(role=>
        role.role
        )}</h3>
      <button>Edit role</button> */}
    </div>
  );
}

export default App;
