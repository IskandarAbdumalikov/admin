import React from "react";
import "./products.scss";
import axios from "../../api/index";
import { NavLink } from "react-router-dom";

const Products = ({ data, isAdmin, setReload }) => {
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
  let products = data?.map((el) => (
    <div className="card" key={el.id}>
      <NavLink to={`products/${el.id}`}>
        <img src={el.thumbnail} alt="" />
      </NavLink>
      <div className="card__info">
        <h1>{el.brand}</h1>
        <p>{el.price} $</p>
        <p>{el.description}</p>
        <h3>{el.title}</h3>
        {isAdmin ? (
          <div className="card__btns">
            <button className="edit__btn">Edit</button>
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
  return <div className="wrapper">{products}</div>;
};

export default Products;
