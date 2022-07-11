const style = {
  boton: {
    width: "30px",
    height: "30px",
    border: "none",
    color: " #3C91E6",
    fontSize: "18px",
  },
};
const BotonCount = ({ operacion, funcion }) => {
  return (
    <button style={style.boton} onClick={funcion}>
      {operacion}
    </button>
  );
};

export default BotonCount;
