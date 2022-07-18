import { Link } from "react-router-dom";
const Item = ({ item, id }) => {
  return (
    <div className="item">
      <img className="item-img" src={item.img} alt="" />
      <div>
        <h2 className="item-title">{item.nombre}</h2>
        <p className="item-description">{item.descripcion}</p>
      </div>
      <div>
        <Link to={`/item/:${id}`}>
          <button>Ver producto</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
