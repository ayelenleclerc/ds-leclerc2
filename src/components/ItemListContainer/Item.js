import { Link } from "react-router-dom";
const Item = ({ nombre, img, id, descripcion }) => {
  return (
    <div className="item">
      <img className="item-img" src={img} alt={nombre} />
      <div>
        <h2 className="item-title">{nombre}</h2>
        <p className="item-description">{descripcion}</p>
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
