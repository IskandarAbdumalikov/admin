import React, { Fragment } from "react";
import "./editUserModule.scss";
import mainUrl from "../../api";

const EditUserModule = ({ setData, data, setReload }) => {
  function handleEditUser(e) {
    e.preventDefault();
    let uptadeUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      avatar: data.avatar,
    };
    console.log(uptadeUser);
    mainUrl
      .put(`/users/${data.id}`, uptadeUser)
      .then((res) => {
        setData(null);
        console.log(res);
        setReload((p) => !p);
      })
      .catch((err) => console.log(err));
  }
  return (
    <Fragment>
      <div onClick={() => setData(null)} className="overlay"></div>

      <form onSubmit={handleEditUser} action="" className="edit-product-module">
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, firstName: e.target.value }))
          }
          required
          value={data.firstName}
          type="text"
        />
        <input
          required
          onChange={(e) =>
            setData((prev) => ({ ...prev, lastName: e.target.value }))
          }
          value={data.lastName}
          type="text"
        />
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
          required
          value={data.email}
          type="email"
        />
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
          required
          value={data.phoneNumber}
          type="text"
        />
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, avatar: e.target.value }))
          }
          required
          value={data.avatar}
          type="text"
        />
        <button>Save</button>
        <h1 onClick={() => setData(null)} className="close__module-btn">
          X
        </h1>
      </form>
    </Fragment>
  );
};

export default EditUserModule;
