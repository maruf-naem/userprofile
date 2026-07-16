import { NavLink, Route, Routes } from "react-router-dom";
import Users from "./Users";
import AddUser from "./AddUser";
import Edit from "./Edit";


const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/userprofile/">Users</NavLink>
        </li>
        <li>
          <NavLink to="userprofile/add-user">Add Users</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/userprofile" element={<Users />} />
        <Route path="userprofile/add-user" element={<AddUser />} />
        <Route path="/userprofile/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
