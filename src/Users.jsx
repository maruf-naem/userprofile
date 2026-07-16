import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [userdata, setUserData] = useState([]);
  const navigate = useNavigate();
  const url = "http://localhost:3000/students";
  async function usersData() {
    let response = await fetch(url);
    response = await response.json();
    setUserData(response);
  }

  useEffect(() => {
    usersData();
  }, []);

  async function deleting(id) {
    const url = "http://localhost:3000/students";
    const idurl = `${url}/${id}`;
    let res = await fetch(idurl, {
      method: "delete",
    });
    usersData();
  }

  function editing(id) {
    const url = "http://localhost:3000/students";
    navigate("/userprofile/edit/" + id);
  }

  return (
    <div className="container">
      <div className="studentGrid">
        {userdata.map((user) => {
          return (
            <div className="studentCard" key={user.id}>
              <div>
                <span className="studentId">{user.id}</span>
                <h2 className="studentName">{user.name}</h2>
                <div className="studentInfo">
                  <p>
                    <strong>Roll: {user.roll}</strong>
                  </p>

                  <p>
                    <strong>Phone: {user.phone}</strong>
                  </p>

                  <p>
                    <strong>Email: {user.email}</strong>
                  </p>

                  <p>
                    <strong>Address: {user.address}</strong>
                  </p>
                </div>

                <div className="studentBtn">
                  <button
                    className="editBtn"
                    onClick={() => {
                      editing(user.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="deleteBtn"
                    onClick={() => {
                      deleting(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
