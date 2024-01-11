import React from "react";
import { useState } from "react";

function Form() {
  const [users, setUsers] = useState({
    firstName: "",
    lastName: "",
    age: "",
    designation: "",
    id:" "
  });

  function handleOnchange(event) {
    setUsers({
      ...users,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify([]));
    }
    if (localStorage.getItem("lastid") === null) {
      localStorage.setItem("lastid", 0);
    }
    const update="id";
    const updatevalue= localStorage.getItem("lastid")+1;
    localStorage.setItem("lastid",updatevalue);
    const updateobject={...users,[update]:updatevalue,};
   
    
    const array = localStorage.getItem("data");
    const existingArray = array ? JSON.parse(array) : [];
    const newArray = [...existingArray, updateobject];
    localStorage.setItem("data", JSON.stringify(newArray));
    setUsers({ id:" ",firstName: "", lastName: "", age: "", designation: "" ,id:""});
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        First name:{" "}
        <input
          name="firstName"
          value={users.firstName}
          onChange={(e) => handleOnchange(e)}
          required
        />
      </label>
      <hr />
      <label>
        Last name:{" "}
        <input
          name="lastName"
          value={users.lastName}
          onChange={(e) => handleOnchange(e)}
          required
        />
      </label>
      <hr />
      <label>
        Age:{" "}
        <input
          type="number"
          name="age"
          value={users.age}
          onChange={(e) => handleOnchange(e)}
          required
        />
      </label>
      <hr />
      <label>
        designation:{" "}
        <input
          name="designation"
          value={users.designation}
          onChange={(e) => handleOnchange(e)}
          required
        />
      </label>
      <hr />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
