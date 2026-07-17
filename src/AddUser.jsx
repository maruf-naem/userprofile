import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const url = "http://localhost:3000/students";
  const [name, setname] = useState("");
  const [roll, setRoll] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  async function addUser(e) {
    e.preventDefault();
    let res = await fetch(url, {
      method: "post",
      body: JSON.stringify({
        name,
        roll,
        phone,
        email,
        address,
      }),
    });
    res = await res.json();
    setname("");
    setRoll("");
    setPhone("");
    setEmail("");
    setAddress("");
    navigate("/userprofile/");
  }
  return (
    <div className="container">
      <div className="formContainer">
        <h2>Add New Student</h2>

        <form>
          <div className="formGroup">
            <label htmlFor="name">Full Name</label>
            <input
              value={name}
              type="text"
              id="name"
              placeholder="Enter full name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="roll">Roll</label>
            <input
              value={roll}
              type="number"
              id="roll"
              placeholder="Enter roll number"
              onChange={(e) => {
                setRoll(e.target.value);
              }}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="phone">Phone</label>
            <input
              value={phone}
              type="tel"
              id="phone"
              placeholder="Enter phone number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              type="email"
              id="email"
              placeholder="Enter email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="address">Address</label>
            <textarea
              value={address}
              id="address"
              rows="4"
              placeholder="Enter address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></textarea>
          </div>

          <button type="submit" onClick={addUser}>
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
