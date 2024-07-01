const { MongoClient} = require('mongodb');
require('dotenv').config();

const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_HOST,
    MONGO_DATABASE,
} = process.env;


//const uri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}`;
const uri = `mongodb://root:M1A2024.@3.95.226.88:27017`;

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

//no funciona
const getItemsByElement = async (collectionName, element) => {
    const mongoClient = new MongoClient(uri);
    try {
        await mongoClient.connect();
        const db = mongoClient.db( 'Usuarios');
        const collection = db.collection(collectionName);
        const items = await collection.find({ element: element }).toArray();
        return items;
    } catch (error) {
        console.error('Error getItemsByElement: ', error);
        return error;
    } finally {
        await mongoClient.close();
    }
};


const deleteUsername = async (collectionName, username, element) => {
    const mongoClient = new MongoClient(uri);
    try {
        await mongoClient.connect();
        const db = mongoClient.db('Usuarios'); // Specify your database name
        const collection = db.collection(collectionName);
        
        // Perform deletion based on username and element
        const result = await collection.deleteOne({ username, element });
        
        return result.deletedCount > 0;

    } catch (error) {
        console.error('Error deleteUsername: ', error);
        return error;
    } finally {
        await mongoClient.close();
    }
};

const deleteItemByCriteria = async (collectionName, criteria) => {
    const mongoClient = new MongoClient(uri);
    try {
        await mongoClient.connect();
        const db = mongoClient.db('Usuarios');
        const collection = db.collection(collectionName);
        const result = await collection.deleteOne(criteria);

        return result.deletedCount > 0;
    } catch (error) {
        console.error('Error deleteItemByCriteria: ', error);
        return error;
    } finally {
        await mongoClient.close();
    }
};


const deleteSolicitud = async (collectionName, username, agencia, precio) => {
    const mongoClient = new MongoClient(uri);
    try {
        await mongoClient.connect();
        const db = mongoClient.db('Usuarios');
        const collection = db.collection(collectionName);
        const result = await collection.deleteOne({ element: 'solicitud', username, agencia, precio });

        return result.deletedCount > 0;
    } catch (error) {
        console.error('Error deleteSolicitud: ', error);
        return false;
    } finally {
        await mongoClient.close();
    }
};

module.exports = {
    insertData,
    checkUserExists,
    loginFind,
    getItemsByElement,
    deleteUsername,
    deleteItemByCriteria,
    deleteSolicitud
};