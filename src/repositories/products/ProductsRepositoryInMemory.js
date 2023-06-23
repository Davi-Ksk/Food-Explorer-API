// class ProductRepositoryInMemory {
//   product =[];

//   async create({ name, description, price, category, image }) {
//     const product = {
//       id: Math.floor(Math.random() * 1000) + 1, 
//       name,
//       description,
//       price,
//       category,
//       image,
//     };

//     this.product.push(product);

//     return product;
//   }



//   async findByDescription(description) {
//     return this.product.find(product => product.description === description);
//   }

//   async update({ id, newName, newDescription, newPrice, newCategory, newImage }) {
//     const productToUpdate = this.product.find(product => product.id === id);
//     this.product.push
//   }

// }