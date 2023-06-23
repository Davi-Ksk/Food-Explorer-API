const ProductsRepository = require('../repositories/products/ProductsRepository');
const ProductsCreateService = require('../services/products/ProductsCreateService');

class ProductsController {

  async create(request, response) {
    const { name, description, price, category, image } = request.body;

    const productRepository = new ProductsRepository();
    const productCreateService = new ProductsCreateService(productRepository);

    await productCreateService.execute({ name, description, price, category, image });

    console.log(productCreateService);

    return response.status(201).json();
  }

}

module.exports = ProductsController;