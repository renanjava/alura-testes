import mongoose from "mongoose"

export async function databaseConnection() {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection
}
