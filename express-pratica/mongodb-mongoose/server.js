import app from "./src/app.js"
import "dotenv/config";

app.listen(3000, () => {
    console.log(`Servidor está rodando em http://localhost:${process.env.PORT}`)
})