import { connect, disconnect } from "mongoose";

async function connectToDataBase() {
    try {
        await connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log(error);
        throw new Error("Cannot connect to database");
    }
}

async function disConnectToDataBase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Cannot disconnect to database");
    }
}

export {connectToDataBase, disConnectToDataBase};