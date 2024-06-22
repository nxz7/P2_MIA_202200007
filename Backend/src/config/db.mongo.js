const { MongoClient} = require('mongodb');
require('dotenv').config();

const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_HOST,
    MONGO_DATABASE,
} = process.env;


//const uri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}`;
const uri = `mongodb://root:M1A2024.@localhost:27017`;

const insertData = async(database, data) => {
    console.log('uri', uri);
    const mongoClient = new MongoClient(uri);
    try {
        await mongoClient.connect();
        const dbmongo = mongoClient.db('Usuarios');
        const coleccion = dbmongo.collection(database);
        const result = await coleccion.insertOne(data);
        return result;
    } catch (error) {
        console.error('Error insertData: ', error);
        return error;
    } finally {
        await mongoClient.close();
    }
};

const checkUserExists = async (database, username) => {
    const mongoClient = new MongoClient(uri);
    try {
        await mongoClient.connect();
        const dbmongo = mongoClient.db('Usuarios');
        const collection = dbmongo.collection(database);
        const user = await collection.findOne({ username });
        return user;
    } catch (error) {
        console.error('Error checkUserExists: ', error);
        return error;
    } finally {
        await mongoClient.close();
    }
};


const loginFind = async (collectionName, username, password) => {
    const mongoClient = new MongoClient(uri);
    try {
        await mongoClient.connect();
        const db = mongoClient.db('Usuarios');
        const collection = db.collection(collectionName);
        const user = await collection.findOne({ username, password, element: 'usuario' });
        return user;
    } catch (error) {
        console.error('Error loginFind: ', error);
        return error;
    } finally {
        await mongoClient.close();
    }
};

module.exports = {
    insertData,
    checkUserExists,
    loginFind
};