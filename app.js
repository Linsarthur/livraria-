import { authenticate, connection } from "./src/config/database.js";
import express from "express";
import { livrosRouter } from "./src/routes/livro.routes.js";
import { externalBooksRoute } from "./src/routes/externalBooks.routes.js";
import { usersRoute } from "./src/routes/users.route.js";
import { loginRoutes } from "./src/routes/login.routes.js";

authenticate(connection).then(() => {
  connection.sync();
});

const app = express();
app.get("/", (req, res) => {
  res.send("Livraria");
});

app.use(express.json());
app.use(livrosRouter);
app.use(externalBooksRoute)
app.use(usersRoute)
app.use(loginRoutes)

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
