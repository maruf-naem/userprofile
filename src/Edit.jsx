import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/students";
  let newUrl = `${url}/${id}`;
  const [name, setname] = useState("");
  const [roll, setRoll] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  async function editData() {
    let res = await fetch(newUrl);
    res = await res.json();
    setname(res.name);
    setRoll(res.roll);
    setPhone(res.phone);
    setEmail(res.email);
    setAddress(res.address);
    console.log(name, roll);
  }

  useEffect(() => {
    editData();
  }, []);

  async function updateData(e) {
    e.preventDefault();
    let res = await fetch(newUrl, {
      method: "put",
      body: JSON.stringify({name, roll, phone, email, address})
    })
    res = await res.json()
    console.log(name, roll, phone, email, address);
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

          <button type="submit" onClick={updateData}>
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
