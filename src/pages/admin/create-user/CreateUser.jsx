import React, { useRef } from "react";
import mainUrl from "../../../api";
import { toast } from "react-toastify";

const CreateUser = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();
  const groupRef = useRef();

  const handleCreate = (e) => {
    e.preventDefault();

    const newUser = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      email: emailRef.current.value,
      avatar: avatarRef.current.value,
      group: groupRef.current.value.split(","),
    };

    mainUrl
      .post("/users", newUser)
      .then((res) => {
        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        phoneNumberRef.current.value = "";
        emailRef.current.value = "";
        avatarRef.current.value = "";
        groupRef.current.value = "";
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
          <input ref={firstNameRef} required type="text" />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Last Name <span className="red__star">*</span>
          </label>
          <input ref={lastNameRef} required type="text" />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Phone Number <span className="red__star">*</span>
          </label>
          <input ref={phoneNumberRef} required type="text" />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Email <span className="red__star">*</span>
          </label>
          <input ref={emailRef} required type="email" />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Image URL <span className="red__star">*</span>
          </label>
          <input ref={avatarRef} required type="text" />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Groups <span className="red__star">*</span>
          </label>
          <input ref={groupRef} required type="text" />
        </div>
        <button className="create__btn">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
