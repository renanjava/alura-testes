import express from "express";
import databaseConnection from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await databaseConnection();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
})

const app = express();
routes(app);

export default app;