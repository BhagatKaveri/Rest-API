"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
// Middleware for logging
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString();
    const method = req.method;
    const url = req.url;
    console.log(`[${timestamp}] ${method} ${url}`);
    next();
});
let products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
];
// GET /api/products
app.get('/api/products', (req, res) => {
    res.json(products);
});
// GET /api/products/:id
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find((p) => p.id === productId);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ error: 'Product not found' });
    }
});
// POST /api/products
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length + 1;
    products.push(newProduct);
    res.status(201).json(newProduct);
});
// PUT /api/products/:id
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const updatedProduct = req.body;
    const index = products.findIndex((p) => p.id === productId);
    if (index !== -1) {
        products[index] = Object.assign(Object.assign({}, products[index]), updatedProduct);
        res.json(products[index]);
    }
    else {
        res.status(404).json({ error: 'Product not found' });
    }
});
// DELETE /api/products/:id
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    products = products.filter((p) => p.id !== productId);
    res.sendStatus(204);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
