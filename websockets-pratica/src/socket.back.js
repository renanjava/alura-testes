import io from "./servidor";

io.on("connection", (socket) => {
    console.log(`um cliente se conectou ${socket.id}`);
})