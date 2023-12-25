import request from 'supertest';
import app from '../src/main';
import { Server } from 'http';

describe('API Endpoints', () => {
  let server: Server;

  beforeAll((done: jest.DoneCallback) => {
    server = app.listen(4000, () => {
      done();
    }) as Server;
  });

  afterAll((done: jest.DoneCallback) => {
    server.close(done);
  });

  it('GET /api/products should return a list of products', async () => {
    const response = await request(server).get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
  });

  it('GET /api/products/:id should return details of a specific product', async () => {
    const response = await request(server).get('/api/products/1');
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(1);
  });

  it('GET /api/products/:id should handle a non-existing product', async () => {
    const response = await request(server).get('/api/products/999');
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Product not found');
  });

  it('POST /api/products should create a new product', async () => {
    const newProduct = { name: 'New Product', price: 39.99 };
    const response = await request(server).post('/api/products').send(newProduct);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newProduct.name);
  });

  it('PUT /api/products/:id should update details of a specific product', async () => {
    const updatedProduct = { name: 'Updated Product', price: 49.99 };
    const response = await request(server).put('/api/products/1').send(updatedProduct);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe(updatedProduct.name);
  });

  it('PUT /api/products/:id should handle updating a non-existing product', async () => {
    const updatedProduct = { name: 'Updated Product', price: 49.99 };
    const response = await request(server).put('/api/products/999').send(updatedProduct);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Product not found');
  });

  it('DELETE /api/products/:id should delete a product', async () => {
    const response = await request(server).delete('/api/products/1');
    expect(response.status).toBe(204);
  });

  it('DELETE /api/products/:id should handle deleting a non-existing product', async () => {
    const response = await request(server).delete('/api/products/999');
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Product not found');
  });
});
