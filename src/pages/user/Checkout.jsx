import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import CarritoService from "../../services/CarritoService";
import MetodoPagoService from "../../services/MetodoPagoService";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/Checkout.css";

export default function Checkout() {
    const { cart, totalPrice } = useContext(CartContext);
    const { user } = useAuth();

    const [metodosPago, setMetodosPago] = useState([]);
    const [direccion, setDireccion] = useState("");
    const [metodoSeleccionado, setMetodoSeleccionado] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        MetodoPagoService.getAll()
            .then((res) => setMetodosPago(res.data))
            .catch(() => console.error("Error cargando métodos de pago"));
    }, []);

    useEffect(() => {
        if (user) {
            setDireccion(user.direccion || "");
        }
    }, [user]);

    const handlePagar = async () => {
        if (!metodoSeleccionado) {
            alert("Debes seleccionar un método de pago");
            return;
        }

        const nuevoCarrito = {
            usuario: { id: user.id },
            fechaCreacion: new Date().toISOString(),
            estado: { estadoId: 1 },
            metodoPago: { metodoPagoId: Number(metodoSeleccionado) },
            detalleCarrito: JSON.stringify(cart),
            total: totalPrice,
        };

        try {
            await CarritoService.create(nuevoCarrito);
            alert("Compra registrada correctamente ✔");

            navigate("/");

        } catch (error) {
            console.error(error);
            alert("Error al registrar la compra");
        }
    };

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Finalizar compra</h1>

            {/* DATOS DEL COMPRADOR */}
            <section className="checkout-section">
                <h2>Datos del comprador</h2>
                <div className="checkout-box">
                    <p><strong>Nombre:</strong> {user?.nombreUsuario}</p>
                    <p><strong>Email:</strong> {user?.correoElectronico}</p>
                </div>
            </section>

            {/* DIRECCIÓN */}
            <section className="checkout-section">
                <h2>Dirección de despacho</h2>
                <div className="checkout-box">
                    {direccion ? (
                        <p>{direccion}</p>
                    ) : (
                        <p style={{ color: "gray" }}>No tienes dirección registrada</p>
                    )}
                </div>
            </section>

            {/* MÉTODOS DE PAGO */}
            <section className="checkout-section">
                <h2>Métodos de pago</h2>

                <select
                    className="checkout-select"
                    value={metodoSeleccionado}
                    onChange={(e) => setMetodoSeleccionado(e.target.value)}
                >
                    <option value="">Seleccione un método de pago</option>

                    {metodosPago.map((mp) => (
                        <option key={mp.metodoPagoId} value={mp.metodoPagoId}>
                            {mp.tipoPago}
                        </option>
                    ))}
                </select>
            </section>

            {/* RESUMEN DEL PEDIDO */}
            <section className="checkout-section">
                <h2>Resumen del pedido</h2>

                <div className="checkout-box total-box">
                    <p><strong>Total:</strong></p>
                    <p className="checkout-total">${totalPrice}</p>
                </div>
            </section>

            {/* BOTÓN FINAL */}
            <button className="checkout-pay-btn" onClick={handlePagar}>
                PAGAR
            </button>
        </div>
    );
}
