import React from "react";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

function ProductoCard({ producto }) {
  return (
    <div className="card-producto">
      <Link to={`/producto/${producto.id}`}>
        <Image 
          src={producto.image} 
          alt={producto.name}
          className="card-img-producto"
        />
      </Link>

      <Text variant="h5" className="card-title-producto">
        {producto.name}
      </Text>

      <Text className="card-text-producto">
        {producto.description}
      </Text>

      <Link to={`/producto/${producto.id}`}>
        <Button variant="primary">Ir a detalles</Button>
      </Link>
    </div>
  );
}

export default ProductoCard;
