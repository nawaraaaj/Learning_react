import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Charlie");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("James");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }

  return (
    <>
      <p>Name : {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age : {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>ToggleStatus</button>
    </>
  );
}

export default MyComponent;
