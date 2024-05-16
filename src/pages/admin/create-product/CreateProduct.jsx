import React, { useState } from "react";
import "./createProduct.scss";
import mainUrl from "../../../api";
import { toast } from "react-toastify";
let initialState = {
  title: "Iphone 15",
  description: "smart and metal",
  price: "1500",
  thumbnail:
    "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
  brand: "IPHONE",
};

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState(initialState);
  console.log(newProduct);

  const handleCreate = (e) => {
    e.preventDefault();
    mainUrl
      .post("/products", newProduct)
      .then((res) => {
        setNewProduct(initialState);
        console.log(res);
        toast.success("GOOD JOB");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleCreate} className="form" action="">
        <div className="input__label">
          <label htmlFor="">
            Title <span className="red__star">*</span>
          </label>
          <input
            required
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, title: e.target.value }))
            }
            type="text"
          />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Description <span className="red__star">*</span>
          </label>
          <input
            required
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            type="text"
          />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Price <span className="red__star">*</span>
          </label>
          <input
            required
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, price: +e.target.value }))
            }
            type="number"
          />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Brand <span className="red__star">*</span>
          </label>
          <input
            required
            value={newProduct.brand}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, brand: e.target.value }))
            }
            type="text"
          />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Image URL <span className="red__star">*</span>
          </label>
          <input
            required
            value={newProduct.thumbnail}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, thumbnail: e.target.value }))
            }
            type="text"
          />
        </div>
        <button className="create__btn">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
