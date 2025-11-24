import axios from "axios";

const API_URL = "https://ecommerce-fp09.onrender.com/api/v1/metodos-pago";

class MetodoPagoService {
    getAll() {
        return axios.get(API_URL);
    }
}

export default new MetodoPagoService();
