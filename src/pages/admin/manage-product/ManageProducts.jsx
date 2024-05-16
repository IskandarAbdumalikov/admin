import { useState } from "react";
import Products from "../../../components/products/Products"
import useFetch from "../../../hooks/useFetch"
import Loading from "../../../components/loading/Loading";


const ManageProducts = () => {
  const [reload,setReload] = useState(false)
  let { data, loading, error } = useFetch("/products",reload);
  return (
    <div>
      {loading?<Loading/>:<></>}
      <Products isAdmin={true} setReload={setReload} data={data} />
    </div>
  );
}

export default ManageProducts