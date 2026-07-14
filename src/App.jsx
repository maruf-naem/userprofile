import { NavLink, Route, Routes } from "react-router-dom";
import NewUser from "./NewUser";
import Userlist from "./Userlist";

const App = () => {
  return (
    <div>
      <div className="header ">
        <ul className="menu">
          <li className="menuItem">
            <NavLink to="/user-list">User List</NavLink>
          </li>
          <li className="menuItem">
            <NavLink to="/new-user">New User</NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/user-list" element={<Userlist />} />
        <Route path="/new-user" element={<NewUser />} />
      </Routes>
    </div>
  );
};

export default App;
