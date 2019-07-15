import React, { useState } from "react";

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

  const submitHandler = (event) => {
      event.preventDefault();
      console.log("this is userData being passed to the submit Handler")
        console.log(userData);
        props.setTeamData(userData);
  }

  return (
    <>
      <div>Hello from Forms</div>
      <form onSubmit = {submitHandler}>
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
        <h2>This is the data being passed into Forms</h2>
      <h3>{userData.name}</h3>
      <h3> {userData.email}</h3>
      <h3>{userData.role}</h3>

    </>
  );
}

export default Form;
