import { IoIosMenu } from "react-icons/io";
import React from 'react'

const AdminHeader = ({setClose}) => {
  return (
    <div className="admin__header">
      <button className="hamburger" onClick={() => setClose((p) => !p)}>
        <IoIosMenu />
      </button>
      <div className="image__profile">
        <p>John doe</p>
        <img
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default AdminHeader