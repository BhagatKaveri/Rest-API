# Product Management API

## Overview

This API provides a simple interface to manage and retrieve information about products. It follows RESTful principles and is implemented using Node.js and TypeScript.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BhagatKaveri/Rest-API.git

   1. Navigate to the project directory:

   cd your-repository

   2. Install dependencies:

   npm install

##  Run the Server Locally

npm start

The server will be running at http://localhost:{port}, where {port} is the port number specified in your server setup (default is usually 3000).

## Endpoints

##  Get Products

###  Request
Method: GET
Endpoint: {base_url}/api/products


###  Response


[
  {
    "id": 1,
    "name": "Product 1",
    "price": 19.99
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 29.99
  }
]


##  Get Product by ID
### Request
Method: GET
Endpoint: {base_url}/api/products/{id}


### Response

{
  "id": 1,
  "name": "Product 1",
  "price": 19.99
}

##  Create a New Product
### Request
Method: POST
Endpoint: {base_url}/api/products
Body:
{
  "name": "New Product",
  "price": 39.99
}

###  Response

{
  "id": 3,
  "name": "New Product",
  "price": 39.99
}


##  Update Product by ID
### Request
Method: PUT
Endpoint: {base_url}/api/products/{id}
Body:
{
  "name": "Updated Product",
  "price": 49.99
}

###  Response
{
  "id": 1,
  "name": "Updated Product",
  "price": 49.99
}


##  Delete Product by ID

###  Request
Method: DELETE
Endpoint: {base_url}/api/products/{id}


### Response

Status: 204 No Content

##  Error Responses


If an error occurs, the API will return an appropriate HTTP status code along with an error message in the response body.


Example:
{
  "error": "Product not found"
}


### Conclusion
You have successfully set up and interacted with the API. Feel free to explore and use the provided endpoints to manage products.




