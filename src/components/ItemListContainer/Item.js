import "./itemList.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="item">
      <img className="item-img" src={item.img} alt={item.nombre} />
      <div>
        <h2 className="item-title">{item.nombre}</h2>
        <p className="item-description">{item.descripcion}</p>
      </div>
      <div>
        <Link to={`/item/${item.id}`}>
          <button className="item-btn">Ver Suegra</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
