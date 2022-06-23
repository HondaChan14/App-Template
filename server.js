// Require dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const PORT = process.env.PORT || 8000

// Require middleware //

// Declare variables //
let db, 
    dbConnectionString = process.env.DB_STRING,
    dbName = 'star-wars-quotes',
    collection 

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log(`Connected to MongoDb Database`)
        db = client.db(dbName)
        collection = db.collection('quotes')
    })

//PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})