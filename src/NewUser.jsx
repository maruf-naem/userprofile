import { useState } from "react";

const NewUser = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [roll, setRoll] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const url = "http://localhost:3000/students";

  async function pushData() {
    console.log(name, id, roll, phone, email, address);
    let res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ name, id, roll, phone, email, address }),
    });
    res = await res.json()

  }

  return (
    <div className="formContainer">
      <div className="formCard">
        <h2>Add New Student</h2>

        <div className="formGroup">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="id">Student ID</label>
          <input
            id="id"
            type="number"
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="roll">Roll</label>
          <input
            id="roll"
            type="number"
            onChange={(e) => setRoll(e.target.value)}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button className="submitBtn" onClick={pushData}>
          Add Student
        </button>
      </div>
    </div>
  );
};

export default NewUser;
