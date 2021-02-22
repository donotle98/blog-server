const app = require('./app');
const { DB_PW } = require('./config');
const mongoose = require('mongoose');
require('dotenv').config();

//connect to mongodb
const dbURI = `mongodb+srv://donole:${DB_PW}@cluster0.2ke1l.mongodb.net/blog-site?retryWrites=true&w=majority`;

const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
client.connect((err) => {
    const collection = client.db('test').collection('devices');
    // perform actions on the collection object
    app.listen(process.env.PORT || 5000, () =>
        console.log(
            `Connected to MongoDB, Express is running on port ${
                process.env.PORT || 5000
            }!`
        )
    );
    client.close();
});
