import * as Model from "../models/Products.js";

// Funcion para mostrar todos los productos de la API y por su categoria
export async function getAllProducts(req, res) {
  const { category } = req.query;

  const products = await Model.getAllProducts();

  if (category) {
    const productsFiltred = products.filter((item) =>
      item.categories.includes(category)
    );

    return res.json(productsFiltred);
  }
  res.json(products);
}

// Funcion para buscar productos por su id
export async function getProductById(req, res) {
  const id = req.params.id;

  const product = await Model.getProductById(id);

  if (!product) {
    res.status(404).json({ error: "no existe el producto" });
  }

  res.json(product);
}

// Funcion para buscar productos por su nombre
export async function searchProducts(req, res) {
  const { name } = req.query;

  const products = await Model.getAllProducts();

  if (!name) {
    return res.status(400).json({ error: "El nombre es requerido" });
  }

  const productFiltred = products.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );
  res.json(productFiltred);
}

// Funcion para crear un producto
export async function createProduct(req, res) {
  const { name, precio, cantidad, categories } = req.body;

  const product = await Model.createProduct({
    name,
    precio,
    cantidad,
    categories,
  });
  res.status(201).json(product);
}
