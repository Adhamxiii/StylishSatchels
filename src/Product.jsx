import React from "react";
import { HiOutlineMinusSm, HiOutlinePlusSm, HiOutlineX } from "react-icons/hi";
import { useGlobalContext } from "./context";

const Product = ({ id, image, description, price, amount }) => {
  const { remove, toggleAmount } = useGlobalContext();

  return (
    <div className="table-row">
      <div className="table-cell-image">
        <img src={image} alt={description} />
      </div>
      <div className="table-cell-description">{description}</div>
      <div className="table-cell-quantity">
        <HiOutlineMinusSm
          onClick={() => toggleAmount(id, "dec")}
          className="minusIcon"
        />
        <span>{amount}</span>
        <HiOutlinePlusSm
          onClick={() => toggleAmount(id, "inc")}
          className="plusIcon"
        />
      </div>
      <div className="table-cell-price">${price}</div>
      <div className="table-cell-delete" onClick={() => remove(id)}>
        <HiOutlineX />
      </div>
    </div>
  );
};

export default Product;
