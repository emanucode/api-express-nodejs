import "dotenv/config";
import express from "express";
import notFund from "./src/middlewares/notFund.js";
import productsRouter from "./src/routes/products.routes.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API" });
});

app.use("/api", productsRouter);
app.use(notFund);

// Puerto corriendo
app.listen(PORT, () => {
  console.log(`Server on port http://localhost:${PORT}/api`);
});
