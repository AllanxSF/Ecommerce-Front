import ProductoEditForm from "../molecules/ProductoEditForm";
import Button from "../atoms/Button";

function ProductoEditCard({ producto, handleChange, guardar, volver }) {
  return (
    <div className="edit-card">

      <h1>Edición de Producto</h1>

      <ProductoEditForm producto={producto} handleChange={handleChange} />

      <div className="botones">
        <Button className="btn-volver" onClick={volver}>
          Volver
        </Button>

        <Button className="btn-guardar" onClick={guardar}>
          Guardar
        </Button>
      </div>

    </div>
  );
}

export default ProductoEditCard;
