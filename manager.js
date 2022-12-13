const ProductManager = require("./productManager");

const uid = (() => (id = 1, () => id++))();
const producto = {
  id: uid(),
  title: "Camiseta",
  description: "Esto es una camiseta",
  price: 20000,
  thumbnail: "Sin imagen",
  code: "abc123sadsa",
  stock: 323,
};
const producto2 = {
  id: uid(),
  title: "Short",
  description: "Esto es un short",
  price: 4000,
  thumbnail: "Sin imagen ",
  code: "123edfdsa",
  stock: 325,
};
const productManager = new ProductManager([], "users.json");

const runAwait = async () => {
  await productManager.addProduct(producto);
  await productManager.addProduct(producto2);

  console.log("=======================");

  const products = await productManager.getproducts();
  console.log("Productos: ", products);

  console.log("=======================");


  const productFilter = await productManager.getProductById(1);
  console.log("Producto filtrado: ", productFilter);
  console.log("======================");
  
  await productManager.deleteProductById(1);
  await productManager.updateProduct(2);
  const products2 = await productManager.getproducts();
  console.log("Producto 2 actualizado: ", products2);
};

runAwait();