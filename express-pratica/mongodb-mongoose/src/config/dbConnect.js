import mongoose from "mongoose"
import logger from './logger.js';

async function databaseConnection() {
    logger.info(process.env.DB_CONNECTION_STRING)
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection
}

export default databaseConnection
