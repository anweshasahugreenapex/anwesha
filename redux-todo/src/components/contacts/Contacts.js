import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

const Contacts = () => {
  const contacts = useSelector((state) => state.contact.contacts); //get the state of contacts from the store

  return (
    //return the contact list with header and all current contacts
    <div>
      <table className="table shadow" style={{ marginTop: "100px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>age</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
