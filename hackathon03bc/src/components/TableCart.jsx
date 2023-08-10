import React, { useEffect } from "react";

function TableCart({ cart, handleDeleleCartObj, handleUpdate, total }) {
  const handleUp = (e) => {
    handleUpdate(e, "UP");
  };
  const handleDown = (e) => {
    handleUpdate(e, "DOWN");
  };
  const handleDelete = (item) => {
    handleDeleleCartObj(item);
  };

  return (
    <table class="styled-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>

          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, i) => (
          <tr key={i} class="style-table">
            <td>{i + 1}</td>
            <td>{item.title}</td>
            <td>
              <img src={item.image} alt="" />
            </td>
            <td>
              <button
                onClick={() => handleDown(item)}
                disabled={item.quantity <= 1}
              >
                <i class="fa-solid fa-minus"></i>
              </button>
              <span style={{ margin: "10px" }}>{item.quantity}</span>
              <button onClick={() => handleUp(item)}>
                <i class="fa-solid fa-plus"></i>
              </button>
            </td>
            <td>{item.price}</td>

            <td>
              <button onClick={() => handleDelete(item)} class="btn-denger">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <h1 style={{ marginTop: "20px", textAlign: "center", color: "blue" }}>
        Tổng tiền:{total.toLocaleString()}$
      </h1>
    </table>
  );
}

export default TableCart;
