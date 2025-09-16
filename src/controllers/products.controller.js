const products = [
  {
    name: "Pan",
    categoria: ["alimento", "harinas"],
    precio: 3000,
    cantidad: "2kg",
  },
  {
    name: "Queso",
    categoria: ["alimento", "lacteo"],
    precio: 5000,
    cantidad: "500g",
  },
];

// Funcion para mostrar todos los productos de la API
export function getAllProducts(req, res) {
  res.json(products);
}

// Funcion para buscar productos en la base de datos
export function searchProducts(req, res) {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "El nombre es requerido" });
  }

  const productFiltred = products.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );

  if (productFiltred.length == 0) {
    return res.status(404).json({ error: "no se encontraron productos" });
  }

  res.json(productFiltred);
}
