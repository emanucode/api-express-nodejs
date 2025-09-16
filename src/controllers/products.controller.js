const products = [
  {
    name: "Pan",
    categories: ["alimento", "harinas"],
    precio: 3000,
    cantidad: "2kg",
  },
  {
    name: "Queso",
    categories: ["alimento", "lacteo"],
    precio: 5000,
    cantidad: "500g",
  },
];

// Funcion para mostrar todos los productos de la API
export function getAllProducts(req, res) {
  res.json(products);
}

// Funcion para buscar productos por su nombre
export function searchProducts(req, res) {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "El nombre es requerido" });
  }

  const productFiltred = products.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );
  res.json(productFiltred);
}

// Funcion para buscar productos por categoria
export function filtredProducts(req, res) {
  const { category } = req.query;

  if (category) {
    const productsFiltred = products.filter((item) =>
      item.categories.includes(category)
    );

    return res.json(productsFiltred);
  }
  res.json({ products });
}
