
import React, { useRef } from "react";
import "./createProduct.scss";
import mainUrl from "../../../api";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const brandRef = useRef();
  const thumbnailRef = useRef();

  const handleCreate = (e) => {
    e.preventDefault();

    const newProduct = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      price: parseFloat(priceRef.current.value),
      thumbnail: thumbnailRef.current.value,
      brand: brandRef.current.value,
    };

    mainUrl
      .post("/products", newProduct)
      .then((res) => {
        titleRef.current.value = "";
        descriptionRef.current.value = "";
        priceRef.current.value = "";
        thumbnailRef.current.value = "";
        brandRef.current.value = "";
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
          <input ref={titleRef} required type="text" />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Description <span className="red__star">*</span>
          </label>
          <input ref={descriptionRef} required type="text" />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Price <span className="red__star">*</span>
          </label>
          <input ref={priceRef} required type="number" />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Brand <span className="red__star">*</span>
          </label>
          <input ref={brandRef} required type="text" />
        </div>
        <div className="input__label">
          <label htmlFor="">
            Image URL <span className="red__star">*</span>
          </label>
          <input ref={thumbnailRef} required type="text" />
        </div>
        <div className="input__label">
          <label htmlFor="">Button</label>
          <button className="create__btn">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
