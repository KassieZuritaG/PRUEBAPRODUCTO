const connection = require('../conection/conection')

const mainController = {
  getProducts: (req, res) => {
    connection.query('SELECT * FROM productos', (error, results) => {
      if (error) {
        console.error('Error al obtener los productos:', error);
        return res.status(500).json({ message: 'Error del servidor' });
      }
      return res.status(200).json(results);
    });
  },

  getProductById: (req, res) => {
    const productId = req.params.id;
    connection.query('SELECT * FROM productos WHERE id = ?', [productId], (error, result) => {
      if (error) {
        console.error('Error al obtener producto por ID:', error);
        return res.status(500).json({ message: 'Error del servidor' });
      }
      if (result.length === 0) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      return res.status(200).json(result[0]);
    });
  },

  createProduct: (req, res) => {
    const newProduct = req.body;
    connection.query('INSERT INTO productos SET ?', newProduct, (error, result) => {
      if (error) {
        console.error('Error al crear producto:', error);
        return res.status(500).json({ message: 'Error del servidor' });
      }
      return res.status(201).json({ message: 'Producto creado exitosamente', insertId: result.insertId });
    });
  },

  updateProduct: (req, res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;
    connection.query('UPDATE productos SET ? WHERE id = ?', [updatedProduct, productId], (error, result) => {
      if (error) {
        console.error('Error al actualizar producto:', error);
        return res.status(500).json({ message: 'Error del servidor' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      return res.status(200).json({ message: 'Producto actualizado exitosamente' });
    });
  },

  deleteProduct: (req, res) => {
    const productId = req.params.id;
    connection.query('DELETE FROM productos WHERE id = ?', [productId], (error, result) => {
      if (error) {
        console.error('Error al eliminar producto:', error);
        return res.status(500).json({ message: 'Error del servidor' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      return res.status(200).json({ message: 'Producto eliminado exitosamente' });
    });
  }
};

module.exports = mainController;