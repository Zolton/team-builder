import React, { useState, useEffect } from "react";

function Form(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: ""
  });

  const changeHandler = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    // I understand what's going on here , but ....
    //  This logic is beyond anything I've had to do before, even in a build week,
    // Needed a loooot of help.  This should never have been part of any daily project

    // In a nutshell - creates IndexNumber as a unique ID, then measures if the index number
    // in the input field is equivalent to an existing indexNumber.  If so, replace it, if not,
    // add it as a new user
    if (props.memberToEdit) {
      // if props is populated with data, map over teamData
      let updated = props.teamData.map(member => {
        // if the index member of teamData is equal to the props from memberToEdit...
        if (member.indexNumber === props.memberToEdit.indexNumber) {
          // send back the userData
          return userData;
        } else {
          //otherwise replace it with the new member data
          return member;
        }
      });
      // if props isn't populated, setTeamData as props.TeamData - send it back
      props.setTeamData([...updated]);
    } else {
      // This is the if-statement for normal people entry
      // if memberToEdit is false, no button was clicked
      //  So just send in Team data and tack on the new user data
      props.setTeamData([
        ...props.teamData,
        { ...userData, indexNumber: props.teamData.length }
      ]);
    }
  };

  useEffect(() => {
    if (props.memberToEdit) {
      setUserData({
        name: props.memberToEdit.name,
        email: props.memberToEdit.email,
        role: props.memberToEdit.role
      });
    }
  }, [props.memberToEdit]);

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Enter username"
          onChange={changeHandler}
          value={userData.name}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          onChange={changeHandler}
          value={userData.email}
        />
        <input
          type="text"
          name="role"
          placeholder="Enter role"
          onChange={changeHandler}
          value={userData.role}
        />
        <button>Submit</button>
      </form>
      <h2>This is what you're about to submit</h2>
      <h3>{userData.name}</h3>
      <h3> {userData.email}</h3>
      <h3>{userData.role}</h3>
    </>
  );
}

export default Form;
