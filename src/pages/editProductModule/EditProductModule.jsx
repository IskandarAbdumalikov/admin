import React, { Fragment } from "react";
import "./editProduct.scss";
import mainUrl from "../../api";

const EditProductModule = ({ setData, data, setReload }) => {
  function handleEditProduct(e) {
    e.preventDefault();
    let updateProduct = {
      title: data.title,
      description: data.description,
      price: data.price,
      thumbnail: data.thumbnail,
    };
    console.log(updateProduct);
    mainUrl
      .put(`/products/${data.id}`, updateProduct)
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

      <form
        onSubmit={handleEditProduct}
        action=""
        className="edit-product-module"
      >
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, title: e.target.value }))
          }
          required
          value={data.title}
          type="text"
        />
        <input
          required
          onChange={(e) =>
            setData((prev) => ({ ...prev, description: e.target.value }))
          }
          value={data.description}
          type="text"
        />
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, price: e.target.value }))
          }
          required
          value={data.price}
          type="number"
        />
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, thumbnail: e.target.value }))
          }
          required
          value={data.thumbnail}
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

export default EditProductModule;
