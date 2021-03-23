import * as Mongoose from "mongoose";

let database: Mongoose.Connection;

export const connect = () => {

    const url = "mongodb://"+process.env.COSMOSDB_HOST+":"+process.env.COSMOSDB_PORT+"/"+process.env.COSMOSDB_DBNAME+"?ssl=true&replicaSet=globaldb&retrywrites=false";

    if (database) {
        return;
    }
    
    Mongoose.connect(url, {
        auth: {
            user: process.env.COSMOSDB_USER,
            password: process.env.COSMOSDB_PASSWORD
        },
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    
    database = Mongoose.connection;

    database.once("open", async () => {
        console.log("Connected to database");
    });
      
    database.on("error", () => {
        console.log("Error connecting to database");
    });

};

export const disconnect = () => {
    
    if (!database) {
      return;
    }
    
    Mongoose.disconnect();

    database.once("close", async () => {
        console.log("Diconnected  to database");
    });

};