const mongoose = require("mongoose");
const { db } = require("./config");

/**
 * Connects to the MongoDB database using the provided connection string.
 *
 * @return {Promise<void>} A promise that resolves when the connection is established,
 * or rejects with an error if the connection fails.
 * @throws {Error} If the connection to the database fails.
 */
const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

module.exports = connectDB;
