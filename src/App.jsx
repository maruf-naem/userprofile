import { NavLink, Route, Routes } from "react-router-dom";
import Users from "./Users";
import AddUser from "./AddUser";


const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/userprofile/">Users</NavLink>
        </li>
        <li>
          <NavLink to=" /userprofile/add-user">Add Users</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/userprofile" element={<Users />} />
        <Route path=" /userprofile/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
};

export default App;
