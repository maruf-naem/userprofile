import { useEffect, useState } from "react";

const Userlist = () => {
  const [user, setUserData] = useState([]);
  useEffect(() => {
    userdata();
  }, []);
  const url = "http://localhost:3000/students";

  async function userdata() {
    let res = await fetch(url);
    res = await res.json();
    setUserData(res);
  }

  const [deleteUser, setDeleteUser] = useState()
  console.log(deleteUser);
   async function userDelitation(id) {
    let res = await fetch(`${url}/${id}`, {
      method: "DELETE"
    })
    res = await res.json()
    userdata()
    console.log(id);
    
    
   }
  

  return (
    <div className="usersContainer">
      {user.map((user) => {
        return (
          <div className="userDiv" key={user.id}>
            <h3 className="userName">{user.name}</h3>
            <div className="userIdDiv">
              <p>{user.id}</p>
              <p>{user.roll}</p>
            </div>
            <p className="phon">{user.phone}</p>
            <p className="email">{user.email}</p>
            <p className="address">{user.address}</p>
            <button onClick={()=>{userDelitation(user.id)}}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Userlist;
