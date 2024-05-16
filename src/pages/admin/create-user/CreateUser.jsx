import React, { useState } from "react";
import mainUrl from "../../../api";
import { toast } from "react-toastify";

let initialState = {
  firstName: "John",
  lastName: "Doe",
  phoneNumber: "+9998882784041",
  email: "john@gmail.com",
  avatar:
    "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  group: ["n5", "n9"],
};
const CreateUser = () => {
  const [newUser, setNewUser] = useState(initialState);
  console.log(newUser);
  const handleCreate = (e) => {
    e.preventDefault();
    mainUrl
      .post("/users", newUser)
      .then((res) => {
        setNewUser(initialState);
        console.log(res);
        toast.success("User card created");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleCreate} className="form" action="">
        <div className="input__label">
          <label htmlFor="">
            First Name <span className="red__star">*</span>
          </label>
          <input
            required
            value={newUser.firstName}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, firstName: e.target.value }))
            }
            type="text"
          />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Last Name <span className="red__star">*</span>
          </label>
          <input
            required
            value={newUser.lastName}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, lastName: e.target.value }))
            }
            type="text"
          />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Phone Number <span className="red__star">*</span>
          </label>
          <input
            required
            value={newUser.phoneNumber}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
            type="text"
          />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Email <span className="red__star">*</span>
          </label>
          <input
            required
            value={newUser.email}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, email: e.target.value }))
            }
            type="email"
          />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Image URL <span className="red__star">*</span>
          </label>
          <input
            required
            value={newUser.avatar}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, avatar: e.target.value }))
            }
            type="text"
          />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Groups <span className="red__star">*</span>
          </label>
          <input
            required
            value={newUser.group}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, group: e.target.value }))
            }
            type="text"
          />
        </div>
        <button className="create__btn">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
