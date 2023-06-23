const AppError = require("../../utils/AppError");

class ProductsCreateService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute({ name, description, price, category, image }) {

    // const checkUserIsAdmin = await this.userRepository.findAdmin();

    // // if(!checkUserIsAdmin) {
    // //   throw new AppError("Somente administradores podem criar produtos");
    // // }
      
    const productCreated = await this.productRepository.create({ 
      name, 
      description, 
      price, 
      category, 
      image 
    });

    return productCreated;

  }

}

module.exports = ProductsCreateService