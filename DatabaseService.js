const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const databaseName = 'test';


const insertObjectIntoCollection = (object, collectionName, callback) => {
    MongoClient.connect(url, (error, client) => {
        if (error) console.log(error);
        else {
            const db = client.db(databaseName);
            const collection = db.collection(collectionName);
            collection.insertOne(object, (error, result) => {
                callback(error, result);
                client.close();
            });
        }
    });
}

const getFormByFormId = (formId, callback) => {
    MongoClient.connect(url, (error, client) => {
        if (error) console.log(error);
        else {
            const db = client.db(databaseName);
            const collection = db.collection('forms');
            collection.findOne({ formId }, (error, result) => {
                callback(error, result);
                client.close();
            });
        }
    });
}

const getEntireCollection = (collectionName, callback) => {
    MongoClient.connect(url, (error, client) => {
        if (error) console.log(error);
        else {
            const db = client.db(databaseName);
            const collection = db.collection(collectionName);
            collection.find({}).toArray((error, result) => {
                callback(error, result);
                client.close();
            });
        }
    });
}

const deleteAllForms = callback => {
    MongoClient.connect(url, (error, client) => {
        if (error) console.log(error);
        else {
            const db = client.db(databaseName);
            db.collection("forms").drop((error, result) => {
                callback(error, result);
                client.close();
            });
        }
    });
}

module.exports = {
    insertObjectIntoCollection,
    getEntireCollection,
    getFormByFormId,
    deleteAllForms
};