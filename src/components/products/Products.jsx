import React, { Fragment, useEffect, useState } from "react";
import "./products.scss";
import axios from "../../api/index";
import { NavLink } from "react-router-dom";
import EditProductModule from "../../pages/editProductModule/EditProductModule";

const Products = ({ data, isAdmin, setReload }) => {
  let [editProduct, setEditProduct] = useState(null);

  const handleDelete = (id) => {
    console.log(id);
    if (confirm("are you sure")) {
      axios
        .delete(`/products/${id}`)
        .then((res) => {
          console.log(res);
          setReload((p) => !p);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  let products = data?.map((el) => (
    <div className="card" key={el.id}>
      <NavLink to={`products/${el.id}`}>
        <img src={el.thumbnail} alt="" />
      </NavLink>
      <div className="card__info">
        <h1>{el.title}</h1>
        <p>{el.price} $</p>
        <p>{el.description}</p>
        <h3>{el.brand}</h3>
        {isAdmin ? (
          <div className="card__btns">
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
      <div className="wrapper">{products}</div>
      {editProduct ? (
        <EditProductModule
          setData={setEditProduct}
          data={editProduct}
          setReload={setReload}
        />
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default Products;
