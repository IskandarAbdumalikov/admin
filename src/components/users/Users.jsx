import React, { Fragment, useState } from "react";
import "./users.scss";
import axios from "../../api/index";
import EditUserModule from "../../pages/editUserModule/editUserModule";

const Users = ({ data, isAdmin, setReload }) => {
  let [editUser, setEditUser] = useState(null);

  const handleDelete = (id) => {
    console.log(id);
    if (confirm("are you sure")) {
      axios
        .delete(`/users/${id}`)
        .then((res) => {
          console.log(res);
          setReload((p) => !p);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  let Users = data?.map((el) => (
    <div className="user__card" key={el.id}>
      <img src={el.avatar} alt="" />
      <div className="user__card__info">
        <h1 style={{ textWrap: "nowrap" }} className="userName">
          {el.firstName} {el.lastName}
        </h1>
        <h2>ID : {el.id}</h2>
        <p>{el.birthDate}</p>
        <p>{el.email}</p>
        <p>{el.phoneNumber}</p>
        {isAdmin ? (
          <div className="user__card__btns">
            <button onClick={() => handleEdit(el)} className="edit__btn">
              Edit
            </button>
            <button onClick={() => handleDelete(el.id)} className="delete__btn">
              Delete
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  ));
  return (
    <Fragment>
      <div className="user__wrapper">{Users}</div>
      {editUser ? (
        <EditUserModule
          setData={setEditUser}
          data={editUser}
          setReload={setReload}
        />
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default Users;
