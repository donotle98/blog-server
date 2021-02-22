const app = require('./app');
const { DB_PW } = require('./config');
const mongoose = require('mongoose');
require('dotenv').config();

//connect to mongodb
const dbURI = `mongodb+srv://donole:${DB_PW}@cluster0.2ke1l.mongodb.net/blog-site?retryWrites=true&w=majority`;
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) =>
        app.listen(process.env.PORT || 5000, () =>
            console.log(
                `Connected to MongoDB, Express is running on port ${
                    process.env.PORT || 5000
                }!`
            )
        )
    )
    .catch((e) => console.log(e));
