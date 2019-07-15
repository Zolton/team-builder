import React, { useState } from "react";

function Form() {
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

  return (
    <>
      <div>Hello from Forms</div>
      <form>
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
      </form>
    </>
  );
}

export default Form;
