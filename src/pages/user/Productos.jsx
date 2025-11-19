import React from "react";
import ProductoList from "../../components/organisms/ProductoList";
import { productosTemporales } from "../../data/productos";

function Productos() {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Productos</h1>

      <p className="text-center text-gray-600 mb-10">
        Descubre nuestra colección de productos de belleza coreana...
      </p>

      <ProductoList products={productosTemporales} />
    </div>
  );
}

export default Productos;
/* se debe usar este cuando se conecte con el backend

import { useEffect, useState } from "react";
import ProductList from "../../components/organisms/ProductList";
import ProductosService from "../../services/ProductosService";

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    ProductosService.getAll()
      .then((res) => {
        setProductos(res.data);
      })
      .catch((error) => {
        console.error("Error obteniendo productos:", error);
      });
  }, []);

  return <ProductList products={productos} />;
}

export default Productos;
 */