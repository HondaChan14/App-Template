// Require dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const PORT = 8000

// Require middleware //

// Declare variables //
let db, 
    dbConnectionString = process.env.DB_STRING,
    dbName = 'dbName',
    collection 

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log(`Connected to MongoDb Database`)
        db = client.db(dbName)
        collection = db.collection('collectionName')
    })

app.set('view engine', 'ejs')
app.use(express.static('public')) 
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

//PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})