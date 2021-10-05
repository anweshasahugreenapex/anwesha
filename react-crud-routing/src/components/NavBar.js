import { useState } from "react";
import * as Bs from "react-icons/bs";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as FcIcons from "react-icons/fc";
import "./NavBar.css";
import EditUserForm from "./EditUserForm";
import Popup from "./Popup";
import UserTable from "./UserTable";

const NavBar = (props) => {
  const usersData = [];

  //set initial values of the form
  const initialFormState = {
    id: null,
    fname: "",
    lname: "",
    email: "",
    age: "",
  };

  const [openPopup, setOpenPopup] = useState(false);
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [view, setView] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  //function to addnew user
  const addUser = (user) => {
    setEditing(false);
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  //function to delete user
  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  //function to edit user
  const editRow = (user) => {
    setView(false);
    setEditing(true);
    setOpenPopup(true);
    setCurrentUser(user);
  };

  //function to view user
  const viewUser = (user) => {
    setView(true);
    console.log(user);
    setOpenPopup(true);
    setCurrentUser(user);
  };

  //function to update user
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#ffffff" }}>
        <div className="NavBar">
          <div className="searchBar">
            <div className="searchIcon">
              <Bs.BsSearch
                style={{
                  height: " 10rem",
                  width: "20px",

                  cursor: "pointer",
                }}
              />
            </div>

            <input type="text" placeholder="search.." />
          </div>
        </div>
        <nav className={"nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars"></Link>
            </li>
            <li key="1" className="nav-text">
              <Link to="/">
                <FaIcons.FaHome />
                <span style={{ marginLeft: "8px" }}>Home</span>
              </Link>
            </li>
            <li key="2" className="nav-text">
              <Link to="/dashboard">
                <FiIcons.FiUsers />
                <span
                  style={{ marginLeft: "8px" }}
                  onClick={() => setOpenPopup(true)}
                >
                  Adduser
                </span>
              </Link>
            </li>
            <li key="3" className="nav-text">
              <Link to="/about">
                <FcIcons.FcAbout />
                <span style={{ marginLeft: "8px" }}>About</span>
              </Link>
            </li>
            )
          </ul>
        </nav>
      </IconContext.Provider>

      <UserTable //add table with props
        users={users}
        editRow={editRow}
        deleteUser={deleteUser}
        viewUser={viewUser}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      />
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <EditUserForm
          editing={editing}
          setEditing={setEditing}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          updateUser={updateUser}
          addUser={addUser}
          view={view}
          setView={setView}
        />
      </Popup>
    </>
  );
};

export default NavBar;
