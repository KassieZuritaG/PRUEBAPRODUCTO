import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3100'
});

export const getProducts = () => {
    return api.get('/api/productos'); // Cambia la ruta según tus rutas de backend
};

export const createProduct = (productData) => {
    return api.post('/api/productos', productData); // Cambia la ruta según tus rutas de backend
};