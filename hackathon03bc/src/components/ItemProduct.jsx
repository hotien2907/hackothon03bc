import React from "react";

function ItemProduct({ itemProduct, handleCart }) {
  const handleClickUpCart = (e) => {
    handleCart(e, "ADD");
  };
  return (
    <div className="item_product">
      <img src={itemProduct.image} alt="" />
      <div className="content">
        <div className="name_content" style={{ fontWeight: "600" }}>
          {itemProduct.title}
        </div>
        <div className="price" style={{ fontWeight: "600"}}>
          $ {itemProduct.price.toLocaleString()}
        </div>
      </div>

      <div className="app_Cart">
        <button className="down">Interest</button>

        <button className="add" onClick={() => handleClickUpCart(itemProduct)}>
          Add
        </button>
      </div>
    </div>
  );
}

export default ItemProduct;
