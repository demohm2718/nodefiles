// Estb connection
//const { MongoClient } = require('mongodb');
import { MongoClient as MongoClient } from 'mongodb';
// Connection URL
const url = 'mongodb://localhost:27017';
// Database name
const dbName = 'ssWeights';
// Create new MongoClient
const mclient = new MongoClient(url, { useNewUrlParser: true });
// Use connect method to connect to server
mclient.connect(function(err) {
    // if successful connection to DB...
    //console.log("Success!!!!!");
    // This obj represents the db
    const db = mclient.db(dbName);
    getDocuments(db, function(){
        mclient.close();
    });

});

// Write records
const putDocuments = function(db, callback) {
    // Get document collection
    const collection = db.collection('documents');
    // Insert some weights
    collection.insertMany([
    {Axle : 85}, {Dorine : 120}, {Carla : 320}
    ], function(err, result) {
        console.log("Inserted 3 records.");
        callback(result);
    });
}

// Retrieve records
const getDocuments = function(db, callback) {
    // Get collection
    const collection = db.collection('documents');
    // Find all documents
    collection.find({}).toArray(function(err, docs) {
        console.log("Found these..");
        console.log(docs);
        callback(docs);
    });
}
