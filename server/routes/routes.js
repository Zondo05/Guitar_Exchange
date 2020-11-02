const controller = require('../controllers/controller');

module.exports = app => {
    // C
    app.post('/api/product', controller.createProduct);
    // R
    app.get('/api/products', controller.allProducts);
    app.get('/api/product/:id', controller.oneProduct);
    // U
    app.patch('/api/product/:id', controller.updateProduct);
    app.patch('/api/product/:id/review', controller.addReview);
    // D
    app.delete('/api/product/:id', controller.deleteProduct);
}