import React, { memo, useEffect, useState } from "react";
import "./singleItem.scss";
import { useParams } from "react-router-dom";
import axios from "../../api/index";

const SingleItem = () => {
  let { id } = useParams();
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  let singleItem = (
    <div className="single__card">
      <div className="single__card__left">
        <img src={data.thumbnail} alt="" />
      </div>
      <div className="single__card__right">
        <h2>{data.title}</h2>
        <h3>{data.description}</h3>
        <p>Category : {data.category}</p>
        <p>Brand : {data.brand}</p>
        <p>Price : {data.price}$</p>
      </div>
    </div>
  );
  return (
    <section className="single__item container">
      {loading ? (
        <div className="single__loading">
          <div className="single__loading__img bg__animation"></div>
          <div className="single__loading__info">
            <div className="single__loading__item bg__animation"></div>
            <div className="single__loading__item bg__animation"></div>
            <div className="single__loading__item bg__animation"></div>
            <div className="single__loading__item bg__animation"></div>
            <div className="single__loading__item bg__animation"></div>
            <div className="single__loading__item bg__animation"></div>
          </div>
        </div>
      ) : (
        <>
          <h1>Single item</h1>
          {singleItem}
        </>
      )}
    </section>
  );
};

export default memo(SingleItem);
