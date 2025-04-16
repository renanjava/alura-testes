import mongoose from "mongoose"

export async function databaseConnection() {
    mongoose.connect("mongodb://localhost:27017")
    return mongoose.connection
}
