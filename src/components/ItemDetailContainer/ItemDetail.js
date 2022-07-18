import ItemCount from "../botones/ItemCount";

const ItemDetail = ({ nombre, img, descripcion, stock, precio, id }) => {
  const onAdd = () => {
    console.log("click");
  };
  return (
    <div className="item">
      <img className="item-img" src={img} alt={nombre} />
      <div>
        <h2 className="item-title">{nombre}</h2>
        <p className="item-description">{descripcion}</p>
        <p className="item-description">Stock: {stock}</p>
        <p className="item-description">{precio} /unidad</p>
      </div>
      <ItemCount stock={stock} initial={1} precio={precio} onAdd={onAdd} />
    </div>
  );
};
export default ItemDetail;
