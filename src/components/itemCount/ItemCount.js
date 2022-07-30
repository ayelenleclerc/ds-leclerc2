import "./itemCount.css";
import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const restar = () => {
    if (count > initial) {
      setCount(count - 1);
    }

    // count > initial && setCount(count - 1);
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="counter">
      <div className="counter-btn">
        <div className="masMenos">
          <button className="counter-btn-btb" onClick={restar}>
            -
          </button>
          <p className="counter-display">{count}</p>
          <button className="counter-btn-btb" onClick={sumar}>
            +
          </button>
        </div>
        <div className="agregar">
          <button className="add-btn" onClick={() => onAdd(count)}>
            Agregar al Suegri-Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
