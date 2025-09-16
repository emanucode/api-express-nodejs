# Backend Express + Node.JS

## Instalacion

1. Clona el repositorio

```shell
git clone https://github.com/emanucode/api-express-nodejs.git
```

2. Instalar las dependencias:

```shell
npm install
```

3. Configura variables de entorno:

```bash
# Copia el archivo de ejemplo y completa los datos requeridos
cp .env-example .env
```

Luego edita el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecuta en modo desarrollo:

```bash
npm run dev
```

## Documentacion de la API

### Optener todos los productos

- **GET** `/products`
- **Descripcion:** Devuelve la lista de los productos.
- **Respuesta ejemplo:**

```json
[
  {
    "id": "1",
    "name": "Pan",
    "precio": 3000,
    "cantidad": "2kg",
    "categories": ["alimento", "harina"]
  },
  {
    "id": "2",
    "name": "queso",
    "precio": 5000
    "cantidad": "500g",
    "categories": ["lacteo", "alimento"]
  }
]
```

### Buscar Productos por nombre

- **GET** `/products/search?name=nombreDelProducto`
- **Descripcion:** Devuelve el producto con ese nombre.
- **Ejemplo de uso:** `/products/search?name=pan`
- **Respuesta ejemplo:**

```json
[
  {
    "id": "1",
    "precio": 3000,
    "name": "Pan",
    "cantidad": "2kg",
    "categories": ["alimento", "harina"]
  }
]
```
