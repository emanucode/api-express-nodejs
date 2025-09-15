import "dotenv/config";
import express from "express";
import notFund from "./src/middlewares/notFund.js";
import isaLive from "./src/middlewares/isaLive.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use("/api", isaLive);
app.use("/api", notFund);

// Puerto corriendo
app.listen(PORT, () => {
  console.log(`Server on port http://localhost:${PORT}/api`);
});
