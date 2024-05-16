import React from "react";
import Users from "../../../components/users/Users";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";
import Loading from "../../../components/loading/Loading";

const ManageUsers = () => {
  const [reload, setReload] = useState(false);
  let { data, loading, error } = useFetch("/users", reload);
  return (
    <div>
      {loading ? <Loading /> : <></>}
      <Users isAdmin={true} setReload={setReload} data={data} />
    </div>
  );
};

export default ManageUsers;
