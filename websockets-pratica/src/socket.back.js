import io from "./servidor.js";

io.on("connection", (socket) => {
    console.log(`um cliente se conectou ${socket.id}`);

    socket.on("selecionar_documento", (nome) => {
        socket.join(nome)
    })

    socket.on("texto_editor", (texto) => {
        //socket.broadcast.emit("texto_editor_clientes", texto)
        socket.to("JavaScript").emit("texto_editor_clientes", texto)
    });
});
